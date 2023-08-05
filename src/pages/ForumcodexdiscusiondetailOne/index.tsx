import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header4 from "components/Header4";

const ForumcodexdiscusiondetailOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-center justify-start mx-auto w-full">
        <Header4 className="bg-black-900 flex md:flex-col md:gap-10 items-center justify-between px-20 md:px-5 w-full" />
        <div className="flex md:flex-col flex-row gap-8 items-start justify-start max-w-[1440px] mt-8 md:px-10 px-20 sm:px-5 w-full">
          <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-[401px] sm:w-full">
            <div className="border-b border-solid border-white-A700_19 flex flex-col items-start justify-start p-2.5 w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[158px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  all mesage 7{" "}
                </Button>
                <Button className="bg-white-A700_4c capitalize cursor-pointer font-semibold min-w-[131px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  unread 2
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-end justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <List
                  className="flex flex-col gap-4 items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row items-center justify-between w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <Button className="bg-white-A700_e5 flex h-8 items-center justify-center p-0.5 rounded-[50%] w-8">
                        <Img
                          src="images/img_user_light_blue_500_32x32.svg"
                          alt="user"
                        />
                      </Button>
                      <div className="flex flex-col items-start justify-center w-auto">
                        <Text
                          className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                          size="txtRalewayRomanSemiBold20"
                        >
                          discobot
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanRegular16"
                    >
                      greatings!
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-between w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <div className="bg-white-A700_99 border border-solid border-white-A700 flex flex-col h-8 items-center justify-start rounded-[50%] w-8">
                        <Img
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          src="images/img_image382_1.png"
                          alt="image382"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center w-auto">
                        <Text
                          className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                          size="txtRalewayRomanSemiBold20"
                        >
                          thomashaye88
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanRegular16"
                    >
                      thas great!
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-between w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <div className="bg-white-A700_99 border border-solid border-white-A700 flex flex-col h-8 items-center justify-start rounded-[50%] w-8">
                        <Img
                          className="h-8 md:h-auto rounded-[50%] w-8"
                          src="images/img_image382_1.png"
                          alt="image382"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center w-auto">
                        <Text
                          className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                          size="txtRalewayRomanSemiBold20"
                        >
                          thomashaye88
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanRegular16"
                    >
                      thas great!
                    </Text>
                  </div>
                </List>
              </div>
              <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[90px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                see all
              </Button>
            </div>
          </div>
          <div className="bg-white-A700_33 flex md:flex-1 flex-col items-center justify-start pb-[140px] md:px-5 rounded-sm w-[1%] md:w-full">
            <Line className="bg-white-A700_33 h-[60px] rounded-sm w-1" />
          </div>
          <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
            <div className="bg-black-900 border-b border-solid border-white-A700_19 flex flex-row sm:gap-10 items-center justify-between sm:px-5 px-8 py-4 w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <div className="bg-white-A700_99 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_image382_48x48.png"
                    alt="image382_One"
                  />
                </div>
                <div className="flex flex-col items-start justify-center w-auto">
                  <Text
                    className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    thomashaye88
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start justify-start w-auto">
                <Text
                  className="capitalize text-green-400 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20Green400"
                >
                  online
                </Text>
                <div className="bg-green-400 h-2 rounded-[50%] w-2"></div>
              </div>
            </div>
            <div className="bg-black-900 flex flex-col gap-8 items-start justify-center sm:px-5 px-8 py-4 w-full">
              <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
                <div className="bg-white-A700_99 border border-solid border-white-A700 flex flex-col h-8 items-center justify-start rounded-[50%] w-8">
                  <Img
                    className="h-8 md:h-auto rounded-[50%] w-8"
                    src="images/img_image382_1.png"
                    alt="image382_Two"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Button className="bg-white-A700_19 cursor-pointer min-w-[119px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                      hello mate
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-center w-auto">
                    <div className="bg-white-A700_19 flex flex-col items-start justify-start px-4 py-2 rounded-[16px] w-auto">
                      <Text
                        className="text-base text-white-A700 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanRegular16WhiteA700"
                      >
                        Have you heard about Web3?
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end w-full">
                <div className="flex flex-col gap-4 items-end justify-start w-auto">
                  <Button className="bg-white-A700_19 cursor-pointer min-w-[392px] sm:min-w-full py-[11px] rounded-[16px] text-base text-center text-white-A700 tracking-[0.80px]">
                    <>Yeah, it&#39;s the next generation of the internet.</>
                  </Button>
                  <div className="bg-white-A700_4c flex flex-col items-start justify-center rounded-[16px] w-auto">
                    <div className="bg-white-A700_19 flex flex-col items-start justify-start px-4 py-2 rounded-[16px] w-auto">
                      <Text
                        className="text-base text-white-A700 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanRegular16WhiteA700"
                      >
                        What do you think about it?
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-light_blue-500 border-solid flex flex-col gap-4 items-start justify-start p-4 rounded-[16px] w-full">
              <div className="flex flex-col items-start justify-center w-auto">
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <div className="flex flex-col h-[42px] items-center justify-start w-[42px]">
                    <div className="bg-white-A700_99 border border-solid border-white-A700 flex flex-col h-[42px] items-center justify-start rounded-[50%] w-[42px]">
                      <Img
                        className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                        src="images/img_image382_42x42.png"
                        alt="image382_Three"
                      />
                    </div>
                  </div>
                  <Text
                    className="capitalize text-light_blue-500 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    me
                  </Text>
                </div>
              </div>
              <div className="bg-black-900_01 border border-solid border-white-A700_19 flex flex-col items-center justify-start px-4 py-2 rounded-[16px] w-full">
                <div className="flex flex-col items-start justify-center w-full">
                  <Text
                    className="text-base text-white-A700_99 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanMedium16WhiteA70099"
                  >
                    Your reply......
                  </Text>
                  <Img
                    className="h-8 w-full"
                    src="images/img_frame371474.svg"
                    alt="frame371474"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700_33 flex md:flex-1 flex-col items-center justify-start pb-[140px] md:px-5 rounded-sm w-[1%] md:w-full">
            <Line className="bg-white-A700_33 h-[60px] rounded-sm w-1" />
          </div>
        </div>
        <Footer className="bg-gray-900 flex font-inter gap-8 items-center justify-center mt-[185px] px-20 md:px-5 py-4 w-full" />
      </div>
    </>
  );
};

export default ForumcodexdiscusiondetailOnePage;
