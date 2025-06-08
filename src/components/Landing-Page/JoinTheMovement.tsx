import React from "react"
import { Typography, Button } from "@/components"
import Link from "next/link"
const { H3, Subtitle1Regular } = Typography

export const JoinTheMovement = () => {
  return (
    <div className="max-w-[900px] px-6 mx-auto md:py-[7rem] py-10 bg-grey-1000 relative z-[2] text-center">
      <H3 className="font-polysans mb-4">Join The Community</H3>
      <Subtitle1Regular className="mb-7">
        Register your IP and Tokenise your Intelligence, join the number one
        decentralize marketplace for the best creatives the world has to offer.
      </Subtitle1Regular>
      <div className="flex items-center gap-4 justify-center">
        <Link href={"/market"}>
          <Button variant="primary">Register IP</Button>
        </Link>
        <Link href={"/register-ip"}>
          <Button variant="secondary">Marketplace</Button>
        </Link>
      </div>
    </div>
  )
}
