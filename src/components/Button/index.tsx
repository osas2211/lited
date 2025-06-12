import React, { FC } from "react"
import { Typography } from ".."
import { gradient, greyScale } from "@/utils/colors"
import classNames from "classnames"
import { ClipLoader } from "react-spinners"

interface ButtonI extends React.HTMLAttributes<HTMLButtonElement> {
  size?: "large" | "medium" | "small"
  prefixicon?: React.ReactNode
  sufficIcon?: React.ReactNode
  variant?: "primary" | "secondary" | "subtle" | "text"
  disabled?: boolean
  prefixClass?: string
  buttonType?: "submit" | "reset" | "button"
  isLoading?: boolean
}

const Button: FC<ButtonI> = ({
  size,
  prefixicon,
  sufficIcon,
  variant,
  className,
  style,
  disabled,
  prefixClass,
  buttonType,
  isLoading,
  ...props
}) => {
  const { Button1, Button2, Button3 } = Typography

  const variants = {
    primary: {
      bg: gradient.linear,
      border: "",
      color: greyScale.grey0,
    },
    secondary: {
      bg: gradient.background_gradient,
      border: `2px solid ${gradient.gradientColors.purple}`,
      color: "",
    },
    subtle: {
      bg: greyScale.grey800,
      border: "",
      color: "",
    },
    text: {
      bg: "",
      border: "",
      color: "",
    },
  }
  const bg = variants[variant ? variant : "primary"].bg
  const color = variants[variant ? variant : "primary"].color
  const border = variants[variant ? variant : "primary"].border
  const isDisabled = isLoading || disabled

  const sizes = {
    small: {
      Text: () => (
        <Button3
          style={{ color }}
          className={`${variant === "primary" ? "" : !variant ? "" : "button"}`}
          {...props}
        />
      ),
      width: "md:min-w-[120px] min-w-[58px]",
      px: "px-[12px]",
      py: "py-[12px]",
    },
    medium: {
      Text: () => (
        <Button2
          style={{ color }}
          className={`${variant === "primary" ? "" : !variant ? "" : "button"}`}
          {...props}
        />
      ),
      width: "min-w-[180px]",
      px: "px-[18px]",
      py: "md:py-[16px] py-[12px]",
    },
    large: {
      Text: () => (
        <Button1
          style={{ color }}
          className={`${variant === "primary" ? "" : !variant ? "" : "button"}`}
          {...props}
        />
      ),
      width: "min-w-[280px]",
      px: "px-[20px]",
      py: "py-[18px]",
    },
  }

  const Text = sizes[size ? size : "medium"].Text
  const width = sizes[size ? size : "medium"].width
  const px = sizes[size ? size : "medium"].px
  const py = sizes[size ? size : "medium"].py
  return (
    <button
      disabled={isDisabled}
      type={buttonType || "button"}
      {...props}
      style={{
        background: bg,
        border,
        ...style,
        opacity: isDisabled ? 0.5 : "",
      }}
      className={`transition hover:ease-in duration-300 rounded-[80px] ${width} ${py} ${px} ${
        isDisabled ? "cursor-not-allowed" : "hover-btn"
      } ${className ? className : ""}`}
    >
      {isLoading ? (
        <div className="flex items-start gap-2 justify-center">
          <ClipLoader size={20} color="white" />
          <Text />
        </div>
      ) : (
        <>
          <span
            className={classNames(
              "flex items-center gap-[8px] justify-center",
              prefixClass
            )}
          >
            {prefixicon}
            <Text />
            {sufficIcon}
          </span>
        </>
      )}
    </button>
  )
}

export default Button
