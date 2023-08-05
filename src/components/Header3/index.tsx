import React from "react";

import { Button, Img, Text } from "components";

type Header3Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header3: React.FC<Header3Props> = (props) => {
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
          <Button className="bg-gradient  capitalize cursor-pointer font-raleway font-semibold min-w-[88px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
            sign in
          </Button>
        </div>
      </header>
    </>
  );
};

Header3.defaultProps = {};

export default Header3;
