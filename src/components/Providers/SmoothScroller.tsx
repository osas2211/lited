"use client"
import ReactLenis from "lenis/react"
import React from "react"

export const SmoothScroller = ({ children }: { children: React.ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>
}
