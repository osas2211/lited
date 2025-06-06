import React from "react"

interface Label extends React.HTMLAttributes<HTMLLabelElement> {}

const Label1Medium: React.FC<Label> = ({ className, ...props }) => {
  return (
    <label
      {...props}
      className={`text-[16px] font-[500] leading-[24px] ${
        className ? className : ""
      }`}
    ></label>
  )
}

const Label1Bold: React.FC<Label> = ({ className, ...props }) => {
  return (
    <label
      {...props}
      className={`text-[16px] font-[700] leading-[24px] ${
        className ? className : ""
      }`}
    ></label>
  )
}

const Label2Medium: React.FC<Label> = ({ className, ...props }) => {
  return (
    <label
      {...props}
      className={`text-[12px] font-[500] leading-[16px] ${
        className ? className : ""
      }`}
    ></label>
  )
}

const Label2Bold: React.FC<Label> = ({ className, ...props }) => {
  return (
    <label
      {...props}
      className={`text-[12px] font-[700] leading-[16px] ${
        className ? className : ""
      }`}
    ></label>
  )
}

const Labels = {
  Label1Bold,
  Label1Medium,
  Label2Bold,
  Label2Medium,
}

export default Labels
