import React from "react"
import { ArrowDownBold } from "../Icons"

export const UserIcon: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className="flex items-center gap-[8px] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex -space-x-2">
        <img
          className="inline-block h-[48px] w-[48px] rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <ArrowDownBold />
    </div>
  )
}
