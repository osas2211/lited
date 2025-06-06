"use client"
import React, { useState } from "react"
import { Avatar, Button, Typography } from "@/components"
import "./profile-picture.css"

export const UpdatePicture = () => {
  const [profileImg, setProfileImg] = useState("/nft.png")
  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileImg(URL.createObjectURL(e.target.files![0] as any))
  }
  const { Subtitle2Medium } = Typography
  return (
    <div className="mt-[34px] md:block flex flex-col justify-center items-center">
      <Subtitle2Medium className="mb-[24px] md:hidden">Image</Subtitle2Medium>
      <label htmlFor="profileImg">
        <Avatar
          src={profileImg}
          className="w-[180px] h-[180px] profile-image_avatar"
        />
      </label>
      <input
        type="file"
        className="profile-image_input"
        id="profileImg"
        accept=".png,.jpg,.svg,.jpeg"
        onChange={onChangeImage}
      />
      <Button className="w-full md:w-auto mt-[40px]" size="small">
        Save
      </Button>
    </div>
  )
}
