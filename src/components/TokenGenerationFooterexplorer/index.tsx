import React from "react";

import { Img, Text } from "components";

type TokenGenerationFooterexplorerProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "p2023codex" | "privacy" | "term" | "findustext"
> &
  Partial<{
    p2023codex: string;
    privacy: string;
    term: string;
    findustext: string;
  }>;

const TokenGenerationFooterexplorer: React.FC<
  TokenGenerationFooterexplorerProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
          <div className="flex sm:flex-1 sm:flex-col flex-row sm:gap-10 gap-24 items-center justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-2 items-center justify-start w-auto">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[120px] md:h-auto object-cover w-full"
                  src="images/img_image12.png"
                  alt="imageTwelve_One"
                />
              </div>
              <Text
                className="capitalize text-white-A700 text-xs tracking-[0.60px] w-auto"
                size="txtInterRegular12WhiteA700"
              >
                {props?.p2023codex}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-row gap-8 items-start justify-start w-auto">
                <Text
                  className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanSemiBold16WhiteA700"
                >
                  {props?.privacy}
                </Text>
                <Text
                  className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanSemiBold16WhiteA700"
                >
                  {props?.term}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <Text
              className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
              size="txtRalewayRomanSemiBold16WhiteA700"
            >
              {props?.findustext}
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
      </div>
    </>
  );
};

TokenGenerationFooterexplorer.defaultProps = {
  p2023codex: "© 2023 codex",
  privacy: "privacy",
  term: "term",
  findustext: "find us",
};

export default TokenGenerationFooterexplorer;
