import React from "react";

import { Img, Text } from "components";

type Footer1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer1: React.FC<Footer1Props> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex md:flex-col flex-row gap-8 items-start justify-between w-full">
          <div className="flex flex-col gap-2 items-center justify-start w-auto">
            <div className="flex flex-col items-center justify-start w-full">
              <Img
                className="h-[120px] md:h-auto object-cover w-full"
                src="images/img_image12.png"
                alt="imageTwelve_Two"
              />
            </div>
            <Text
              className="capitalize text-white-A700 text-xs tracking-[0.60px] w-auto"
              size="txtInterRegular12WhiteA700"
            >
              © 2023 codex
            </Text>
          </div>
          <div className="flex flex-row gap-12 items-center justify-start w-auto">
            <ul className="flex flex-col gap-8 items-start justify-start w-auto md:w-full common-column-list">
              <li>
                <Text
                  className="capitalize text-base text-white-A700 tracking-[0.80px]"
                  size="txtRalewayRomanSemiBold16WhiteA700"
                >
                  community
                </Text>
              </li>
              <li>
                <Text
                  className="capitalize text-base text-white-A700 tracking-[0.80px]"
                  size="txtRalewayRomanSemiBold16WhiteA700"
                >
                  Developers
                </Text>
              </li>
              <li>
                <Text
                  className="capitalize text-base text-white-A700 tracking-[0.80px]"
                  size="txtRalewayRomanSemiBold16WhiteA700"
                >
                  Grants
                </Text>
              </li>
              <li>
                <Text
                  className="capitalize text-base text-white-A700 tracking-[0.80px]"
                  size="txtRalewayRomanSemiBold16WhiteA700"
                >
                  About us
                </Text>
              </li>
            </ul>
            <ul className="flex flex-col gap-8 items-start justify-start w-auto md:w-full common-column-list">
              <li>
                <Text
                  className="capitalize text-base text-white-A700 tracking-[0.80px]"
                  size="txtRalewayRomanSemiBold16WhiteA700"
                >
                  whitepaper
                </Text>
              </li>
              <li>
                <Text
                  className="capitalize text-base text-white-A700 tracking-[0.80px]"
                  size="txtRalewayRomanSemiBold16WhiteA700"
                >
                  brand
                </Text>
              </li>
              <li>
                <Text
                  className="capitalize text-base text-white-A700 tracking-[0.80px]"
                  size="txtRalewayRomanSemiBold16WhiteA700"
                >
                  privacy
                </Text>
              </li>
              <li>
                <Text
                  className="capitalize text-base text-white-A700 tracking-[0.80px]"
                  size="txtRalewayRomanSemiBold16WhiteA700"
                >
                  terms
                </Text>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <Text
              className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
              size="txtRalewayRomanSemiBold16WhiteA700"
            >
              find us
            </Text>
            <div className="flex flex-row gap-12 items-start justify-end w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_mditwitter.svg"
                alt="mditwitter"
              />
              <Img
                className="h-6 w-6"
                src="images/img_icoutlinediscord.svg"
                alt="icoutlinediscor"
              />
              <Img
                className="h-6 w-6"
                src="images/img_mdigithub.svg"
                alt="mdigithub"
              />
              <Img
                className="h-6 w-6"
                src="images/img_icoutlinetelegram.svg"
                alt="icoutlinetelegr"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
