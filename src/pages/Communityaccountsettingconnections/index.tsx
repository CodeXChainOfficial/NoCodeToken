import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, List, Text } from "components";
import CreateTokenHomepageFooterexplorer from "components/CreateTokenHomepageFooterexplorer";
import Header3 from "components/Header3";

const CommunityaccountsettingconnectionsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-start justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header3 className="bg-black-900 flex sm:flex-col md:gap-10 items-center justify-between px-20 md:px-5 shadow-bs1 w-full" />
        </div>
        <Button className="bg-black-900 capitalize cursor-pointer font-semibold min-w-[366px] mt-8 py-[5px] text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 tracking-[2.40px]">
          Account{" "}
        </Button>
        <div className="h-[446px] sm:h-[478px] md:h-[711px] ml-20 md:ml-[0] mt-8 md:px-5 relative w-[66%] md:w-full">
          <Img
            className="h-px ml-auto mr-[322px] mt-[25px] w-px"
            src="images/img_vector.svg"
            alt="vector"
          />
          <div className="absolute flex md:flex-col flex-row gap-5 h-full inset-[0] items-start justify-between m-auto w-auto">
            <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-[305px]">
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[241px] pl-4 pr-[35px] py-[9px]"
                onClick={() => navigate("/communityaccountsettingaccount")}
                leftIcon={
                  <Img
                    className="h-6 mr-2"
                    src="images/img_mdiaccountbox_white_a700.svg"
                    alt="mdi:account-box"
                  />
                }
              >
                <div className="capitalize font-semibold sm:pr-5 text-base text-left text-white-A700_99 tracking-[0.80px]">
                  profil
                </div>
              </Button>
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
              <CheckBox
                className="capitalize font-semibold sm:pr-5 text-base text-left text-light_blue-500 tracking-[0.80px]"
                inputClassName="mr-[5px]"
                name="connections"
                id="connections"
                label="connections"
              ></CheckBox>
            </div>
            <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-[621px] md:w-full">
              <Text
                className="capitalize text-2xl md:text-[22px] text-light_blue-500 sm:text-xl tracking-[1.20px] w-auto"
                size="txtRalewayRomanSemiBold24Lightblue500"
              >
                connection
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-8 items-start justify-start w-full">
                  <div className="bg-black-900_01 flex flex-row sm:gap-10 items-center justify-between px-4 py-2 rounded-lg w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-8 w-8"
                        src="images/img_user_white_a700.svg"
                        alt="user"
                      />
                      <Text
                        className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700"
                      >
                        discord{" "}
                      </Text>
                      <Text
                        className="capitalize text-base text-deep_purple-A200 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanMedium16DeeppurpleA200"
                      >
                        jilly77#4374
                      </Text>
                    </div>
                    <Button
                      className="common-pointer border border-green-400 border-solid capitalize cursor-pointer font-semibold min-w-[101px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
                      onClick={() =>
                        navigate("/myaccountrewardtransactiondefault")
                      }
                    >
                      connect
                    </Button>
                  </div>
                  <List
                    className="flex flex-col gap-8 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="bg-black-900_01 flex flex-1 flex-row sm:gap-10 items-center justify-between px-4 py-2 rounded-lg w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-8 w-8"
                          src="images/img_user_white_a700.svg"
                          alt="user"
                        />
                        <Text
                          className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16WhiteA700"
                        >
                          discord
                        </Text>
                      </div>
                      <Button
                        className="common-pointer bg-green-400 capitalize cursor-pointer font-semibold min-w-[101px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
                        onClick={() =>
                          navigate("/myaccountrewardtransactiondefault")
                        }
                      >
                        connect
                      </Button>
                    </div>
                    <div className="bg-black-900_01 flex flex-1 flex-row sm:gap-10 items-center justify-between px-4 py-2 rounded-lg w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-8 w-8"
                          src="images/img_flatcoloriconsgoogle.svg"
                          alt="flatcoloriconsg"
                        />
                        <Text
                          className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16WhiteA70099"
                        >
                          google
                        </Text>
                      </div>
                      <Button
                        className="common-pointer bg-green-400 capitalize cursor-pointer font-semibold min-w-[101px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
                        onClick={() =>
                          navigate("/myaccountrewardtransactiondefault")
                        }
                      >
                        connect
                      </Button>
                    </div>
                    <div className="bg-black-900_01 flex flex-1 flex-row sm:gap-10 items-center justify-between px-4 py-2 rounded-lg w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-8 w-8"
                          src="images/img_rigithubfill.svg"
                          alt="rigithubfill"
                        />
                        <Text
                          className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16WhiteA700"
                        >
                          github
                        </Text>
                      </div>
                      <Button
                        className="common-pointer bg-green-400 capitalize cursor-pointer font-semibold min-w-[101px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
                        onClick={() =>
                          navigate("/myaccountrewardtransactiondefault")
                        }
                      >
                        connect
                      </Button>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-inter md:gap-10 gap-[1390px] items-center mt-[91px] w-full">
          <div className="bg-gray-900 flex flex-col items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-12 w-full">
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
                    <Text size="txtRalewayRomanSemiBold16WhiteA700">
                      privacy
                    </Text>
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
          <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-col gap-8 items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-4 w-full" />
        </div>
      </div>
    </>
  );
};

export default CommunityaccountsettingconnectionsPage;
