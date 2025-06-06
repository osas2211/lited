import React from "react"

export interface Subtitle extends React.HTMLAttributes<HTMLHeadingElement> {
  weight?: string
}

const Subtitle0Regular: React.FC<Subtitle> = ({ className, ...props }) => {
  return (
    <h3
      {...props}
      className={`text-[20px]  md:text-[24px] font-[400] leading-[32px] ${
        className ? className : ""
      }`}
    ></h3>
  )
}

const Subtitle0Medium: React.FC<Subtitle> = ({ className, ...props }) => {
  return (
    <h3
      {...props}
      className={`text-[20px]  md:text-[24px] font-[500] leading-[32px] ${
        className ? className : ""
      }`}
    ></h3>
  )
}
const Subtitle0Bold: React.FC<Subtitle> = ({ className, ...props }) => {
  return (
    <h3
      {...props}
      className={`text-[20px]  md:text-[24px] font-[700] leading-[32px] ${
        className ? className : ""
      }`}
    ></h3>
  )
}

const Subtitle1Regular: React.FC<Subtitle> = ({ className, ...props }) => {
  return (
    <h4
      {...props}
      className={`text-[18px]  md:text-[20px] font-[400] leading-[28px] ${
        className ? className : ""
      }`}
    ></h4>
  )
}

const Subtitle1Medium: React.FC<Subtitle> = ({ className, ...props }) => {
  return (
    <h4
      {...props}
      className={`text-[18px]  md:text-[20px] font-[500] leading-[28px] ${
        className ? className : ""
      }`}
    ></h4>
  )
}

const Subtitle1Bold: React.FC<Subtitle> = ({ className, ...props }) => {
  return (
    <h4
      {...props}
      className={`text-[18px]  md:text-[20px] font-[700] leading-[28px] ${
        className ? className : ""
      }`}
    ></h4>
  )
}

const Subtitle2Regular: React.FC<Subtitle> = ({ className, ...props }) => {
  return (
    <h5
      {...props}
      className={`text-[16px]  md:text-[18px] font-[400] leading-[28px] ${
        className ? className : ""
      }`}
    ></h5>
  )
}

const Subtitle2Medium: React.FC<Subtitle> = ({ className, ...props }) => {
  return (
    <h5
      {...props}
      className={`text-[16px]  md:text-[18px] font-[500] leading-[28px] ${
        className ? className : ""
      }`}
    ></h5>
  )
}

const Subtitle2Bold: React.FC<Subtitle> = ({ className, ...props }) => {
  return (
    <h5
      {...props}
      className={`text-[16px]  md:text-[18px] font-[700] leading-[28px] ${
        className ? className : ""
      }`}
    ></h5>
  )
}

const Subtitle3Regular: React.FC<Subtitle> = ({ className, ...props }) => {
  return (
    <h6
      {...props}
      className={`text-[14px]  md:text-[16px] font-[400] leading-[24px] ${
        className ? className : ""
      }`}
    ></h6>
  )
}

const Subtitle3Medium: React.FC<Subtitle> = ({ className, ...props }) => {
  return (
    <h6
      {...props}
      className={`text-[14px]  md:text-[16px] font-[500] leading-[24px] ${
        className ? className : ""
      }`}
    ></h6>
  )
}
const Subtitle3Bold: React.FC<Subtitle> = ({ className, ...props }) => {
  return (
    <h6
      {...props}
      className={`text-[14px]  md:text-[16px] font-[700] leading-[24px] ${
        className ? className : ""
      }`}
    ></h6>
  )
}

const Subtitles = {
  Subtitle0Regular,
  Subtitle0Medium,
  Subtitle0Bold,
  Subtitle1Regular,
  Subtitle1Medium,
  Subtitle1Bold,
  Subtitle2Regular,
  Subtitle2Medium,
  Subtitle2Bold,
  Subtitle3Regular,
  Subtitle3Medium,
  Subtitle3Bold,
}

export default Subtitles
