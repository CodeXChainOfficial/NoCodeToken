import React from "react";

import { Button, Img, Text } from "components";

type Header2Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header2: React.FC<Header2Props> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col items-center justify-start py-2 w-[10%] md:w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Img
              className="h-16 md:h-auto object-cover w-full"
              src="images/img_image12.png"
              alt="imageTwelve"
            />
          </div>
        </div>
        <div className="flex flex-row gap-12 items-center justify-start w-auto sm:w-full">
          <ul className="flex flex-row gap-8 sm:hidden items-start justify-start w-auto common-row-list">
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
                className="capitalize text-base hover:text-white-A700 text-white-A700_87 tracking-[0.80px]"
                size="txtRalewayRomanSemiBold16WhiteA70087"
              >
                product
              </Text>
            </li>
            <li>
              <Text
                className="capitalize text-base hover:text-white-A700 text-white-A700_87 tracking-[0.80px]"
                size="txtRalewayRomanSemiBold16WhiteA70087"
              >
                About us
              </Text>
            </li>
          </ul>
          <Button className="bg-gradient  capitalize cursor-pointer font-raleway font-semibold min-w-[161px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
            build on Codex{" "}
          </Button>
        </div>
        <div className="bg-black-900 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1440px] md:px-10 px-20 sm:px-5 shadow-bs1 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start py-2 w-[10%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Img
                className="h-16 md:h-auto object-cover w-full"
                src="images/img_image12.png"
                alt="imageTwelve_One"
              />
            </div>
          </div>
          <div className="flex sm:flex-1 sm:flex-col flex-row gap-12 items-center justify-start w-auto sm:w-full">
            <ul className="flex flex-row gap-8 items-start justify-start w-auto">
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
                  className="capitalize text-base text-white-A700_87 tracking-[0.80px]"
                  size="txtRalewayRomanSemiBold16WhiteA70087"
                >
                  product
                </Text>
              </li>
              <li>
                <Text
                  className="capitalize text-base text-white-A700_87 tracking-[0.80px]"
                  size="txtRalewayRomanSemiBold16WhiteA70087"
                >
                  About us
                </Text>
              </li>
            </ul>
            <Button className="bg-gradient  capitalize cursor-pointer font-raleway font-semibold min-w-[88px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
              sign in
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

Header2.defaultProps = {};

export default Header2;
