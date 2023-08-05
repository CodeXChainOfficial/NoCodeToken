import React from "react";

import { Text } from "components";

type CommunitySignInCardbottomProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "discussionforum" | "discussiontext" | "getinvolvedtext"
> &
  Partial<{
    discussionforum: string;
    discussiontext: string;
    getinvolvedtext: string;
  }>;

const CommunitySignInCardbottom: React.FC<CommunitySignInCardbottomProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[1.80px] w-auto"
          size="txtRalewayRomanSemiBold36"
        >
          {props?.discussionforum}
        </Text>
        <Text
          className="leading-[160.00%] max-w-[326px] md:max-w-full text-base text-white-A700 tracking-[0.80px]"
          size="txtRalewayRomanMedium16WhiteA700"
        >
          {props?.discussiontext}
        </Text>
        <Text
          className="capitalize text-light_blue-A100 text-xl tracking-[1.00px] w-auto"
          size="txtRalewayRomanSemiBold20LightblueA100"
        >
          {props?.getinvolvedtext}
        </Text>
      </div>
    </>
  );
};

CommunitySignInCardbottom.defaultProps = {
  discussionforum: "Documentation",
  discussiontext:
    "Guides to develop applications for the Codex blockchain, run nodes, and get involved in the Codex ecosystem.",
  getinvolvedtext: "get started",
};

export default CommunitySignInCardbottom;
