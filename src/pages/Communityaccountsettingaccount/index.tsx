import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import CreateTokenHomepageFooterexplorer from "components/CreateTokenHomepageFooterexplorer";
import Header3 from "components/Header3";

const CommunityaccountsettingaccountPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-center justify-end mx-auto w-full">
        <Header3 className="bg-black-900 flex sm:flex-col md:gap-10 items-center justify-between px-20 md:px-5 shadow-bs1 w-full" />
        <div className="flex flex-col mt-8 md:px-5 relative w-full">
          <div className="bg-black-900 flex flex-col gap-8 items-start justify-start mx-auto w-auto md:w-full">
            <div className="flex flex-col items-start justify-start md:px-10 px-20 sm:px-5 w-auto">
              <Text
                className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px] w-auto"
                size="txtRalewayRomanSemiBold48"
              >
                Account{" "}
              </Text>
            </div>
            <div className="h-[94px] relative w-full">
              <Text
                className="capitalize m-auto md:text-5xl text-[80px] text-black-900 tracking-[4.00px] w-auto"
                size="txtRalewayRomanSemiBold80"
              >
                forum/ codex/account/ set notification scedhule
              </Text>
              <Img
                className="absolute h-px inset-x-[0] mx-auto top-[10%] w-px"
                src="images/img_vector.svg"
                alt="vector"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-5 items-start justify-start ml-20 mt-[-128px] w-auto z-[1]">
            <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-[305px]">
              <div className="flex flex-row gap-2 items-end justify-start px-4 py-2 w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_mdiaccountbox.svg"
                  alt="mdiaccountbox"
                />
                <Text
                  className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanSemiBold16Lightblue500"
                >
                  profil
                </Text>
              </div>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[241px] pl-4 pr-[35px] py-[9px]"
                onClick={() => navigate("/communityaccountsettingnotif")}
                leftIcon={
                  <div className="h-6 mr-2 w-6 rounded">
                    <Img
                      className="h-6 rounded"
                      src="images/img_iconamoonnotificationfill.svg"
                      alt="iconamoon:notification-fill"
                    />
                  </div>
                }
              >
                <div className="capitalize font-semibold sm:pr-5 text-base text-left text-white-A700_99 tracking-[0.80px]">
                  notifications
                </div>
              </Button>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[241px] pl-4 pr-[35px] py-[9px]"
                onClick={() => navigate("/communityaccountsettingconnections")}
                leftIcon={
                  <Img
                    className="h-6 mr-2"
                    src="images/img_frame_371392.svg"
                    alt="Frame 371392"
                  />
                }
              >
                <div className="capitalize font-semibold sm:pr-5 text-base text-left text-white-A700_99 tracking-[0.80px]">
                  connections
                </div>
              </Button>
            </div>
            <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-[621px] md:w-full">
              <Text
                className="capitalize text-2xl md:text-[22px] text-light_blue-500 sm:text-xl tracking-[1.20px] w-auto"
                size="txtRalewayRomanSemiBold24Lightblue500"
              >
                profil
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-end justify-end w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        username
                      </Text>
                      <Input
                        name="inputfieldtext"
                        placeholder="jilly77"
                        className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                        wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-[99%]"
                      ></Input>
                      <Text
                        className="capitalize leading-[160.00%] text-white-A700_99 text-xs tracking-[0.60px]"
                        size="txtRalewayRomanRegular12WhiteA70099"
                      >
                        <>
                          Allowed Characters: a-zA-Z0-9,- <br />
                          Must begin and end alphanumerically
                          <br /> May not have two consecutive_or-
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        email
                      </Text>
                      <Input
                        name="email_One"
                        placeholder="jilly77@gmail.com"
                        className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                        wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                        type="email"
                      ></Input>
                    </div>
                    <Button className="bg-gradient  capitalize cursor-pointer font-semibold min-w-[93px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
                      update
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 flex flex-col font-inter items-center justify-start max-w-[1440px] mt-[104px] md:px-10 px-20 sm:px-5 py-12 w-full">
          <div className="flex md:flex-col flex-row gap-8 items-start justify-between max-w-7xl mx-auto w-full">
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
                © 2023 codex
              </Text>
            </div>
            <div className="flex flex-row font-raleway gap-12 items-center justify-start w-auto">
              <div className="flex flex-col gap-8 items-start justify-start w-auto">
                <Text
                  className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanSemiBold16WhiteA700"
                >
                  community
                </Text>
                <Text
                  className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanSemiBold16WhiteA700"
                >
                  Developers
                </Text>
                <Text
                  className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanSemiBold16WhiteA700"
                >
                  Grants
                </Text>
                <Text
                  className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanSemiBold16WhiteA700"
                >
                  About us
                </Text>
              </div>
              <div className="flex flex-col gap-8 items-start justify-start w-auto">
                <Text
                  className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanSemiBold16WhiteA700"
                >
                  whitepaper
                </Text>
                <Text
                  className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanSemiBold16WhiteA700"
                >
                  brand
                </Text>
                <a
                  href="javascript:"
                  className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                >
                  <Text size="txtRalewayRomanSemiBold16WhiteA700">privacy</Text>
                </a>
                <Text
                  className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanSemiBold16WhiteA700"
                >
                  terms
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-raleway gap-4 items-start justify-start w-auto">
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
        </div>
        <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-col font-inter gap-8 items-center justify-start max-w-[1440px] mt-[1390px] md:px-10 px-20 sm:px-5 py-4 w-full" />
      </div>
    </>
  );
};

export default CommunityaccountsettingaccountPage;
