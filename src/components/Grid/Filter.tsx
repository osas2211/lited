import React from "react"
import { Box, Dropdown, Menu, MenuButton, Checkbox } from "@mui/joy"
import { Typography, Button, Input } from ".."
import { FilterIcon } from "../Icons"

export const Filter = () => {
  const { Subtitle3Medium, Subtitle3Bold } = Typography
  return (
    <Dropdown>
      <MenuButton slots={{ root: Box }}>
        <Button
          variant="secondary"
          size="small"
          prefixIcon={<FilterIcon />}
          prefixClass="mr-[-8px] md:mr-[0px]"
          className="btn-no-hover min-w-[35px] py-[8px] md:py-[12px] md:min-w-[120px] rounded-[12px] md:imline-block md:rounded-[80px]"
        >
          <span className="hidden md:inline">Filters</span>
        </Button>
      </MenuButton>
      <Menu className="bg-grey-800 p-[16px] max-w-[284px]">
        <Subtitle3Bold className="text-grey-0 px-[10px]">Sort by</Subtitle3Bold>
        <div className="inline-flex items-center gap-[8px] p-[16px]">
          <Checkbox />
          <Subtitle3Medium className="text-grey-0">
            Lowest Price
          </Subtitle3Medium>
        </div>
        <div className="inline-flex items-center gap-[8px] p-[16px]">
          <Checkbox />
          <Subtitle3Medium className="text-grey-0">
            Highest Price
          </Subtitle3Medium>
        </div>

        <div className="mt-[16px] mb-[24px] px-[10px]">
          <Subtitle3Bold>Price</Subtitle3Bold>
          <div className="flex gap-[12px] mt-[8px]">
            <Input placeholder="Minimum" className="w-full" />
            <Input placeholder="Maximum" className="w-full" />
          </div>
        </div>
        <div className="px-[10px]">
          <Button className="w-full" size="small">
            Apply
          </Button>
        </div>
      </Menu>
    </Dropdown>
  )
}
