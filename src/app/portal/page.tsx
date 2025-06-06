import Image from "next/image"
import { Footer, Header } from "@/components"
import { MetaData } from "./MetaData"
import { LivePortals } from "@/components/artists/others/LivePortals"
import { PopularPortals } from "@/components/artists/PopularPortals"
import { UpcomingPortals } from "@/components/artists/UpcomingPortals"
import { in_app_nav_items } from "@/constants/nav-urls"

export default function Home() {
  return (
    <main>
      <Header navItems={in_app_nav_items} active="portal" />
      <div className="">
        <MetaData />
        <LivePortals />
        <PopularPortals />
        <UpcomingPortals />
      </div>
      <Footer />
    </main>
  )
}
