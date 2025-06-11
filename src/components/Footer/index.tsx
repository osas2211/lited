import { Container, Logo, Typography } from ".."
import React from "react"
import {
  DiscordIcon,
  ExportIcon,
  MediumIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
} from "../Icons"
import Link from "next/link"
interface FooterI extends React.HTMLAttributes<HTMLElement> {}

export const Footer: React.FC<FooterI> = ({ ...props }) => {
  const { Subtitle3Regular, Subtitle2Bold } = Typography
  return (
    <footer {...props} className="bg-grey-900">
      <Container>
        <div className="flex md:flex-row flex-col justify-between">
          <div className="w-[336px]">
            <Logo />
            <Subtitle3Regular className="text-grey-200 mt-[12px] mb-[28px]">
              LiTED is decentralizing the creative industry and community.
            </Subtitle3Regular>

            <div className="flex gap-[24px]">
              <TwitterIcon />
              <DiscordIcon />
              <TelegramIcon />
              <RedditIcon />
              <MediumIcon />
            </div>
          </div>

          <div className="flex gap-[80px] md:mt-[0px] mt-[40px]">
            <div>
              <Subtitle2Bold className="mb-[12px]">Company</Subtitle2Bold>
              <ul className="flex flex-col gap-[8px]">
                <li>
                  <Link href={""}>
                    <Subtitle3Regular className="text-grey-200">
                      About LiTED
                    </Subtitle3Regular>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Subtitle3Regular className="text-grey-200">
                      For Artistes
                    </Subtitle3Regular>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Subtitle3Regular className="text-grey-200">
                      FAQs
                    </Subtitle3Regular>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <Subtitle2Bold className="mb-[12px]">Docs</Subtitle2Bold>
              <ul className="flex flex-col gap-[8px]">
                <li>
                  <Link target="_blank" href={""}>
                    <Subtitle3Regular className="text-grey-200 flex gap-[8px]">
                      Docs <ExportIcon />
                    </Subtitle3Regular>
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href={""}>
                    <Subtitle3Regular className="text-grey-200 flex gap-[8px]">
                      Github <ExportIcon />
                    </Subtitle3Regular>
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href={"story.xyz"}>
                    <Subtitle3Regular className="text-grey-200 flex gap-[8px]">
                      story.xyz <ExportIcon />
                    </Subtitle3Regular>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Subtitle3Regular className="text-grey-200 text-center mt-[40px]">
          © 2025 LiTED. All rights reserved.
        </Subtitle3Regular>
      </Container>
    </footer>
  )
}
