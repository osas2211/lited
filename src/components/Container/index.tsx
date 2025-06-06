import React, { FC } from "react"

interface ContainerI extends React.HTMLAttributes<HTMLDivElement> {}

const Container: FC<ContainerI> = ({ className, ...props }) => {
  return (
    <div
      {...props}
      className={`p-[20px] md:p-[80px] ${className ? className : ""}`}
    ></div>
  )
}
export default Container
