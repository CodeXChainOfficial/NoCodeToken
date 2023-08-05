import React from "react";

import { Button, Img, Input, Text } from "components";
import Footer from "components/Footer";
import Header4 from "components/Header4";

const ForumcodexaccountsetaccountPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-center justify-start mx-auto w-full">
        <Header4 className="bg-black-900 flex md:flex-col md:gap-10 items-center justify-between px-20 md:px-5 w-full" />
        <div className="bg-black-900_01 flex flex-col items-start justify-start max-w-7xl mt-8 mx-auto p-8 md:px-5 rounded-lg w-full">
          <div className="flex flex-col gap-8 items-end justify-start w-auto sm:w-full">
            <div className="flex flex-col items-start justify-start w-[578px] sm:w-full">
              <Text
                className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                size="txtRalewayRomanSemiBold24"
              >
                account
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-end justify-end w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      profil picture
                    </Text>
                    <div className="flex flex-col h-24 items-center justify-start w-24">
                      <div className="bg-white-A700_e5 border-[3px] border-solid border-white-A700 h-24 relative rounded-[50%] w-24">
                        <Img
                          className="h-24 m-auto rounded-[50%] w-24"
                          src="images/img_image382_96x96.png"
                          alt="image382_One"
                        />
                        <Button className="absolute bg-white-A700_e5 bottom-[0] flex h-8 items-center justify-center p-2 right-[0] rounded-[50%] w-8">
                          <Img
                            src="images/img_volume_light_blue_500.svg"
                            alt="volume"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
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
                      wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
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
                  <Button className="bg-gradient  capitalize cursor-pointer font-semibold min-w-[148px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
                    save changes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-900 flex font-inter gap-8 items-center justify-center mt-[122px] px-20 md:px-5 py-4 w-full" />
      </div>
    </>
  );
};

export default ForumcodexaccountsetaccountPage;
