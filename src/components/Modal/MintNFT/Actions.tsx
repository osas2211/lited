import React from "react"
import { CopyIcon, MoreIcon, ShareIcon, WarningIcon } from "@/components/Icons"
import { Typography } from "@/components"
import { Box, Dropdown, Menu, MenuButton } from "@mui/joy"

export const Actions = () => {
  const { Subtitle3Medium } = Typography
  return (
    <Dropdown>
      <MenuButton slots={{ root: Box }}>
        <MoreIcon />
      </MenuButton>
      <Menu
        className="bg-grey-800 p-[12px] min-w-[188px]"
        style={{ zIndex: 10000 }}
      >
        <div className="inline-flex items-center gap-[12px] p-[12px] cursor-pointer">
          <CopyIcon />
          <Subtitle3Medium className="text-grey-0">Copy</Subtitle3Medium>
        </div>
        <div className="inline-flex items-center gap-[12px] p-[12px] cursor-pointer">
          <ShareIcon />
          <Subtitle3Medium className="text-grey-0">Share</Subtitle3Medium>
        </div>
        <div className="inline-flex items-center gap-[12px] p-[12px] cursor-pointer">
          <WarningIcon />
          <Subtitle3Medium className="text-grey-0">Report</Subtitle3Medium>
        </div>
      </Menu>
    </Dropdown>
  )
}
