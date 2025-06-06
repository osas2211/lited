import React from "react"
import { Button, Container, Typography } from "@/components"
import { SettingsContainer } from "./SettingsContainer"
import { ProfileDetails } from "./ProfileDetails"

function Settings() {
  const { H3 } = Typography

  return (
    <main>
      <SettingsContainer>
        <ProfileDetails />
      </SettingsContainer>
    </main>
  )
}

export default Settings
