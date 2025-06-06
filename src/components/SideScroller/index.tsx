import React from "react"

interface props {
  children: React.ReactNode
}

export const SideScroller = ({ children }: props) => {
  return (
    <div className="my-[46px] flex gap-[40px] w-[auto]  overflow-y-scroll no-scrollbar">
      {children}
    </div>
  )
}
