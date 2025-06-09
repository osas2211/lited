import React, { FC } from "react"
import { Button, Container, Footer, Header, Typography } from "@/components"
import { EyeFilledIcon } from "@/components/Icons"
import { SettingsNav } from "./SettingsNav"
import "./settings.css"
import { MobileSettingsNav } from "./MobileSettingsNav"
import { in_app_nav_items } from "@/constants/nav-urls"

const { H3 } = Typography

export const SettingsContainer: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main>
      <Header navItems={in_app_nav_items} active="settings" />
      <Container>
        <div>
          <div className="flex justify-between items-center relative">
            <div className="flex items-center gap-[12px]">
              <H3>Settings</H3>
              <MobileSettingsNav />
            </div>
            <Button prefixicon={<EyeFilledIcon />} variant="secondary">
              View profile
            </Button>
          </div>
          <div className="md:flex gap-[64px]">
            <SettingsNav />
            <div className="">{children}</div>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
