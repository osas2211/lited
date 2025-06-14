"use client"
import { Footer, Header, Tab, TabAlt, Typography } from "@/components"
import { in_app_nav_items } from "@/constants/nav-urls"
import React from "react"
import { GoBack } from "@/components/utilities"
import { RegisterIpForm } from "@/components/Form"

const { H6, Subtitle2Medium, Subtitle3Regular } = Typography

const formItems = [
  { heading: "Standalone", element: <RegisterIpForm /> },
  { heading: "Remix", element: <></> },
]

const RegisterIPPage = () => {
  return (
    <div>
      <Header navItems={in_app_nav_items} active="Register IP" />
      <div className="md:p-[0px] md:py-[40px] px-[1rem] py-[2rem] max-w-[640px] mx-auto space-y-8">
        <GoBack />
        <div>
          <H6>Tell us about your IP</H6>
          <Subtitle3Regular className="mt-[6px] text-grey-100">
            Kindly fill in your IP details below with the correct information.
          </Subtitle3Regular>
        </div>
        <TabAlt items={formItems} />
      </div>
      <Footer />
    </div>
  )
}

export default RegisterIPPage
