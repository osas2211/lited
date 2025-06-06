import React, { FC } from "react"
import { Button, Container, Footer, Header, Typography } from "@/components"
import { EyeFilledIcon } from "@/components/Icons"
import { SettingsNav } from "./SettingsNav"
import "./settings.css"
import { MobileSettingsNav } from "./MobileSettingsNav"

export const SettingsContainer: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { H3 } = Typography
  const items = [
    {
      name: "market",
      route: "/",
    },
    {
      name: "stack",
      route: "/",
    },
  ]
  return (
    <main>
      <Header navItems={items} active="market" />
      <Container>
        <div>
          <div className="flex justify-between items-center relative">
            <div className="flex items-center gap-[12px]">
              <H3>Settings</H3>
              <MobileSettingsNav />
            </div>
            <Button prefixIcon={<EyeFilledIcon />} variant="secondary">
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
