"use client"
import React, { useState } from "react"
import Image from "next/image"
import Button from "@/components/Button"
import { ProfileNav } from "@/components/Header/ProfileNav"
import { useConnectModal, ConnectButton } from "@tomo-inc/tomo-evm-kit"
import { useAccount } from "wagmi"

export const TomoSocialConnect = () => {
  const [isConnected, setIsConnected] = useState(false)
  const { openConnectModal } = useConnectModal()
  const acc = useAccount()
  const handleConnectWallet = () => {
    openConnectModal && openConnectModal()
  }
  return (
    <div>
      {!acc.isConnected ? (
        <Button
          prefixicon={<Image src="/tomo.avif" height={30} width={30} alt="" />}
          style={{ padding: "10px 24px" }}
          onClick={() => handleConnectWallet()}
          className="md:min-w-auto min-w-[100%] w-full md:w-auto"
          variant="subtle"
        >
          Connect Wallet
        </Button>
      ) : (
        <div className="md:flex gap-[24px] items-center">
          <ConnectButton />
          {/* <UserIcon onClick={() => setOpen(true)} /> */}
          <ProfileNav profile_img={acc?.connector?.icon} />
        </div>
      )}
    </div>
  )
}
