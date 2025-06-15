import React, { useState } from "react"
import { ArrowLinearLeftIcon } from "../../Icons"
import { Button, Container, Typography } from "@/components"
import { NFTCard } from "@/components/Card/NFTCard"
import Image from "next/image"
import { IpAssetI } from "@/types/story.api"
import { usePayIPAsset } from "@/hooks/useStoryFuncs"

interface PreviewI {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  nft: IpAssetI
}

export const Preview: React.FC<PreviewI> = ({ setOpen, nft }) => {
  const { Button2 } = Typography
  const { mutateAsync: payIPA, isPending: isPaying } = usePayIPAsset()
  const handlePayIPA = async () => {
    // console.log("Paying IPA for NFT:", nft.ipId)
    await payIPA({ receiverIpId: nft.ipId })
  }

  const [choice, setChoice] = useState<"nft" | "image">("nft")
  return (
    <div className="w-[100%] md:w-[600px] h-full">
      <div className="flex items-center p-[20px] justify-between bg-grey-1000 md:bg-transparent">
        <div
          className="inline-flex items-center gap-[8px] cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <ArrowLinearLeftIcon />
          <Button2 className="button">Back</Button2>
        </div>

        <div className="inline-flex rounded-[80px]">
          <Button
            onClick={() => setChoice("image")}
            size="small"
            variant={choice === "image" ? "primary" : "secondary"}
            style={{
              border: "none",
              padding: "10px 12px 10px 20px",
              borderEndEndRadius: "0",
              borderTopRightRadius: "0",
              minWidth: "77px",
            }}
          >
            Image
          </Button>
          <Button
            onClick={() => setChoice("nft")}
            size="small"
            variant={choice === "nft" ? "primary" : "secondary"}
            style={{
              border: "none",
              padding: "10px 20px 10px 12px",
              borderStartStartRadius: "0",
              borderBottomLeftRadius: "0",
              minWidth: "77px",
            }}
          >
            NFT
          </Button>
        </div>
      </div>
      <Container className="md:py-[20px]">
        {choice === "nft" ? (
          <NFTCard
            {...nft}
            size="large"
            ButtonText={"Pay IPA"}
            buttonLoading={isPaying}
            onButtonClick={handlePayIPA}
          />
        ) : (
          <div className="relative w-full h-full">
            <div className={`relative w-full h-[450px]`}>
              <img
                src={nft?.nftMetadata?.imageUrl || ""}
                alt={"name"}
                className="rounded-[20px] w-full h-full"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
