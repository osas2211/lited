"use client"
import React, { useEffect, useState } from "react"
import { ArrowRightIcon } from "@/components/Icons"
import { Button, Input, Typography } from "@/components"
import { FileUploadInput, Switch } from "@/components/Input"
import { AddCreators } from "./Creators"
import {
  IpCreator,
  IpMetadata,
  License,
  LicenseTerms,
} from "@story-protocol/core-sdk"
import { useUploadFile } from "@/hooks/useUploadFile"
import { env_vars } from "@/constants/env_vars"
import { getHashFromUrl } from "@/libs/hashContent"
import { MediaFormat } from "@/types/media"
import { useAccount } from "wagmi"
import { useUploadJSONToIPFS } from "@/hooks/useUploadToIPFS"
import { useStoryClient } from "@/hooks/useStoryClient"
import { createHash } from "crypto"
import {
  useMintAndRegisterIp,
  useMintAndRegisterIpWithLicenseTerms,
} from "@/hooks/useStoryFuncs"
import { useConnectModal } from "@tomo-inc/tomo-evm-kit"
import { LicenseTermsForm } from "./LicenseTermsForm"
import { Divider } from "@mui/joy"
import { useGetIpAssets } from "@/hooks/useStoryAPI"
import { spg_contract } from "@/constants/contract_addresses"

const { Caption2Regular, Subtitle2Medium, Subtitle3Regular } = Typography
const inputStyle =
  "w-full bg-grey-1 mt-[12px] placeholder:text-grey-500 text-grey-100 active:border-grey-500 hover:border-grey-500 border-[1px] border-grey-700 rounded-[8px]"
const default_data = {
  title: "",
  description: "",
  image: "",
  mediaUrl: "",
  mediaType: "",
  creators: [],
}

export const RegisterIpForm = ({
  type,
}: {
  type: "music" | "photo" | "video" | "comics"
}) => {
  const fileInputAcceptByType =
    type === "music"
      ? ".mp3"
      : type === "video"
      ? ".mp4"
      : type === "comics"
      ? ".pdf"
      : ".jpg, .png, .jpeg, .webp"
  const walletAccount = useAccount()
  const [creators, setCreators] = useState<IpCreator[]>([])
  const [ipMetaData, setIpMetaData] = useState<IpMetadata>(default_data)
  const [licenseTerms, setLicenseTerms] = React.useState<Partial<LicenseTerms>>(
    {
      commercialUse: true,
      commercialAttribution: true,
      commercialRevShare: 50, // Default to 50%
      commercialRevCeiling: BigInt(0), // No ceiling
      derivativesAllowed: true,
    }
  )
  const [songFile, setSongFile] = useState<File>()
  const [thumbnailFile, setThumbnailFile] = useState<File>()
  const { mutateAsync: uploadFile, isPending: isUploadingFile } =
    useUploadFile()
  const { mutateAsync: uploadJSON, isPending: isUploadingJSON } =
    useUploadJSONToIPFS()
  const { storyClient } = useStoryClient()
  const { mutateAsync: mintAndRegisterIp, isPending: isRegistering } =
    useMintAndRegisterIp()
  const { mutateAsync: registerWithLicenseTerms, isPending: isRegistering2 } =
    useMintAndRegisterIpWithLicenseTerms()
  const { openConnectModal } = useConnectModal()
  const { isConnected } = useAccount()
  const [attachLicenseTerms, setAttachLicenseTerms] = useState(false)
  const { refetch } = useGetIpAssets({
    tokenContractIds: [spg_contract.address],
  })

  const generateJSON = async () => {
    const client = await storyClient()

    const creators_ = creators.length
      ? creators
      : [
          client.ipAsset.generateCreatorMetadata({
            name: "LiTED Tester",
            address: walletAccount.address!!,
            contributionPercent: 100,
          }),
        ]
    if (type === "music" || type === "video") {
      const song = await uploadFile({ file: songFile as File })
      const song_url = `https://${env_vars.pinata_gateway}/files/${song.cid}`
      const thumbnail = await uploadFile({ file: thumbnailFile as File })
      const thumbnail_url = `https://${env_vars.pinata_gateway}/files/${thumbnail.cid}`
      const ipMetaDataJSON = {
        ...ipMetaData,
        image: thumbnail_url,
        imageHash: await getHashFromUrl(thumbnail_url),
        mediaUrl: song_url,
        mediaHash: await getHashFromUrl(song_url),
        mediaType: type === "music" ? MediaFormat.MP3 : MediaFormat.MP4_VIDEO,
        creators: creators_,
      }
      return ipMetaDataJSON
    } else {
      const thumbnail = await uploadFile({ file: thumbnailFile as File })
      const thumbnail_url = `https://${env_vars.pinata_gateway}/files/${thumbnail.cid}`
      const ipMetaDataJSON = {
        ...ipMetaData,
        image: thumbnail_url,
        imageHash: await getHashFromUrl(thumbnail_url),
        creators: creators_,
        // mediaType: type === "photo" ? MediaFormat.JPEG : MediaFormat.PNG,
      }
      return ipMetaDataJSON
    }
  }

  const handleFormSubmission = async () => {
    if (isConnected) {
      const client = await storyClient()
      const ipMetaDataJSON = await generateJSON()
      const nftMetadata = {
        name: `${ipMetaDataJSON.title} NFT`,
        description: `This is an NFT representing owernship of ${ipMetaDataJSON.title}.`,
        image: ipMetaDataJSON.image,
      }
      const ipIpfsHash = await uploadJSON(ipMetaDataJSON)
      const ipHash = createHash("sha256")
        .update(JSON.stringify(ipMetaDataJSON))
        .digest("hex")

      const nftIpfsHash = await uploadJSON(nftMetadata)
      const nftHash = createHash("sha256")
        .update(JSON.stringify(nftMetadata))
        .digest("hex")
      if (attachLicenseTerms) {
        console.log("License Terms", licenseTerms)
        await registerWithLicenseTerms({
          ipMetadata: {
            ipMetadataURI: `https://ipfs.io/ipfs/${ipIpfsHash}`,
            ipMetadataHash: `0x${ipHash}`,
            nftMetadataURI: `https://ipfs.io/ipfs/${nftIpfsHash}`,
            nftMetadataHash: `0x${nftHash}`,
          },
          licenseTerms: { ...licenseTerms },
        })
      } else {
        await mintAndRegisterIp({
          ipMetadata: {
            ipMetadataURI: `https://ipfs.io/ipfs/${ipIpfsHash}`,
            ipMetadataHash: `0x${ipHash}`,
            nftMetadataURI: `https://ipfs.io/ipfs/${nftIpfsHash}`,
            nftMetadataHash: `0x${nftHash}`,
          },
        })
      }
      refetch()
    } else {
      openConnectModal && openConnectModal()
    }
  }
  return (
    <div>
      <div className="my-[30px] md:my-[24px] w-full mx-auto">
        <form className="my-[24px] flex flex-col gap-[20px]">
          <div>
            <label htmlFor="title">
              <Subtitle2Medium>Title</Subtitle2Medium>
            </label>
            <Input
              id="title"
              className={inputStyle}
              placeholder="Enter your IP name e.g single, ep or album name"
              onChange={(e) =>
                setIpMetaData((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </div>
          <div>
            <label htmlFor="description">
              <Subtitle2Medium>Description</Subtitle2Medium>
            </label>
            <textarea
              id="description"
              className={`${inputStyle} min-h-[120px] p-[16px] border-[1px] border-grey-700 rounded-[8px]
              focus:outline-none focus:border-primary-default hover:border-[#9813B9]
              placeholder:text-grey-300 placeholder:text-[16px] font-[400] text-[16px]
              disabled:border-grey-400 disabled:placeholder:text-grey-400 disabled:bg-grey-900 bg-grey-700 text-grey-0`}
              placeholder="Enter a detailed description of your Ip or Song"
              onChange={(e) =>
                setIpMetaData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="thumbnail">
                <Subtitle2Medium>Thumbnail</Subtitle2Medium>
                <Caption2Regular className="text-grey-300">
                  Recommended thumbnail aspect ratio is 1:1
                </Caption2Regular>
                {/* <Caption2Regular className="text-grey-300">
                  Recommended thumbnail aspect ratio is 16:9
                </Caption2Regular> */}
              </label>
              <FileUploadInput
                onFileSelect={(file) => setThumbnailFile(file)}
                accept=".jpg, .png, .jpeg, .webp"
                id="thumbnail"
              />
            </div>

            {type === "music" ||
              (type === "video" && (
                <div>
                  <label htmlFor="media">
                    <Subtitle2Medium>
                      {type === "video" ? "Video" : "Song"}
                    </Subtitle2Medium>
                    <Caption2Regular className="text-grey-300">
                      Max size is 20MB
                    </Caption2Regular>
                  </label>
                  <FileUploadInput
                    onFileSelect={(file) => setSongFile(file)}
                    accept={fileInputAcceptByType}
                    id="media"
                  />
                </div>
              ))}
          </div>
          <div>
            <label htmlFor="creators">
              <Subtitle2Medium>Collaborators (optional)</Subtitle2Medium>
            </label>
            <AddCreators {...{ creators, setCreators }} />
          </div>
          <Divider />
          <div className="flex items-center justify-between">
            <Subtitle2Medium className="text-grey-100">
              Do you want to attach license terms to this IP?
            </Subtitle2Medium>

            <Switch onChange={(checked) => setAttachLicenseTerms(checked)} />
          </div>

          <div>
            {attachLicenseTerms && (
              <LicenseTermsForm {...{ licenseTerms, setLicenseTerms }} />
            )}
          </div>

          <div className="flex justify-end mt-[48px]">
            <Button
              variant="primary"
              sufficIcon={<ArrowRightIcon />}
              onClick={handleFormSubmission}
              isLoading={
                isUploadingFile ||
                isUploadingJSON ||
                isRegistering ||
                isRegistering2
              }
            >
              {isUploadingFile || isUploadingJSON
                ? "Uploading assets"
                : "Register IP"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
