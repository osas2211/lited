"use client"
import { useEffect, useRef } from "react"
import "./select-option.css"
import Link from "next/link"
import { Typography } from "@/components"
import { CgMusicNote } from "react-icons/cg"
import { FaFighterJet, FaPaintBrush, FaVideo } from "react-icons/fa"
import { HiPhotograph } from "react-icons/hi"

const { H5, Caption2Regular, Subtitle3Regular } = Typography

export function SelectOption() {
  const containerRef = useRef<HTMLDivElement>(null)
  const highlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const highlight = highlightRef.current
    if (!container || !highlight) return

    const gridItems =
      container.querySelectorAll<HTMLDivElement>(".select-grid-item")
    const firstItem = gridItems[0] || null

    const highlightColors = [
      "#E24E1B",
      "#4381C1",
      "#F79824",
      "#04A777",
      "#5B8C5A",
      "#2176FF",
      "#818D92",
      "#22AAA1",
    ]

    gridItems.forEach((item, index) => {
      item.dataset.color = highlightColors[index % highlightColors.length]
    })

    const moveToElement = (element: HTMLDivElement | null) => {
      if (element && highlight) {
        const rect = element.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()

        highlight.style.transform = `translate(${
          rect.left - containerRect.left
        }px, ${rect.top - containerRect.top}px)`
        highlight.style.width = `${rect.width}px`
        highlight.style.height = `${rect.height}px`
        highlight.style.backgroundColor = element.dataset.color || ""
      }
    }

    const moveHighlight = (e: MouseEvent) => {
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY)
      if (!hoveredElement) return

      // Check if element is select-grid-item or child of select-grid-item
      const targetElement = hoveredElement.classList.contains(
        "select-grid-item"
      )
        ? (hoveredElement as HTMLDivElement)
        : (hoveredElement.closest(".select-grid-item") as HTMLDivElement | null)

      if (targetElement) {
        moveToElement(targetElement)
      }
    }

    moveToElement(firstItem)

    container.addEventListener("mousemove", moveHighlight)
    return () => container.removeEventListener("mousemove", moveHighlight)
  }, [])

  return (
    <>
      <div
        className="select-container mx-auto md:mt-[10rem] -mt-[15rem]"
        ref={containerRef}
      >
        <div className="text-center my-5 md:my-8">
          <H5>Select IP Type</H5>
          <Subtitle3Regular>
            Select the type of Intellecture Property you want to register.
          </Subtitle3Regular>
        </div>
        <div className="select-grid">
          <div className="select-grid-row">
            <Link
              href={"/register-ip/music"}
              className="block select-grid-item"
            >
              <div className="flex items-center text-center gap-2 flex-col">
                <CgMusicNote size={28} className="text-primary-default" />
                <div>
                  {" "}
                  <p className="md:!text-lg">MUSIC</p>
                  <Caption2Regular>
                    Have a song you want to tokenise?
                  </Caption2Regular>
                </div>
              </div>
            </Link>

            <Link
              href={"/register-ip/video"}
              className="block select-grid-item"
            >
              <div className="flex items-center text-center gap-2 flex-col">
                <FaVideo size={28} className="text-primary-default" />
                <div>
                  <p className="md:!text-lg">VIDEO</p>
                  <Caption2Regular>
                    Have a song you want to tokenise?
                  </Caption2Regular>
                </div>
              </div>
            </Link>
          </div>
          <div className="select-grid-row">
            <Link
              href={"/register-ip/photo"}
              className="block select-grid-item"
            >
              <div className="flex items-center text-center gap-2 flex-col">
                <FaPaintBrush size={28} className="text-primary-default" />
                <div>
                  {" "}
                  <p className="md:!text-lg">PAINTING</p>
                  <Caption2Regular>
                    Have a song you want to tokenise?
                  </Caption2Regular>
                </div>
              </div>
            </Link>
            <Link
              href={"/register-ip/photo"}
              className="block select-grid-item"
            >
              <div className="flex items-center text-center gap-2 flex-col">
                <HiPhotograph size={28} className="text-primary-default" />
                <div>
                  <p className="md:!text-lg">PHOTO</p>
                  <Caption2Regular>
                    Have a song you want to tokenise?
                  </Caption2Regular>
                </div>
              </div>
            </Link>
            <Link
              href={"/register-ip/comics"}
              className="block select-grid-item"
            >
              <div className="flex items-center text-center gap-2 flex-col">
                <FaFighterJet size={28} className="text-primary-default" />
                <div>
                  <p className="md:!text-lg">COMICS</p>
                  <Caption2Regular>
                    Have a song you want to tokenise?
                  </Caption2Regular>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="highlight" ref={highlightRef}></div>
      </div>
    </>
  )
}
