import React from "react"
import { Input, TabAlt } from ".."
import { SearchIcon } from "../Icons"
import { Users } from "./Users"
import { Commenters } from "./Commenters"

const inputStyle =
  " bg-grey-800 active:border-grey-700 hover:border-grey-700 border-[1px] border-grey-700 placeholder:text-grey-400"
const items = [
  {
    heading: "Viewers",
    element: <Users />,
  },
  {
    heading: "Comments",
    element: <Commenters />,
  },
]

export const UserActivities = () => {
  return (
    <div className="absolute md:bottom-[20px] bottom-[8rem] md:left-[20px] left-[0] z-20 lg:block hidden">
      <div className="md:w-[400px] w-[100%] md:h-[600px] h-[500px] p-[12px] p-[32px] bg-gradient-linear rounded-[16px]">
        <p className="text-grey-100 text-[14px] ">
          Stack any amount of BTC and earn daily stacking rewards. Put your
          stacked BTC to work across DeFi to compound your yield.
        </p>
        <div className="my-[24px]">
          <Input
            suffixIcon={<SearchIcon />}
            fullwidth
            className={inputStyle}
            placeholder="Find User"
          />
        </div>
        <TabAlt items={items} />
      </div>
    </div>
  )
}
