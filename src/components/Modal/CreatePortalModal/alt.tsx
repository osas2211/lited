"use client"
import React, { useState } from "react"
import { Modal, ModalClose, ModalDialog } from "@mui/joy"
import { Button, Typography } from "../.."
import Image from "next/image"
import {
  BuyCryptoIcon,
  CancelIconAlt,
  CardPosIcon,
  CaretDownIcon,
  LogoIconAlt,
} from "@/components/Icons"
import { PortalMetaCard } from "@/components/Card/PortalMetaCard"
import Link from "next/link"

interface props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const { H4, Subtitle2Regular, Caption2Regular } = Typography

export const CreatePortalModalAlt: React.FC<props> = ({ open, setOpen }) => {
  const [showPay, setShowPay] = useState(false)
  const toggleShowPay = () => setShowPay(!showPay)
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalDialog>
        <div className="relative rounded-[30px] text-grey-0 bg-grey-900 no-scrollbar">
          <div className="rounded-[30px] md:w-[700px] md:p-[32px] p-[13px] mb-[3rem]">
            <div className="flex justify-end">
              <span onClick={() => setOpen(false)} className="cursor-pointer">
                <CancelIconAlt />
              </span>
            </div>

            <div className="md:px-[60px] px-[0px]">
              <H4 className="text-center mb-[64px] mt-[1rem]">Create portal</H4>
              <Link href="/schedule-portal">
                <div className="bg-gradient-linear px-[12px] py-[10px] mb-[2rem] rounded-[20px] border-[1px] border-grey-500 flex gap-[1rem] items-center">
                  <div className="p-[8px] bg-grey-800 rounded-[12px]">
                    <LogoIconAlt />
                  </div>
                  <div>
                    <Subtitle2Regular>
                      Get registered on radio vault
                    </Subtitle2Regular>
                    <small className="text-grey-300">
                      Creating portals for Radio vault subscribers is absolutely
                      free!
                    </small>
                  </div>
                  <div className="rotate-[-90deg] ml-[1rem]">
                    <CaretDownIcon />
                  </div>
                </div>
              </Link>
              {!showPay ? (
                <Button
                  variant="secondary"
                  className="w-full mb-[30px] relative btn-no-hover"
                  onClick={toggleShowPay}
                >
                  <span className="mr-4">Portal now</span>
                  <Button size="small" variant="primary">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-white bg-white text-[10px]"
                        style={{ backgroundClip: "text" }}
                      >
                        $100
                      </span>
                      <Image
                        src={"/tether.svg"}
                        width={12}
                        height={12}
                        alt="Tether Symbol"
                      />
                    </div>
                  </Button>
                </Button>
              ) : (
                <div className="flex flex-col gap-[32px]">
                  <PortalMetaCard
                    head="Pay with crypto balance"
                    subhead="Creating portals for Radio vault subscribers is absolutely free!"
                    icon={<BuyCryptoIcon />}
                    className="md:h-[70px] h-[70px] cursor-pointer"
                    variant="small"
                    showArrow
                    onClick={toggleShowPay}
                  />
                  <PortalMetaCard
                    head="Pay with debit card"
                    subhead="Creating portals for Radio vault subscribers is absolutely free!"
                    icon={<CardPosIcon />}
                    className="md:h-[70px] h-[80px] cursor-pointer"
                    variant="small"
                    showArrow
                    onClick={toggleShowPay}
                  />
                </div>
              )}

              {!showPay && (
                <Caption2Regular className="border-t-[1px] border-grey-700 py-[20px]">
                  Follow the Song to radio community Guidelines: illegal
                  activities, violence against yourself or others harassment,
                  hate speech, gore, sex and nudity are not appropriate.
                </Caption2Regular>
              )}
            </div>
          </div>
        </div>
      </ModalDialog>
    </Modal>
  )
}
