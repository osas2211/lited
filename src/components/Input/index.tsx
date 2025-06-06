import React, { FC } from "react"

interface InputI extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixIcon?: React.ReactNode
  fullwidth?: boolean
}

const Input: FC<InputI> = ({ prefixIcon, className, fullwidth, ...props }) => {
  return (
    <div className="inline-block relative w-full">
      <input
        {...props}
        className={`
       bg-grey-700 text-grey-0 inline-block
      ${prefixIcon ? "px-[42px]" : "px-[16px]"} py-[12px] 
      ${
        fullwidth ? "w-full" : "w-[200px]"
      } border-[1px] border-grey-700 rounded-[8px]
      focus:outline-none focus:border-primary-default hover:border-[#9813B9]
      placeholder:text-grey-300 placeholder:text-[16px] font-[400] text-[16px]
      disabled:border-grey-400 disabled:placeholder:text-grey-400 disabled:bg-grey-900 
       ${className ? className : ""}`}
      />
      <div className="absolute top-[50%] left-[16px] translate-y-[-50%]">
        {prefixIcon}
      </div>
    </div>
  )
}

export default Input
