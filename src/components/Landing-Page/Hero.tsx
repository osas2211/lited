"use client"
import { useEffect, useRef } from "react"
import { FaArrowRight } from "react-icons/fa"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ButtonAlt } from "../Button/ButtonAlt"

export const Hero = () => {
  const scope: React.RefObject<HTMLDivElement> = useRef(null)
  const tl = useRef(gsap.timeline({ paused: true }))
  const matchMedia = gsap.matchMedia()
  useGSAP(
    () => {
      matchMedia.add("(min-width: 769px)", () => {
        tl.current
          .to(".hero-text", {
            duration: 1,
            opacity: 1,
            filter: "blur(0px)",
          })
          .to(".hero-video", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1.25,
            ease: "expo.inOut",
          })
          .to(
            ".hero-top-text",
            {
              gap: "32rem",
              x: 0,
              duration: 1.25,
              ease: "expo.inOut",
            },
            "<"
          )
          .to(
            ".hero-bottom-text",
            {
              marginLeft: "550px",
              x: 0,
              duration: 1.25,
              ease: "expo.inOut",
            },
            "<"
          )
          .to(".hero-text-up", {
            y: 0,
            stagger: 0.2,
            duration: 0.4,
          })
          .to(
            ".hero-btn",
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 1.25,
              ease: "expo.inOut",
            },
            "-=0.1"
          )
      })

      matchMedia.add("(max-width: 768px)", () => {
        tl.current
          .to(".hero-text", {
            duration: 1,
            opacity: 1,
            filter: "blur(0px)",
          })

          .to(
            ".hero-top-text",
            {
              gap: "0rem",
              x: 0,
              // xPercent: "-50%",
              duration: 0.75,
              justifyContent: "start",
              paddingLeft: "2.5rem",
            },
            "<"
          )
          .to(
            ".hero-bottom-text",
            {
              marginLeft: "0px",
              x: 0,
              // xPercent: "-50%",
              duration: 0.75,
              paddingLeft: "0.5rem",
              textAlign: "center",
            },
            "<"
          )
          .to(".hero-video", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1.25,
            ease: "expo.inOut",
          })
          .to(".hero-text-up", {
            y: 0,
            stagger: 0.2,
            duration: 0.4,
          })
          .to(
            ".hero-btn",
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 1.25,
              ease: "expo.inOut",
            },
            "-=0.1"
          )
      })
    },
    { scope }
  )
  useEffect(() => {
    tl.current.play()
  })
  return (
    <div className="overflow-x-hidden">
      <div
        className="2xl:max-w-[1300px] xl:max-w-[1200px] lg: max-w-[900px] mx-auto md:h-[91vh] flex flex-col justify-center !font-mango md:py-4 py-10 overflow-x-hidden md:overflow-x-visible"
        ref={scope}
      >
        <div>
          <div className="relative">
            <div className="absolute xl:top-[0.4rem] top-[3.5rem] left-[0rem] hero-video hidden md:block">
              <video
                autoPlay
                loop
                muted
                // controls={false}
                // style={{ height: 420, width: 660 }}
                className="xl:h-[420px] xl:w-[660px] h-[320px] w-[560px]"
              >
                <source src="/assets/videos/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="uppercase xl:text-[15rem] xl:leading-[12.5rem] lg:text-[9rem] lg:leading-[12.5rem] md:text-[8rem] md:leading-[8.5rem] text-[6.5rem] leading-[5.7rem] flex items-center translate-x-[32.5%] gap-[0] relative hero-top-text hero-text opacity-75 blur-[7px]">
              <h2 className="md:bg-grey-1000  bg-transparent pr-4 relative perspective-[1900px]">
                <span className="font-mango">Re</span>
                <div className="font-mango text-gray-900 absolute xl:-top-[0.5rem] md:top-[2rem] top-[0rem] -left-[1rem] bg-yellow-300 md:px-4 px-2 md:py-[8px] md:pb-1 py-1 xl:text-[2.5rem] lg:text-[1.8rem] xl:leading-[2.5rem] lg:leading-[1.5rem] text-[1.2rem] leading-[1rem] rotate-[-15deg]">
                  Music
                </div>
              </h2>
              <h2 className="md:bg-grey-1000  bg-transparent relative z-[1]">
                <span className="font-mango xl:pl-4 md:pl-0 pl-0">think</span>
                <div className="font-mango text-gray-900 absolute xl:bottom-[1.5rem] md:bottom-[3rem] bottom-[1.2rem] -right-[2rem] bg-purple-300 md:px-4 px-2 md:py-[8px] md:pb-1 py-1 xl:text-[2.5rem] lg:text-[1.8rem] xl:leading-[2.5rem] lg:leading-[1.5rem] text-[1.2rem] leading-[1rem] rotate-[15deg]">
                  Art
                </div>
              </h2>
            </div>
            <div className="h-[2.2rem] w-full md:bg-grey-1000  bg-transparent relative -mt-8 md:block hidden"></div>
            <div className="uppercase xl:text-[15rem] xl:leading-[9rem] lg:text-[9rem] lg:leading-[12.5rem] md:text-[8rem] md:leading-[8.5rem] text-[6.5rem] leading-[5.7rem] hero-bottom-text -translate-x-[-25%] hero-text opacity-75 blur-[7px]">
              <h2 className="md:bg-grey-1000  bg-transparent relative inline-block">
                <span className="pl-4 font-mango">Everything</span>
                <div className="font-mango text-gray-900 absolute xl:bottom-[1rem] md:bottom-[3rem] bottom-[1rem] right-[-1.5rem] bg-orange-200 md:px-4 px-2 md:py-[8px] md:pb-1 py-1 xl:text-[2.5rem] lg:text-[1.8rem] xl:leading-[2.5rem] lg:leading-[1.5rem] text-[1.2rem] leading-[1rem] rotate-[-8deg]">
                  Creativity
                </div>
              </h2>
            </div>
            <div className="hero-video block md:hidden my-2">
              <video
                autoPlay
                loop
                muted
                // controls={false}
                // style={{ height: 260, width: 640 }}
              >
                <source src="/assets/videos/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="p-4 md:p-0 flex md:flex-row flex-col gap-4 md:items-center justify-between md:mt-7">
            <div className="font-polysans font-thin md:text-[20px] md:leading-[24px] max-w-[450px] md:block hidden">
              <div className="overflow-hidden">
                <p className="hero-text-up translate-y-[100%]">
                  Empowering Creatives with
                </p>
              </div>
              <div className="overflow-hidden">
                <p className="hero-text-up translate-y-[100%]">
                  innovative solutions that redefines
                </p>
              </div>
              <div className="overflow-hidden">
                <p className="hero-text-up translate-y-[100%]">
                  their intellecture property.
                </p>
              </div>
            </div>
            <div className="font-polysans font-thin md:text-[20px] md:leading-[24px] max-w-[450px] md:hidden block">
              <div className="overflow-hidden">
                <p className="hero-text-up translate-y-[100%]">
                  Empowering Creatives with innovative solutions that redefines
                  their intellecture property.
                </p>
              </div>
            </div>
            <div className="hero-btn">
              <ButtonAlt
                prefixicon={<FaArrowRight className="text-white" />}
                onClick={() => tl.current.restart()}
                // className="md:!w-auto !w-full"
              >
                Get started
              </ButtonAlt>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
