import { spg_contract } from "@/constants/contract_addresses"
import { useStoryClient } from "./useStoryClient"
import { IpMetadata, License, LicenseTerms } from "@story-protocol/core-sdk"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { zeroAddress } from "viem"

export const useMintAndRegisterIp = () => {
  const { storyClient } = useStoryClient()

  const mutationFn = async ({ ipMetadata }: { ipMetadata?: any }) => {
    const client = await storyClient()
    await client.ipAsset.mintAndRegisterIp({
      spgNftContract: spg_contract.address,
      ipMetadata,
    })
  }

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      toast.success("Ip Asset minted and registered successfully")
    },
    onError: () => {
      toast.error("Failed to register Ip")
    },
  })
}

export const useMintAndRegisterIpWithLicenseTerms = () => {
  const { storyClient } = useStoryClient()

  const mutationFn = async ({
    ipMetadata,
    licenseTerms,
  }: {
    ipMetadata: any
    licenseTerms: Partial<LicenseTerms>
  }) => {
    const client = await storyClient()
    const commercialRemixTerms: LicenseTerms = {
      ...(licenseTerms as LicenseTerms),
      transferable: true,
      royaltyPolicy: "0xBe54FB168b3c982b7AaE60dB6CF75Bd8447b390E", // RoyaltyPolicyLAP address from https://docs.story.foundation/docs/deployed-smart-contracts
      defaultMintingFee: BigInt(0), // no minting fee
      expiration: BigInt(0), // no expiration
      commercializerChecker: zeroAddress,
      commercializerCheckerData: zeroAddress,
      commercialRevCeiling: BigInt(0), // no commercial revenue ceiling
      derivativesAttribution: true,
      derivativesApproval: false,
      derivativesReciprocal: true,
      derivativeRevCeiling: BigInt(0), // no derivative revenue ceiling
      currency: "0x1514000000000000000000000000000000000000", // $WIP address from https://docs.story.foundation/docs/deployed-smart-contracts
      uri: "",
    }
    return client.ipAsset.mintAndRegisterIpAssetWithPilTerms({
      spgNftContract: spg_contract.address,
      licenseTermsData: [{ terms: commercialRemixTerms }],
      ipMetadata,
    })
  }

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      toast.success("Ip Asset minted and registered successfully")
    },
    onError: () => {
      toast.error("Failed to register Ip")
    },
  })
}
