import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { HtmlHTMLAttributes, ReactNode, useEffect, useRef } from "react"

interface PropsI extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant?: string
  prefixicon?: ReactNode
  size?: "small" | "default"
}
export const ButtonAlt = (props: PropsI) => {
  const buttonRef: React.RefObject<HTMLButtonElement> = useRef(null)
  const tl = useRef(gsap.timeline({ paused: true }))
  useGSAP(() => {
    tl.current
      .to("#btn-primary", {
        background: "#1447e6",
        color: "#ffffff",
        scale: 0.9,
        borderColor: "#1447e6",
        duration: 0.3,
        // ease: "back.out",
      })
      .to(
        ".btn-text",
        {
          ease: "back.inOut",
          duration: 0.3,
          y: -100,
        },
        "<"
      )
      .to(
        ".btn-text-2",
        {
          ease: "back.inOut",
          duration: 0.3,
          y: 0,
        },
        "<"
      )
  })
  useEffect(() => {
    buttonRef.current?.addEventListener("mouseenter", () => {
      tl.current.play()
    })
    buttonRef.current?.addEventListener("mouseleave", () => {
      tl.current.reverse()
    })

    return () => {
      buttonRef.current?.removeEventListener("mouseenter", () => {})
      buttonRef.current?.removeEventListener("mouseleave", () => {})
    }
  }, [])
  const textSize =
    props?.size === "small"
      ? "md:text-[1.5rem] text-[1rem] "
      : "md:text-[2.5rem] text-[1.5rem] "
  return (
    <button
      {...props}
      ref={buttonRef}
      className={`bg-primary-default text-white ${textSize} uppercase px-8 py-2 cursor-pointer relative ${
        props?.size === "small"
          ? "md:h-[55px] h-[40px] "
          : "md:h-[75px] h-[55px] "
      } overflow-hidden flex items-center justify-between gap-5`}
      id="btn-primary"
    >
      <span className={`block btn-text font-mango ${textSize}`}>
        {props.children}
      </span>
      {props?.prefixicon}
      <div className="absolute w-full h-full top-0 left-0 translate-y-[100%] z-[10] text-white btn-text-2">
        <div className="flex items-center justify-between px-8 py-2 font-mango">
          <span className="font-mango">{props.children}</span>
          {props?.prefixicon && <div></div>}
        </div>
      </div>
    </button>
  )
}
