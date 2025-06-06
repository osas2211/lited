import React from "react"
interface Heading extends React.HTMLAttributes<HTMLHeadingElement> {}

const H1: React.FC<Heading> = ({ className, ...props }) => {
  return (
    <h1
      {...props}
      className={`md:text-[80px] font-[700] font-[Arvo] md:leading-[104px] ${
        className ? className : ""
      }`}
    ></h1>
  )
}

const H2: React.FC<Heading> = ({ className, ...props }) => {
  return (
    <h2
      {...props}
      className={`md:text-[60px] font-[700] font-[Arvo] md:leading-[80px] leading-[32px] ${
        className ? className : ""
      }`}
    ></h2>
  )
}

const H3: React.FC<Heading> = ({ className, ...props }) => {
  return (
    <h3
      {...props}
      className={`text-[24px] md:text-[48px] font-[700] font-[Arvo] md:leading-[64px] ${
        className ? className : ""
      }`}
    ></h3>
  )
}

const H4: React.FC<Heading> = ({ className, ...props }) => {
  return (
    <h4
      {...props}
      className={`md:text-[32px] font-[700] font-[Arvo] md:leading-[44px] ${
        className ? className : ""
      }`}
    ></h4>
  )
}

const H5: React.FC<Heading> = ({ className, ...props }) => {
  return (
    <h5
      {...props}
      className={`md:text-[24px] font-[700] font-[Arvo] md:leading-[32px] ${
        className ? className : ""
      }`}
    ></h5>
  )
}

const H6: React.FC<Heading> = ({ className, ...props }) => {
  return (
    <h6
      {...props}
      className={`md:text-[20px] font-[700] font-[Arvo] md:leading-[28px] ${
        className ? className : ""
      }`}
    ></h6>
  )
}
const Headings = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
}
export default Headings
