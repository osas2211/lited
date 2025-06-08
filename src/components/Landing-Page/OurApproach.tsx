"use client"
import React from "react"
import { Container } from "@/components"
import { CgArrowRight } from "react-icons/cg"
import { FaArrowRight } from "react-icons/fa"
import Link from "next/link"

export const OurApproach = () => {
  return (
    <div>
      <Container>
        <div className="grid md:grid-cols-4 gap-4">
          <FaArrowRight className="md:text-[4rem] md:mt-10 md:inline hidden" />
          <div className="col-span-3 ">
            <h3 className="md:text-[4.3rem] text-[1.7rem] leading-[1.13] font-medium font-polysans md:mb-[10rem] mb-8">
              Defining how artistes move, scale, and express themselves in a
              decentralized world
            </h3>
            <div className="grid md:grid-cols-3 gap-4 md:text-[1.35rem] text-[1rem]">
              <p className="font-polysans md:text-2xl text-lg">(Approach)</p>
              <div className="col-span-2 md:w-[75%]">
                <p className="mb-8 font-polysans md:text-2xl text-lg">
                  Blockchain is the new frontier of art and creativity.
                </p>
                <div className="space-y-7 text-grey-300">
                  <p className="font-polysans">
                    The media landscape has evolved, artistes are called to
                    scale beyond static and adapt to an ever moving world. With
                    countless digital touchpoints and an increasingly saturated
                    market, they seek consistency and ownability for their IPs
                    while striving to uniquely stand out.
                  </p>
                  <p className="font-polysans">
                    Lited leverages{" "}
                    <Link
                      href={"story.xyz"}
                      target="_blank"
                      className="text-primary-active underline"
                    >
                      story,
                    </Link>{" "}
                    the World&apos;s Intellecture property Blockchain. A
                    purpose-built L1 that tokenises intelligence and makes it
                    programmable.
                  </p>
                  <p className="font-polysans">
                    In-built is a marketplace that showcase unique art works
                    made by passionate artist(e)s. As an Artist(e), you can
                    register your IPs, go live with your fans, and make money
                    whenever anyone consumes you work.
                  </p>
                </div>

                <Link
                  href={"/register-ip"}
                  className="md:mt-[7rem] mt-[3rem] inline-block font-polysans underline underline-offset-[7px]"
                >
                  Register an Intellecture Property
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
