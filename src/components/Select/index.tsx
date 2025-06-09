"use client"
import React, { FC, useState } from "react"

interface SelectI extends React.HTMLAttributes<HTMLDivElement> {
  prefixicon?: React.ReactNode
  suffixIcon?: React.ReactNode
  options?: { value: string; label: string }[]
  placeholder?: string
}

const Select: FC<SelectI> = ({
  prefixicon,
  className,
  suffixIcon,
  options,
  ...props
}) => {
  const [openPopup, setOpenPopup] = useState(false)
  const toggleOpenSelection = () => {
    openPopup ? setOpenPopup(false) : setOpenPopup(true)
  }
  return (
    <div className="inline-block relative">
      <div
        onClick={toggleOpenSelection}
        {...props}
        className={`
       bg-grey-700 text-grey-0 cursor-pointer relative
      ${prefixicon ? "px-[42px]" : "px-[16px]"} py-[12px] 
      w-[200px] border-[1px] border-grey-700 rounded-[8px]
      focus:outline-none focus:border-primary-default hover:border-[#9813B9]
      placeholder:text-grey-300 placeholder:text-[16px] font-[400] text-[16px]
      disabled:border-grey-400 disabled:placeholder:text-grey-400 disabled:bg-grey-900 
       ${className ? className : ""}`}
      >
        {props?.placeholder?.slice(0, 12)}...
      </div>
      {prefixicon && (
        <div className="absolute top-[50%] left-[16px] translate-y-[-50%]">
          {prefixicon}
        </div>
      )}
      <div className="absolute top-[50%] right-[16px] translate-y-[-50%]">
        {suffixIcon ? (
          suffixIcon
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.0003 14C9.41693 14 8.83359 13.775 8.39193 13.3334L2.95859 7.90003C2.71693 7.65837 2.71693 7.25837 2.95859 7.0167C3.20026 6.77503 3.60026 6.77503 3.84193 7.0167L9.27526 12.45C9.67526 12.85 10.3253 12.85 10.7253 12.45L16.1586 7.0167C16.4003 6.77503 16.8003 6.77503 17.0419 7.0167C17.2836 7.25837 17.2836 7.65837 17.0419 7.90003L11.6086 13.3334C11.1669 13.775 10.5836 14 10.0003 14Z"
              fill="#797072"
            />
          </svg>
        )}
      </div>

      {/* Select Options */}
      {openPopup && (
        <div className="w-[95%] p-4 absolute top-[110%] rounded-[5px] left-0 bg-grey-700 z-10">
          {options?.map(({ value, label }, index) => (
            <div className="flex gap-[8px] align-center mb-[8px]" key={index}>
              <input type="checkbox" className="accent-primary-default" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
