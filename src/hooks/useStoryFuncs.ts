import { spg_contract } from "@/constants/contract_addresses"
import { useStoryClient } from "./useStoryClient"
import {
  IpMetadata,
  License,
  LicenseTerms,
  WIP_TOKEN_ADDRESS,
} from "@story-protocol/core-sdk"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { parseEther, zeroAddress } from "viem"

const PIL_TEMPLATE_ADDRESS = "0x2E896b0b2Fdb7457499B56AAaA4AE55BCB4Cd316"

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
    const response = await client.ipAsset.mintAndRegisterIpAssetWithPilTerms({
      spgNftContract: spg_contract.address,
      licenseTermsData: [{ terms: commercialRemixTerms }],
      ipMetadata,
    })
    return response
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

export const usePayIPAsset = () => {
  const { storyClient } = useStoryClient()

  const mutationFn = async ({
    receiverIpId,
    payerIpId,
  }: {
    receiverIpId: string
    payerIpId?: string
  }) => {
    const client = await storyClient()
    // const response = await client.wipClient.deposit({
    //   amount: parseEther("1"), // 1 IP tokens
    //   // txOptions: { waitForTransaction: true },
    // })
    const vaultAddress = await client.royalty.getRoyaltyVaultAddress(
      receiverIpId as `0x${string}`
    )

    console.log("Vault Address:", vaultAddress)

    if (vaultAddress === zeroAddress) {
      // First, attach license terms to the IP (if not already done)
      await client.license.attachLicenseTerms({
        ipId: receiverIpId as `0x${string}`,
        licenseTemplate: PIL_TEMPLATE_ADDRESS,
        licenseTermsId: "95",
      })

      // Then mint a license token to trigger vault deployment
      await client.license.mintLicenseTokens({
        licensorIpId: receiverIpId as `0x${string}`,
        licenseTemplate: PIL_TEMPLATE_ADDRESS,
        licenseTermsId: "95",
        amount: 1,
        receiver: receiverIpId as `0x${string}`, // or any address
        // royaltyContext: "",
        maxMintingFee: 0,
        maxRevenueShare: 0,
      })
    }

    await client.royalty.payRoyaltyOnBehalf({
      receiverIpId: receiverIpId as `0x${string}`, // the ip you're paying
      payerIpId: zeroAddress,
      token: WIP_TOKEN_ADDRESS, // the token contract address
      amount: parseEther("1"),
    })
  }

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      toast.success("Payed IP Asset successfully")
    },
    onError: (data) => {
      console.log("Error paying IP Asset:", data.message)
      toast.error(data.message || "Failed to pay IP Asset")
    },
  })
}
