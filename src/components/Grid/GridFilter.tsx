import React, { FC } from "react"
import { Button, Input } from ".."
import {
  FilterIcon,
  Grid3FilledIcon,
  Grid3Icon,
  Grid4FilledIcon,
  Grid4Icon,
  SearchIcon,
} from "../Icons"
import { gradient } from "@/utils/colors"
import { MusicGenres } from "./MusicGenres"
import { Filter } from "./Filter"

interface FilterI {
  grid: number
  setGrid: React.Dispatch<React.SetStateAction<number>>
  showSearch?: boolean
}

export const GridFilter: FC<FilterI> = ({ setGrid, grid, showSearch }) => {
  const changeGrid = (columns: number) => {
    setGrid(columns)
  }
  return (
    <div className="flex items-center md:gap-[24px] gap-[16px] justify-between">
      {showSearch ? (
        <Input
          placeholder="Search by name"
          prefixicon={<SearchIcon />}
          className="md:w-[240px] w-[172px]"
        />
      ) : (
        <MusicGenres />
      )}
      <Filter />

      <div className="inline-flex bg-grey-800 rounded-[80px] cursor-pointer">
        <div
          className="inline-flex justify-center items-center px-[12px] py-[8px] md:px-[16px] md:py-[12px] rounded-l-[80px]"
          onClick={() => changeGrid(3)}
          style={{
            background: grid === 3 ? gradient.background_gradient : "",
          }}
        >
          {grid === 3 ? <Grid3FilledIcon /> : <Grid3Icon />}
        </div>
        <div
          className="inline-flex justify-center items-center px-[12px] py-[8px] md:px-[16px] md:py-[12px] rounded-r-[80px]"
          style={{
            background: grid === 4 ? gradient.background_gradient : "",
          }}
          onClick={() => changeGrid(4)}
        >
          {grid === 4 ? <Grid4FilledIcon /> : <Grid4Icon />}
        </div>
      </div>
    </div>
  )
}
