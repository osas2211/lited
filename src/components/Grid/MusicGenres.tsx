import React from "react"
import { Box, Dropdown, Menu, MenuButton, Checkbox } from "@mui/joy"
import { Typography } from ".."
import { ArrowDownBold, ElementIcon } from "../Icons"

export const MusicGenres = () => {
  const { Subtitle2Medium, Subtitle3Medium } = Typography

  return (
    <Dropdown>
      <MenuButton slots={{ root: Box }}>
        <div className="hidden md:flex gap-[8px] items-center">
          <ElementIcon />
          <Subtitle2Medium className="text-grey-0">
            Music Genres
          </Subtitle2Medium>
          <ArrowDownBold />
        </div>
      </MenuButton>
      <Menu className="bg-grey-800 p-[16px] min-w-[196px]">
        <div className="inline-flex items-center gap-[8px] p-[12px]">
          <Checkbox />
          <Subtitle3Medium className="text-grey-0">Pop</Subtitle3Medium>
        </div>
        <div className="inline-flex items-center gap-[8px] p-[12px]">
          <Checkbox />
          <Subtitle3Medium className="text-grey-0">Hip Pop</Subtitle3Medium>
        </div>
        <div className="inline-flex items-center gap-[8px] p-[12px]">
          <Checkbox />
          <Subtitle3Medium className="text-grey-0">Blues</Subtitle3Medium>
        </div>
        <div className="inline-flex items-center gap-[8px] p-[12px]">
          <Checkbox />
          <Subtitle3Medium className="text-grey-0">Afrobeat</Subtitle3Medium>
        </div>
        <div className="inline-flex items-center gap-[8px] p-[12px]">
          <Checkbox />
          <Subtitle3Medium className="text-grey-0">Ragae</Subtitle3Medium>
        </div>
      </Menu>
    </Dropdown>
  )
}
