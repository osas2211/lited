"use client"
import React from "react"
import { Button, Input, Typography } from "@/components"
import { Switch } from "@/components/Input"
import { Checkbox } from "@mui/joy"
import { LicenseTerms } from "@story-protocol/core-sdk"

interface LicenseTermsFormProps {
  licenseTerms: Partial<LicenseTerms>
  setLicenseTerms: React.Dispatch<React.SetStateAction<Partial<LicenseTerms>>>
}

const { Caption2Regular, Subtitle2Medium, Subtitle3Regular } = Typography
const inputStyle =
  "w-full bg-grey-1 mt-[12px] placeholder:text-grey-500 text-grey-100 active:border-grey-500 hover:border-grey-500 border-[1px] border-grey-700 rounded-[8px]"

export const LicenseTermsForm = ({
  licenseTerms,
  setLicenseTerms,
}: LicenseTermsFormProps) => {
  const revenueShareOptions = [
    { label: "10%", value: "10" },
    { label: "25%", value: "25" },
    { label: "50%", value: "50" },
    { label: "75%", value: "75" },
  ]
  const [revenueShare, setRevenueShare] = React.useState<string>("50")
  const handleRevenueShareChange = (value: string) => {
    setRevenueShare(value)
    setLicenseTerms((prev) => ({
      ...prev,
      commercialRevenueShare: parseInt(value, 10),
    }))
  }
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Subtitle3Regular className="text-grey-100">
          Allow commercial use?
        </Subtitle3Regular>
        <Checkbox
          defaultChecked={true}
          onChange={(e) => {
            setLicenseTerms((prev) => ({
              ...prev,
              commercialUse: e.target.checked,
            }))
          }}
        />
      </div>
      <div className="flex items-center justify-between">
        <Subtitle3Regular className="text-grey-100">
          Require commercial attribution?
        </Subtitle3Regular>
        <Checkbox
          defaultChecked={true}
          onChange={(e) => {
            setLicenseTerms((prev) => ({
              ...prev,
              commercialAttribution: e.target.checked,
            }))
          }}
        />
      </div>
      <div className="flex items-center justify-between">
        <Subtitle3Regular className="text-grey-100">
          Allow derivatives (Remix)?
        </Subtitle3Regular>
        <Checkbox
          defaultChecked={true}
          onChange={(e) => {
            setLicenseTerms((prev) => ({
              ...prev,
              commercialUse: e.target.checked,
            }))
          }}
        />
      </div>
      <div className="pt-2">
        <label htmlFor="title">
          <Subtitle3Regular>Commercial revenue share</Subtitle3Regular>
        </label>
        <div className="grid grid-cols-4 gap-4 mt-3">
          {revenueShareOptions.map((option) => {
            const isChecked = revenueShare === option.value
            return (
              <Button
                key={option.value}
                variant={isChecked ? "primary" : "subtle"}
                size="medium"
                className="!w-full rounded-md !min-w-full"
                style={{ width: "100%" }}
                onClick={() => handleRevenueShareChange(option.value)}
              >
                {option.label}
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
