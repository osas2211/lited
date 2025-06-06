"use client"
import React, { useState } from "react"
import { Button } from ".."
import { ProfileNav } from "../Header/ProfileNav"
import Image from "next/image"

export const ConnectWallet = () => {
  const [isConnected, setIsConnected] = useState(false)
  return (
    <div>
      {!isConnected ? (
        <Button
          prefixIcon={<Image src="/tomo.avif" height={30} width={30} alt="" />}
          style={{ padding: "10px 24px" }}
          onClick={() => setIsConnected(true)}
          className="md:min-w-auto min-w-[100%] w-full md:w-auto"
          variant="subtle"
        >
          Connect Wallet
        </Button>
      ) : (
        <div className="md:flex gap-[24px] items-center">
          <Button
            onClick={() => setIsConnected(false)}
            prefixIcon={
              <Image src="/tomo.avif" height={30} width={30} alt="" />
            }
            variant="secondary"
            style={{ padding: "10px 24px" }}
            className="md:min-w-auto min-w-[100%] w-full md:w-auto"
          >
            SPMDM5....G2GA
          </Button>
          {/* <UserIcon onClick={() => setOpen(true)} /> */}
          <ProfileNav />
        </div>
      )}
    </div>
  )
}
