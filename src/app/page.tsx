"use client"
import { Typography, Header, Container, Footer } from "@/components"
import { MarketGrid } from "@/components/Grid/MarketGrid"
import { MarketTab } from "@/components/Grid/MarketTab"

export default function Home() {
  const { H3, Subtitle1Regular } = Typography
  const items = [
    {
      name: "market",
      route: "/",
    },
    {
      name: "stack",
      route: "/",
    },
    {
      name: "launchpad",
      route: "/launchpad",
    },
  ]

  return (
    <main>
      <Header navItems={items} active="market" />
      <Container>
        <H3>Explore Market</H3>
        <div className="md:px-[0px] pt-[12px] md:pt-[20px] md:pb-[42px] pb-[32px]">
          <div className="md:flex md:justify-between md:items-center">
            <Subtitle1Regular className="md:w-[480px]">
              Discover wide range of music NFTs from your favorite music
              artistes
            </Subtitle1Regular>
            <MarketTab />
          </div>
          <MarketGrid />
        </div>
      </Container>
      <Footer />
    </main>
  )
}
