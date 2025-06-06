import React from "react"
interface ButtonText extends React.HTMLAttributes<HTMLSpanElement> {}

const Button1: React.FC<ButtonText> = ({ className, ...props }) => {
  return (
    <small
      {...props}
      className={`text-[18px] font-[700] leading-[28px] ${
        className ? className : ""
      }`}
    ></small>
  )
}

const Button2: React.FC<ButtonText> = ({ className, ...props }) => {
  return (
    <small
      {...props}
      className={`text-[16px] font-[700] leading-[20px] ${
        className ? className : ""
      }`}
    ></small>
  )
}

const Button3: React.FC<ButtonText> = ({ className, ...props }) => {
  return (
    <small
      {...props}
      className={`text-[14px] font-[700] leading-[16px] ${
        className ? className : ""
      }`}
    ></small>
  )
}

const ButtonTexts = { Button1, Button2, Button3 }
export default ButtonTexts
