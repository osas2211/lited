import Image from "next/image"
import { Footer, Header } from "@/components"
import { Form } from "./form"
import { in_app_nav_items } from "@/constants/nav-urls"

export default function SchedulePortal() {
  return (
    <main>
      <Header navItems={in_app_nav_items} active="portal" />
      <div className="md:p-[80px] px-[1rem] py-[2rem]">
        <Form />
      </div>
      <Footer />
    </main>
  )
}
