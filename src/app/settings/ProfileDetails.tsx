"use client"
import React from "react"
import { Button, Container, Input, Typography } from "@/components"
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  WebIcon,
} from "@/components/Icons"

const { H4, Subtitle1Regular, Subtitle2Medium } = Typography

export const ProfileDetails = () => {
  return (
    <div className="mt-[32px] w-full md:w-[400px] md:max-h-[65vh] md:overflow-scroll no-scrollbar">
      <H4 className="text-grey-100">Profile Details</H4>
      <Subtitle1Regular className="text-grey-100">
        Kindly fill in your correct information
      </Subtitle1Regular>
      <div className="w-full">
        <div className="flex flex-col gap-[20px] mt-[32px] mb-[40px]">
          <div>
            <label htmlFor="">
              <Subtitle2Medium className="mb-[12px]">Username</Subtitle2Medium>
              <Input placeholder="Enter your username" className="w-full" />
            </label>
          </div>
          <div>
            <label htmlFor="">
              <Subtitle2Medium className="mb-[12px]">
                Email Address
              </Subtitle2Medium>
              <Input
                placeholder="Enter your email address"
                className="w-full"
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              <Subtitle2Medium className="mb-[12px]">
                Social Media Links
              </Subtitle2Medium>
              <div className="flex flex-col gap-[8px]">
                <Input
                  prefixicon={<FacebookIcon />}
                  placeholder="Your facebook handle"
                  className="w-full"
                />
                <Input
                  prefixicon={<TwitterIcon />}
                  placeholder="Your twitter handle"
                  className="w-full"
                />
                <Input
                  prefixicon={<InstagramIcon />}
                  placeholder="Your instagram handle"
                  className="w-full"
                />
                <Input
                  prefixicon={<WebIcon />}
                  placeholder="Yourwebsite.com"
                  className="w-full"
                />
              </div>
            </label>
          </div>
        </div>
        <Button className="w-full md:w-auto">Save</Button>
      </div>
    </div>
  )
}
