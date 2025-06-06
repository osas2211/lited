import React from "react"
import { Modal, ModalClose, ModalDialog } from "@mui/joy"
import { Button, Typography } from "../.."
import Image from "next/image"
import { Preview } from "./Preview"
import { Details } from "./Details"

interface MintModalI {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MintModal: React.FC<MintModalI> = ({ open, setOpen }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      {/* <ModalClose /> */}
      <ModalDialog>
        <div className="relative rounded-[30px] text-grey-0 ">
          <div className="absolute top-0 left-0 h-full w-full z-[-1] rounded-[30px]">
            <Image
              src={"/nft.png"}
              alt="background"
              fill={true}
              objectFit="cover"
              className="rounded-[30px]"
            />
          </div>
          <div
            className="rounded-[30px] md:min-h-[600px] md:min-w-[1000px] md:flex"
            style={{
              boxShadow: "0px 1px 100px 0px rgba(0, 0, 0, 0.20) inset",
              backdropFilter: "blur(40px)",
              background: "rgba(255, 255, 255, 0.64)",
            }}
          >
            <Preview {...{ setOpen }} />
            <Details />
          </div>
        </div>
      </ModalDialog>
    </Modal>
  )
}
