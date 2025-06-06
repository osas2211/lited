"use client"
import React from "react"
import {
  Button,
  Container,
  Empty,
  Footer,
  Header,
  Input,
  Typography,
} from "@/components"
import { SearchFavouriteIcon } from "@/components/Icons"
import { useRouter } from "next/navigation"
import { in_app_nav_items } from "@/constants/nav-urls"

const { H4, Subtitle2Regular } = Typography
const Launchpad = () => {
  const router = useRouter()
  const onClickFind = () => router.push("/launchpad/search_id")
  return (
    <main>
      <Header navItems={in_app_nav_items} active="launchpad" />
      <Container>
        <div className="mb-[60px]">
          <H4>Find launchpads</H4>
          <Subtitle2Regular className="text-grey-100">
            Discover NFTs from your favorite music artists
          </Subtitle2Regular>
        </div>
        <div className="relative">
          <Input
            className="w-full py-[19px] border-1 border-grey-600"
            placeholder="Load NFT meta data"
          />
          <div className="hidden md:block absolute top-[50%] right-[19px] translate-y-[-50%]">
            <Button
              size="small"
              sufficIcon={<SearchFavouriteIcon />}
              onClick={onClickFind}
            >
              Find
            </Button>
          </div>

          <Button
            sufficIcon={<SearchFavouriteIcon />}
            className="md:hidden mt-[32px] w-full"
            onClick={onClickFind}
          >
            Find
          </Button>
        </div>

        <Empty description="Find an NFT" noLink />
      </Container>
      <Footer />
    </main>
  )
}

export default Launchpad
