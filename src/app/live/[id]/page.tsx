import Image from "next/image"
import { Footer, Header } from "@/components"
import { LiveStream } from "@/components/Live-stream"
import { PortalInfo } from "./PortalInfo"
import { in_app_nav_items } from "@/constants/nav-urls"

export default function LiveStreaming() {
  return (
    <main>
      <Header navItems={in_app_nav_items} active="portal" />
      <div className="md:px-[80px] md:py-[40px] px-[1rem] py-[2rem]">
        <LiveStream />
        <PortalInfo />
      </div>
      <Footer />
    </main>
  )
}
