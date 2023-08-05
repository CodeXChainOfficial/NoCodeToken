import React from "react";

import { Button, Text } from "components";

type BlogCardProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "scale" | "tokentreasur2" | "howtointeract" | "description" | "checkdetail"
> &
  Partial<{
    scale: string;
    tokentreasur2: string;
    howtointeract: JSX.Element | string;
    description: string;
    checkdetail: string;
  }>;

const BlogCard: React.FC<BlogCardProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <div className="bg-deep_purple-A200 h-40 rounded-tl rounded-tr w-full"></div>
          <div className="flex flex-row gap-4 items-start justify-start w-full">
            <Button className="bg-orange-300 capitalize cursor-pointer font-raleway font-semibold min-w-[66px] py-1.5 rounded-lg text-center text-white-A700 text-xs tracking-[0.60px]">
              {props?.scale}
            </Button>
            <Button className="bg-deep_purple-900 capitalize cursor-pointer font-raleway font-semibold min-w-[144px] py-1.5 rounded-lg text-center text-white-A700 text-xs tracking-[0.60px]">
              {props?.tokentreasur2}
            </Button>
          </div>
          <Text
            className="capitalize leading-[160.00%] max-w-[362px] md:max-w-full text-white-A700 text-xl tracking-[1.00px]"
            size="txtRalewayRomanSemiBold20WhiteA700"
          >
            {props?.howtointeract}
          </Text>
          <Text
            className="leading-[160.00%] max-w-[362px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
            size="txtRalewayRomanMedium16"
          >
            {props?.description}
          </Text>
        </div>
        <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium font-raleway min-w-[120px] py-[7px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
          {props?.checkdetail}
        </Button>
      </div>
    </>
  );
};

BlogCard.defaultProps = {
  scale: "scale",
  tokentreasur2: "token & treasurry",
  howtointeract: (
    <>
      How to interact with external
      <br />
      contracts from your DAO
    </>
  ),
  description:
    "The smart contract composer in the Aragon App gives you the ability to interact with external contracts directly from your DAO. You can compose a series of actions that become executable if a vote passes. ",
  checkdetail: "check detail",
};

export default BlogCard;
