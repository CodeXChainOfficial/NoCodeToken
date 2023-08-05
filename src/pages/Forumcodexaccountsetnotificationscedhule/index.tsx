import React from "react";

import { Button, CheckBox, Img, Input, Text } from "components";
import Footer from "components/Footer";
import Header4 from "components/Header4";

const ForumcodexaccountsetnotificationscedhulePage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-center justify-start mx-auto w-full">
        <Header4 className="bg-black-900 flex md:flex-col md:gap-10 items-center justify-between px-20 md:px-5 w-full" />
        <div className="bg-black-900_01 flex flex-col items-start justify-start max-w-7xl mt-8 mx-auto p-8 md:px-5 rounded-lg w-full">
          <div className="flex flex-col gap-8 items-end justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-[578px] sm:w-full">
              <Text
                className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                size="txtRalewayRomanSemiBold24"
              >
                notification
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      Notify when liked
                    </Text>
                    <Input
                      name="frame370927"
                      placeholder="always"
                      className="capitalize font-semibold p-0 placeholder:text-white-A700 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                      wrapClassName="border border-solid border-white-A700_19 flex px-4 py-2 rounded-lg w-full"
                      suffix={
                        <Img
                          className="mt-auto mb-px h-6 ml-[35px]"
                          src="images/img_bxsuparrow.svg"
                          alt="bxs:up-arrow"
                        />
                      }
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      Live Notifications
                    </Text>
                    <Input
                      name="buttonsmallTwo"
                      placeholder="enable notification"
                      className="capitalize font-semibold p-0 placeholder:text-white-A700 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                      wrapClassName="bg-light_blue-500 flex px-4 py-[9px] rounded-lg w-[39%]"
                      prefix={
                        <Img
                          className="h-6 mr-2.5 my-auto"
                          src="images/img_videocamera.svg"
                          alt="video_camera"
                        />
                      }
                    ></Input>
                    <div className="bg-orange-300_7f flex flex-col font-inter items-start justify-start p-2 rounded-lg w-full">
                      <Text
                        className="capitalize leading-[160.00%] max-w-[562px] md:max-w-full text-white-A700 text-xs tracking-[0.60px]"
                        size="txtInterRegular12WhiteA700"
                      >
                        Note: You have to change this setting on every browser
                        you use. All notifications will be disabled if you pause
                        notifications from user menu, regardless of this setting
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      Notification Schedule
                    </Text>
                    <CheckBox
                      className="capitalize font-semibold sm:pr-5 text-left text-white-A700_99 text-xs tracking-[0.60px]"
                      inputClassName="border border-light_blue-500 border-solid h-4 mr-[5px] rounded w-4"
                      name="enablecustomnot_One"
                      id="enablecustomnot_One"
                      label="Enable custom notification schedule"
                    ></CheckBox>
                  </div>
                </div>
              </div>
            </div>
            <Button className="bg-gradient  capitalize cursor-pointer font-semibold min-w-[148px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
              save changes
            </Button>
          </div>
        </div>
        <Footer className="bg-gray-900 flex font-inter gap-8 items-center justify-center mt-[202px] px-20 md:px-5 py-4 w-full" />
      </div>
    </>
  );
};

export default ForumcodexaccountsetnotificationscedhulePage;
