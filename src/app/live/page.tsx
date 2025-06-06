"use client"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation"

const Page = () => {
  const router = useRouter()
  useEffect(() => {
    router.replace("/")
  }, [])
  return <div>.../...</div>
}

export default Page
