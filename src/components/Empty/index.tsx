import React, { FC } from "react"
import Image from "next/image"
import { Container, Typography, Button } from ".."
import Link from "next/link"
import { ArrowRightLinearIcon } from "../Icons"

interface EmptyI {
  imageSrc?: string
  description?: string
  noLink?: boolean
}

export const Empty: FC<EmptyI> = ({ imageSrc, description, noLink }) => {
  const { H6 } = Typography
  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={imageSrc || "/empty.png"}
          alt="empty"
          width={140}
          height={140}
        />
        <H6 className="mt-[32px] mb-[16px]">
          {description || "This user currently do not have music NFTS"}
        </H6>
        {noLink || (
          <Button
            style={{ padding: "10px 24px" }}
            variant="text"
            sufficIcon={<ArrowRightLinearIcon />}
          >
            <Link href="/">Explore Marketplace</Link>
          </Button>
        )}
      </div>
    </Container>
  )
}
