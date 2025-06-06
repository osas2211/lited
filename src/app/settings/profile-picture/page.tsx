import React from "react"
import { Button, Container, Typography, Avatar } from "@/components"
import { SettingsContainer } from "../SettingsContainer"
import { UpdatePicture } from "./UpdatePicture"

function ProfilePicture() {
  const { Subtitle1Regular, H4 } = Typography

  return (
    <main>
      <SettingsContainer>
        <div className="mt-[32px] md:w-[400px] md:max-h-[65vh] md:overflow-scroll no-scrollbar">
          <H4 className="text-grey-100">Profile Picture</H4>
          <Subtitle1Regular className="text-grey-100">
            The recommended cover photo size is
          </Subtitle1Regular>
          <Subtitle1Regular className="text-grey-100">
            1024px x 1024px
          </Subtitle1Regular>
          <UpdatePicture />
        </div>
      </SettingsContainer>
    </main>
  )
}

export default ProfilePicture
