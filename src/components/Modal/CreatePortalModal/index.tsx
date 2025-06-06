import React from "react"
import { Modal, ModalClose, ModalDialog } from "@mui/joy"
import { Button, Typography } from "../.."
import Image from "next/image"
import { CancelIconAlt, CaretDownIcon } from "@/components/Icons"
import Link from "next/link"

interface props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const { H4, Subtitle1Regular, Caption2Regular } = Typography

export const CreatePortalModal: React.FC<props> = ({ open, setOpen }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      {/* <ModalClose /> */}
      <ModalDialog>
        <div className="relative rounded-[30px] text-grey-0 bg-grey-900 no-scrollbar">
          <div className="rounded-[30px] md:w-[640px] md:p-[32px] p-[20px]">
            <div className="flex justify-end">
              <span onClick={() => setOpen(false)} className="cursor-pointer">
                <CancelIconAlt />
              </span>
            </div>

            <div className="md:px-[80px] px-[24px]">
              <H4 className="text-center mb-[64px] mt-[1rem]">Create portal</H4>
              <Button variant="secondary" className="w-full mb-[30px] relative">
                <span className="mr-4">Portal now</span>
                {/* <Button size="small" variant="primary">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-white bg-white"
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
                </Button> */}
                <span className="absolute top-[18px] right-[18px]">
                  <CaretDownIcon />
                </span>
              </Button>
              <Link href="/schedule-portal">
                <Button variant="secondary" className="w-full mb-[64px]">
                  Schedule portal
                </Button>
              </Link>
              <Caption2Regular className="border-t-[1px] border-grey-700 py-[20px]">
                Follow the Song to radio community Guidelines: illegal
                activities, violence against yourself or others harassment, hate
                speech, gore, sex and nudity are not appropriate.
              </Caption2Regular>
            </div>
          </div>
        </div>
      </ModalDialog>
    </Modal>
  )
}
