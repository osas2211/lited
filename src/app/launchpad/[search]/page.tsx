import React from "react"
import { Container, Footer, Header, Typography } from "@/components"
import { ArrowLeftGreyIcon } from "@/components/Icons"
import { MetaData } from "./MetaData"
import { NFTData } from "./NFTData"
import { NFTDescription } from "./NFTDescription"
import { AdditionalDetails } from "./AdditionalDetails"
import { in_app_nav_items } from "@/constants/nav-urls"

const Launchpad = () => {
  const { H4, Subtitle2Regular } = Typography

  return (
    <main>
      <Header navItems={in_app_nav_items} active="launchpad" />
      <Container>
        <div className="mb-[60px]">
          <Subtitle2Regular className="text-grey-300 cursor-pointer flex gap-[12px] items-center mb-[16px]">
            <ArrowLeftGreyIcon />
            <span>Go back</span>
          </Subtitle2Regular>
          <H4>Nft discovered</H4>
        </div>
        <MetaData />
        <NFTData />
        <NFTDescription />
        <AdditionalDetails />
      </Container>
      <Footer />
    </main>
  )
}

export default Launchpad
