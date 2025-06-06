import React from "react"
import { SettingsContainer } from "./SettingsContainer"
import { ProfileDetails } from "./ProfileDetails"

function Settings() {
  return (
    <main>
      <SettingsContainer>
        <ProfileDetails />
      </SettingsContainer>
    </main>
  )
}

export default Settings
