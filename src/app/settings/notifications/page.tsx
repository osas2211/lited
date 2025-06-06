import React from "react"
import { Button, Container, Typography } from "@/components"
import { SettingsContainer } from "../SettingsContainer"
import { Notifications as Details } from "./Notifications"

function Notifications() {
  const { H3 } = Typography

  return (
    <main>
      <SettingsContainer>
        <Details />
      </SettingsContainer>
    </main>
  )
}

export default Notifications
