"use client"
import React from "react"
import { ArrowRightIcon } from "@/components/Icons"
import { Button, Input, Typography } from "@/components"
import { FileUploadInput } from "@/components/Input"

const { Caption2Regular, Subtitle2Medium, Subtitle3Regular } = Typography
const inputStyle =
  "w-full bg-grey-1 mt-[12px] placeholder:text-grey-500 text-grey-100 active:border-grey-500 hover:border-grey-500 border-[1px] border-grey-700 rounded-[8px]"

export const RegisterIpForm = () => {
  return (
    <div>
      <div className="my-[30px] md:my-[24px] w-full mx-auto">
        <form className="my-[24px] flex flex-col gap-[20px]">
          <div>
            <label htmlFor="title">
              <Subtitle2Medium>Title</Subtitle2Medium>
            </label>
            <Input
              id="title"
              className={inputStyle}
              placeholder="Enter your IP name e.g single, ep or album name"
            />
          </div>
          <div>
            <label htmlFor="description">
              <Subtitle2Medium>Description</Subtitle2Medium>
            </label>
            <textarea
              id="description"
              className={`${inputStyle} min-h-[120px] p-[16px] border-[1px] border-grey-700 rounded-[8px]
      focus:outline-none focus:border-primary-default hover:border-[#9813B9]
      placeholder:text-grey-300 placeholder:text-[16px] font-[400] text-[16px]
      disabled:border-grey-400 disabled:placeholder:text-grey-400 disabled:bg-grey-900 bg-grey-700 text-grey-0`}
              placeholder="Enter a detailed description of your Ip or Song"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="thumbnail">
                <Subtitle2Medium>Thumbnail</Subtitle2Medium>
                <Caption2Regular className="text-grey-300">
                  Recommended thumbnail aspect ratio is 1:1
                </Caption2Regular>
                {/* <Caption2Regular className="text-grey-300">
                  Recommended thumbnail aspect ratio is 16:9
                </Caption2Regular> */}
              </label>
              <FileUploadInput
                onFileSelect={(file) => {}}
                accept=".jpg, .png, .jpeg"
                id="thumbnail"
              />
            </div>

            <div>
              <label htmlFor="song">
                <Subtitle2Medium>Song</Subtitle2Medium>
                <Caption2Regular className="text-grey-300">
                  Max size is 20MB
                </Caption2Regular>
              </label>
              <FileUploadInput
                onFileSelect={(file) => {}}
                accept=".jpg, .png, .jpeg"
                id="song"
              />
            </div>
          </div>
          <div>
            <label htmlFor="Collaborators">
              <Subtitle2Medium>Collaborators (optional)</Subtitle2Medium>
            </label>
            <Input
              id="Collaborators"
              className={inputStyle}
              placeholder="Enter collaborators"
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
              <Subtitle2Medium>Language (optional)</Subtitle2Medium>
            </label>
            <select
              id="Language"
              className={`${inputStyle} p-[14px] border-[1px] border-grey-700 rounded-[8px]
      focus:outline-none focus:border-primary-default hover:border-[#9813B9]
      placeholder:text-grey-300 placeholder:text-[16px] font-[400] text-[16px]
      disabled:border-grey-400 disabled:placeholder:text-grey-400 disabled:bg-grey-900 bg-grey-700 text-grey-0`}
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
              <span>Register IP</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
