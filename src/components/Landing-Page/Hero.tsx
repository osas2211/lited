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
    <div
      className="max-w-[1300px] mx-auto md:h-[90vh] flex flex-col justify-center !font-[MangoGrotesque] md:py-4 py-10 overflow-x-hidden md:overflow-x-visible"
      ref={scope}
    >
      <div>
        <div className="relative">
          <div className="absolute top-[0.4rem] left-[0rem] hero-video hidden md:block">
            <video
              autoPlay
              loop
              muted
              // controls={false}
              style={{ height: 420, width: 660 }}
            >
              <source src="/assets/videos/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="uppercase xl:text-[15rem] xl:leading-[12.5rem] lg:text-[12rem] lg:leading-[12.5rem] md:text-[8rem] md:leading-[8.5rem] text-[6.5rem] leading-[5.7rem] flex items-center translate-x-[32.5%] gap-[0] relative hero-top-text hero-text opacity-75 blur-[7px]">
            <h2 className="md:bg-grey-1000  bg-transparent pr-4 relative perspective-[1900px]">
              <span className="font-[MangoGrotesque]">Re</span>
              <div className="font-[MangoGrotesque] text-gray-900 absolute md:-top-[0.5rem] top-[0rem] -left-[1rem] bg-yellow-300 md:px-4 px-2 md:py-[8px] md:pb-1 py-1 md:text-[2.5rem] md:leading-[2.5rem] text-[1.2rem] leading-[1rem] rotate-[-15deg]">
                Music
              </div>
            </h2>
            <h2 className="md:bg-grey-1000  bg-transparent relative z-[1]">
              <span className="font-[MangoGrotesque] md:pl-4">think</span>
              <div className="font-[MangoGrotesque] text-gray-900 absolute bottom-[1.5rem] -right-[2rem] bg-purple-300 md:px-4 px-2 md:py-[8px] md:pb-1 py-1 md:text-[2.5rem] md:leading-[2.5rem] text-[1.2rem] leading-[1rem] rotate-[15deg]">
                Art
              </div>
            </h2>
          </div>
          <div className="h-[2.2rem] w-full md:bg-grey-1000  bg-transparent relative -mt-8 md:block hidden"></div>
          <div className="uppercase xl:text-[15rem] xl:leading-[9rem] lg:text-[12rem] lg:leading-[12.5rem] md:text-[8rem] md:leading-[8.5rem] text-[6.5rem] leading-[5.7rem] hero-bottom-text -translate-x-[-25%] hero-text opacity-75 blur-[7px]">
            <h2 className="md:bg-grey-1000  bg-transparent relative inline-block">
              <span className="pl-4 font-[MangoGrotesque]">Everything</span>
              <div className="font-[MangoGrotesque] text-gray-900 absolute bottom-[1rem] right-[-1.5rem] bg-orange-200 md:px-4 px-2 md:py-[8px] md:pb-1 py-1 md:text-[2.5rem] md:leading-[2.5rem] text-[1.2rem] leading-[1rem] rotate-[-8deg]">
                Photography
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
          <div className="font-[PolySansTrial] font-thin md:text-[20px] md:leading-[24px] max-w-[450px] md:block hidden">
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
          <div className="font-[PolySansTrial] font-thin md:text-[20px] md:leading-[24px] max-w-[450px] md:hidden block">
            <div className="overflow-hidden">
              <p className="hero-text-up translate-y-[100%]">
                Empowering Creatives with innovative solutions that redefines
                their intellecture property.
              </p>
            </div>
          </div>
          <div className="hero-btn">
            <ButtonAlt
              prefixIcon={<FaArrowRight className="text-white" />}
              onClick={() => tl.current.restart()}
              // className="md:!w-auto !w-full"
            >
              Get started
            </ButtonAlt>
          </div>
        </div>
      </div>
    </div>
  )
}
