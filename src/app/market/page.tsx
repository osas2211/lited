"use client"
import { Typography, Header, Container, Footer, Button } from "@/components"
import { MarketGrid } from "@/components/Grid/MarketGrid"
import { MarketTab } from "@/components/Grid/MarketTab"
import { spg_contract } from "@/constants/contract_addresses"
import { in_app_nav_items } from "@/constants/nav-urls"
import { useGetIpAssets } from "@/hooks/useStoryAPI"
import Link from "next/link"

const { H3, Subtitle1Regular } = Typography
export default function Market() {
  const { data, isLoading } = useGetIpAssets({
    tokenContractIds: [spg_contract.address],
  })
  console.log("Market data", data, isLoading)

  return (
    <main>
      <Header navItems={in_app_nav_items} active="market" />
      <Container>
        <H3>Explore Market</H3>
        <div className="md:px-[0px] pt-[12px] md:pt-[20px] md:pb-[42px] pb-[32px]">
          <div className="md:flex md:justify-between md:items-center">
            <Subtitle1Regular className="md:w-[480px]">
              Discover wide range of NFTs from your favorite creatives
            </Subtitle1Regular>
            {/* <MarketTab /> */}
            <Link href={"/register-ip"}>
              <Button variant="subtle">Register IP Asset</Button>
            </Link>
          </div>
          <MarketGrid />
        </div>
      </Container>
      <Footer />
    </main>
  )
}
