"use client"
import Button from "@/components/Button"
import { Input } from "@/components/Input"
import Typography from "@/components/Typography"
import { IpCreator } from "@story-protocol/core-sdk"
import React, { useState } from "react"
import { CgClose } from "react-icons/cg"
import { FaPlus } from "react-icons/fa"

interface AddCreatorProps {
  creators: IpCreator[]
  setCreators: React.Dispatch<React.SetStateAction<IpCreator[]>>
}

const { Caption2Regular, Subtitle2Medium, Subtitle3Regular, Button3 } =
  Typography
const inputStyle =
  "w-full bg-grey-1 mt-[6px] placeholder:text-grey-500 text-grey-100 active:border-grey-500 hover:border-grey-500 border-[1px] border-grey-700 rounded-[8px]"

const default_creator: IpCreator = {
  name: "",
  address: "0x" as `0x${string}`,
  contributionPercent: 0,
  role: "",
}
export const AddCreators: React.FC<AddCreatorProps> = ({
  creators,
  setCreators,
}) => {
  const handleAddContribution = () => {
    setCreators((prev) => {
      return [...creators, default_creator]
    })
  }
  const handleRemove = (index: number) => {
    const filtered_array = creators.filter((_, creator_index) => {
      return index !== creator_index
    })
    setCreators(filtered_array)
  }
  const updateCreator = (
    value: string | `0x${string}`,
    index: number,
    key: "name" | "role" | "address" | "contributionPercent"
  ) => {
    const updatedCreators = creators.map((creator_, index_) => {
      if (index === index_) {
        if (key === "contributionPercent") {
          return { ...creator_, contributionPercent: Number(value) }
        } else {
          return { ...creator_, [key]: value as string & `0x${string}` }
        }
      }
      return creator_
    })
    setCreators(updatedCreators)
  }
  return (
    <div className="space-y-10">
      {creators.map((creator, index) => {
        return (
          <CreatorInputs
            key={index}
            {...{ creator, index, handleRemove, updateCreator }}
          />
        )
      })}

      <div className="mt-4">
        <Button
          variant="subtle"
          size="small"
          className="rounded-md"
          prefixicon={<FaPlus className="text-primary-active" size={14} />}
          onClick={handleAddContribution}
        >
          Add creator
        </Button>
      </div>
    </div>
  )
}

const CreatorInputs = ({
  creator,
  updateCreator,
  index,
  handleRemove,
}: {
  creator: IpCreator
  updateCreator: (
    value: string,
    index: number,
    key: "name" | "role" | "address" | "contributionPercent"
  ) => void
  index: number
  handleRemove: (index: number) => void
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div>
        <label htmlFor={`creator-name-${index}`}>
          <Subtitle2Medium>Name</Subtitle2Medium>
        </label>
        <Input
          id={`creator-name-${index}`}
          className={inputStyle}
          placeholder="Enter collaborator name"
          onChange={(e) => updateCreator(e.target.value, index, "name")}
          value={creator.name}
        />
      </div>
      <div>
        <label htmlFor={`creator-address-${index}`}>
          <Subtitle2Medium>Address</Subtitle2Medium>
        </label>
        <Input
          id={`creator-address-${index}`}
          className={inputStyle}
          placeholder="Enter collaborator address"
          onChange={(e) => updateCreator(e.target.value, index, "address")}
          value={creator.address}
        />
      </div>
      <div>
        <label htmlFor={`creator-contribution-${index}`}>
          <Subtitle2Medium>Contribution (%)</Subtitle2Medium>
        </label>
        <Input
          id={`creator-contribution-${index}`}
          className={inputStyle}
          placeholder="Enter collaborator contribution"
          onChange={(e) =>
            updateCreator(e.target.value, index, "contributionPercent")
          }
          value={creator.contributionPercent}
          type="number"
          max={100}
          min={0}
        />
      </div>
      <div>
        <label htmlFor={`creator-role-${index}`}>
          <Subtitle2Medium>Role</Subtitle2Medium>
        </label>
        <Input
          id={`creator-role-${index}`}
          className={inputStyle}
          placeholder="Enter collaborator role"
          value={creator.role}
          onChange={(e) => updateCreator(e.target.value, index, "role")}
        />
      </div>
      <Button
        variant="text"
        size="small"
        className="w-[100px] hover:!bg-transparent !py-2"
        prefixicon={<CgClose className="text-primary-hover" />}
        onClick={() => handleRemove(index)}
      >
        Remove
      </Button>
    </div>
  )
}
