import React from "react"

interface Caption extends React.HTMLAttributes<HTMLParagraphElement> {}

const Caption1Regular: React.FC<Caption> = ({ className, ...props }) => {
  return (
    <p
      {...props}
      className={`text-[16px] font-[400] leading-[24px] ${
        className ? className : ""
      }`}
    ></p>
  )
}

const Caption1Medium: React.FC<Caption> = ({ className, ...props }) => {
  return (
    <p
      {...props}
      className={`text-[16px] font-[500] leading-[24px] ${
        className ? className : ""
      }`}
    ></p>
  )
}

const Caption1Bold: React.FC<Caption> = ({ className, ...props }) => {
  return (
    <p
      {...props}
      className={`text-[16px] font-[700] leading-[24px] ${
        className ? className : ""
      }`}
    ></p>
  )
}

const Caption2Regular: React.FC<Caption> = ({ className, ...props }) => {
  return (
    <p
      {...props}
      className={`text-[14px] font-[400] leading-[20px] ${
        className ? className : ""
      }`}
    ></p>
  )
}

const Caption2Medium: React.FC<Caption> = ({ className, ...props }) => {
  return (
    <p
      {...props}
      className={`text-[14px] font-[500] leading-[20px] ${
        className ? className : ""
      }`}
    ></p>
  )
}

const Caption2Bold: React.FC<Caption> = ({ className, ...props }) => {
  return (
    <p
      {...props}
      className={`text-[14px] font-[700] leading-[20px] ${
        className ? className : ""
      }`}
    ></p>
  )
}

const Captions = {
  Caption1Regular,
  Caption1Medium,
  Caption1Bold,
  Caption2Regular,
  Caption2Medium,
  Caption2Bold,
}

export default Captions
