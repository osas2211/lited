"use client"
import React from "react"
import { Container } from "@/components"
import { CgArrowRight } from "react-icons/cg"
import { FaArrowRight } from "react-icons/fa"
import Link from "next/link"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(SplitText, ScrollTrigger)

const textAnimation = (trigger: string, end?: string) => {
  let split = SplitText.create(trigger, { type: "words, chars" })
  // now animate the characters in a staggered fashion
  gsap.from(split.chars, {
    // duration: 1,
    opacity: 0.1, // animate from 100px below
    stagger: 0.05, // 0.05 seconds between each
    scrollTrigger: {
      trigger: trigger,
      scrub: true,
      // endTrigger: "#approach-info",
      end: end || "10px",
    },
  })
}

export const OurApproach = () => {
  useGSAP(() => {
    textAnimation(".big-text", "-40px")
    // textAnimation(".text-1")
    // textAnimation(".text-2")
    // textAnimation(".text-3")
    // textAnimation(".text-4")
  })
  return (
    <div id="#approach">
      <Container>
        <div className="grid md:grid-cols-4 gap-4">
          <FaArrowRight className="md:text-[4rem] md:mt-10 md:inline hidden" />
          <div className="col-span-3 ">
            <h3 className="md:text-[4.3rem] text-[1.7rem] leading-[1.13] font-medium font-polysans md:mb-[10rem] mb-8 big-text">
              Defining how artistes move, scale, and express themselves in a
              decentralized world
            </h3>
            <div
              className="grid md:grid-cols-3 gap-4 md:text-[1.35rem] text-[1rem]"
              id="approach-info"
            >
              <p className="font-polysans md:text-2xl text-lg text-1">
                (Approach)
              </p>
              <div className="col-span-2 md:w-[75%]">
                <p className="mb-8 font-polysans md:text-2xl text-lg text-2">
                  Blockchain is the new frontier of art and creativity.
                </p>
                <div className="space-y-7 text-grey-300">
                  <p className="font-polysans text-3">
                    The media landscape has evolved, artistes are called to
                    scale beyond static and adapt to an ever moving world. With
                    countless digital touchpoints and an increasingly saturated
                    market, they seek consistency and ownability for their IPs
                    while striving to uniquely stand out.
                  </p>
                  <p className="font-polysans">
                    <span className="text-3">Lited leverages</span>{" "}
                    <Link
                      href={"story.xyz"}
                      target="_blank"
                      className="text-primary-active underline"
                    >
                      story,
                    </Link>{" "}
                    <span className="text-3">
                      the World&apos;s Intellecture property Blockchain. A
                      purpose-built L1 that tokenises intelligence and makes it
                      programmable.
                    </span>
                  </p>
                  <p className="font-polysans text-4">
                    In-built is a marketplace that showcase unique art works
                    made by passionate artist(e)s. As an Artist(e), you can
                    register your IPs, go live with your fans, and make money
                    whenever anyone consumes your work.
                  </p>
                </div>

                <Link
                  href={"/register-ip"}
                  className="md:mt-[7rem] mt-[3rem] inline-block font-polysans underline underline-offset-[7px]"
                >
                  Register your Intellecture Property
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
