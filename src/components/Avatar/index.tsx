import Image from "next/image"
import React from "react"
import classNames from "classnames"

interface AvatarI {
  size?: "large" | "medium" | "small"
  src: string
  style?: React.CSSProperties
  className?: string
}

export const Avatar: React.FC<AvatarI> = ({ size, src, style, className }) => {
  const width =
    size === "large" ? "w-[48px]" : size === "medium" ? 40 : "w-[28px]"
  const sizes = {
    large: { width: "w-[48px]", height: "h-[48px]" },
    medium: { width: "w-[40px]", height: "h-[40px]" },
    small: { width: "w-[28px]", height: "h-[28px]" },
    none: { width: "", height: "" },
  }
  return (
    <div
      className={classNames(
        className,
        `rounded-full relative ${sizes[size || "none"].width} ${
          sizes[size || "none"].height
        }`
      )}
    >
      <Image
        src={src}
        alt={src}
        style={{ borderRadius: "100%", ...style }}
        objectFit="cover"
        fill={true}
      />
    </div>
  )
}
