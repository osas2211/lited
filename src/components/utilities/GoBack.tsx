"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { ArrowLeftGreyIcon, ArrowRightIcon } from "@/components/Icons"
import { Typography } from "@/components"

const { H6, Subtitle2Medium } = Typography

export const GoBack = () => {
  const router = useRouter()
  return (
    <span
      className="inline-flex items-center gap-3 cursor-pointer"
      onClick={router.back}
    >
      <ArrowLeftGreyIcon />
      <Subtitle2Medium className="text-grey-300">Go back</Subtitle2Medium>
    </span>
  )
}
