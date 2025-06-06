"use client"
import React, { useState } from "react"
import { Button } from ".."
import { HiroIcon } from "../Icons"
import { ProfileNav } from "../Header/ProfileNav"

export const ConnectWallet = () => {
  const [isConnected, setIsConnected] = useState(false)
  return (
    <div>
      {!isConnected ? (
        <Button
          prefixIcon={<HiroIcon />}
          style={{ padding: "10px 24px" }}
          onClick={() => setIsConnected(true)}
          className="md:min-w-auto min-w-[100%] w-full md:w-auto"
        >
          Create Hiro Wallet
        </Button>
      ) : (
        <div className="md:flex gap-[24px] items-center">
          <Button
            onClick={() => setIsConnected(false)}
            prefixIcon={<HiroIcon />}
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
