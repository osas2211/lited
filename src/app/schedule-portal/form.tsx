"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { ArrowLeftGreyIcon, ArrowRightIcon } from "@/components/Icons"
import { Button, Input, Typography } from "@/components"

const { H6, Subtitle2Medium } = Typography
const inputStyle =
  "w-full bg-grey-1 mt-[12px] placeholder:text-grey-500 text-grey-100 active:border-grey-500 hover:border-grey-500 border-[1px] border-grey-700 rounded-[8px]"

export const Form = () => {
  const router = useRouter()
  return (
    <div>
      <span
        className="inline-flex items-center gap-3 cursor-pointer"
        onClick={router.back}
      >
        <ArrowLeftGreyIcon />
        <Subtitle2Medium className="text-grey-300">Go back</Subtitle2Medium>
      </span>

      <div className="my-[40px] md:my-[64px] md:w-[70%] lg:w-[40%] w-[90%] mx-auto">
        <H6>Tell us about your about your portal</H6>
        <Subtitle2Medium className="mt-[12px] text-grey-100">
          Kindly fill in your collection details below with the correct
          information.
        </Subtitle2Medium>
        <form className="my-[48px] flex flex-col gap-[20px]">
          <div>
            <label htmlFor="title">
              <Subtitle2Medium>Title</Subtitle2Medium>
            </label>
            <Input
              id="title"
              className={inputStyle}
              placeholder="Enter your portal name e.g single, ep or album name"
            />
          </div>
          <div>
            <label htmlFor="description">
              <Subtitle2Medium>Description (optional)</Subtitle2Medium>
            </label>
            <textarea
              id="description"
              className={`${inputStyle} min-h-[120px] p-[16px]`}
              placeholder="Enter a detailed description of your portals"
            />
          </div>
          <div>
            <label htmlFor="Tags">
              <Subtitle2Medium>Tags</Subtitle2Medium>
            </label>
            <Input
              id="Tags"
              className={inputStyle}
              placeholder="Enter tags to help find your portal better"
            />
          </div>
          <div>
            <label htmlFor="Language">
              <Subtitle2Medium>Language</Subtitle2Medium>
            </label>
            <select
              id="Language"
              className={`${inputStyle} p-[14px]`}
              // placeholder="Pick something"
            >
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <Subtitle2Medium className="text-grey-300">
              Is this portal an explicit & sensitive content?
            </Subtitle2Medium>

            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-grey-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-default dark:peer-focus:ring-primary-default rounded-full peer dark:bg-grey-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-grey-100 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-default"></div>
            </label>
          </div>

          <div className="flex justify-end mt-[48px]">
            <Button variant="primary" sufficIcon={<ArrowRightIcon />}>
              <span>Go live</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
