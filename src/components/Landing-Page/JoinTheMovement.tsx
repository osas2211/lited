import React from "react"
import { Typography, Button } from "@/components"
import Link from "next/link"
const { H4, Subtitle3Regular } = Typography

export const JoinTheMovement = () => {
  return (
    <div className="max-w-[900px] px-6 mx-auto md:py-[7rem] py-10 bg-grey-1000 relative z-[2] text-center">
      <H4 className="font-polysans mb-4">Join The Community</H4>
      <Subtitle3Regular className="mb-7 max-w-[600px] mx-auto">
        Register your IP and Tokenise your Intelligence, join the number one
        decentralize marketplace for the best creatives the world has to offer.
      </Subtitle3Regular>
      <div className="flex items-center gap-4 justify-center">
        <Link href={"/register-ip"}>
          <Button variant="primary" size="medium">
            Register IP
          </Button>
        </Link>
        <Link href={"/market"}>
          <Button variant="secondary" size="medium">
            Marketplace
          </Button>
        </Link>
      </div>
    </div>
  )
}
