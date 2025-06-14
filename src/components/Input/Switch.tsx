"use client"
import React from "react"

interface SwitchInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "className" | "type" | "value"
  > {
  onChange?: (checked: boolean) => void
  value?: boolean
}

export const Switch: React.FC<SwitchInputProps> = ({ onChange, value }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={value}
        className="sr-only peer"
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      <div className="w-11 h-6 bg-grey-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-default dark:peer-focus:ring-primary-default rounded-full peer dark:bg-grey-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-grey-100 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-default"></div>
    </label>
  )
}
