import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header4 from "components/Header4";

const ForumcodexalldetailPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-start justify-start mx-auto w-full">
        <div className="flex flex-col gap-8 items-center w-full">
          <Header4 className="bg-black-900 flex md:flex-col md:gap-10 items-center justify-between px-20 md:px-5 w-full" />
          <div className="bg-black-900 flex flex-col h-20 md:h-auto items-start justify-between max-w-[1438px] md:px-10 px-20 sm:px-5 py-4 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1278px] mx-auto w-full">
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-8 items-center justify-start w-auto sm:w-full">
                <Button
                  className="bg-black-900 border border-solid border-white-A700_19 cursor-pointer flex items-center justify-center min-w-[231px] px-[31px] py-[11px] rounded-lg"
                  rightIcon={
                    <Img
                      className="h-6 mb-px ml-1"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                >
                  <div className="capitalize font-semibold sm:px-5 text-left text-white-A700_e5 text-xl tracking-[1.00px]">
                    all acategory
                  </div>
                </Button>
                <Button
                  className="bg-black-900 border border-solid border-white-A700_19 cursor-pointer flex items-center justify-center min-w-[173px] px-[31px] py-[11px] rounded-lg"
                  rightIcon={
                    <Img
                      className="h-6 mb-px ml-1"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                >
                  <div className="capitalize font-semibold sm:px-5 text-left text-white-A700_e5 text-xl tracking-[1.00px]">
                    all tags
                  </div>
                </Button>
              </div>
              <div className="flex flex-row gap-8 items-center justify-start w-auto">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Button
                    className="bg-black-900 border border-solid border-white-A700_19 cursor-pointer flex items-center justify-center min-w-[136px] px-[31px] py-[11px] rounded-lg"
                    rightIcon={
                      <Img
                        className="h-6 mt-px ml-1"
                        src="images/img_sort.svg"
                        alt="sort"
                      />
                    }
                  >
                    <div className="capitalize font-semibold sm:px-5 text-left text-white-A700_e5 text-xl tracking-[1.00px]">
                      sort{" "}
                    </div>
                  </Button>
                </div>
                <Button
                  className="bg-light_blue-500 cursor-pointer flex items-center justify-center min-w-[181px] px-4 py-[11px] rounded-lg"
                  rightIcon={
                    <Img
                      className="h-4 mb-[3px] ml-2.5"
                      src="images/img_frame_371439.svg"
                      alt="Frame 371439"
                    />
                  }
                >
                  <div className="capitalize font-semibold text-base text-left text-white-A700 tracking-[0.80px]">
                    add new topic
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-start justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 w-full">
            <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-[401px] sm:w-full">
              <div className="flex flex-col items-center justify-start py-2 w-full">
                <Text
                  className="border-b border-solid border-white-A700_4c capitalize pb-[9px] sm:pr-5 pr-[35px] pt-3.5 text-white-A700_e5 text-xl tracking-[1.00px] w-[401px]"
                  size="txtRalewayRomanSemiBold20WhiteA700e5"
                >
                  category
                </Text>
              </div>
              <div className="bg-black-900_01 border-blue-400 border-l-[10px] border-solid flex flex-col gap-4 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Button className="capitalize cursor-pointer font-semibold min-w-[124px] py-3.5 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                    Education
                  </Button>
                  <Text
                    className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20WhiteA700e5"
                  >
                    <span className="text-light_blue-500 font-raleway text-left font-semibold">
                      9.1 k
                    </span>
                    <span className="text-white-A700_e5 font-raleway text-left font-semibold">
                      / week
                    </span>
                  </Text>
                </div>
                <Text
                  className="leading-[160.00%] max-w-[337px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                  size="txtRalewayRomanRegular16"
                >
                  This category is for learning together. We invite academics,
                  researchers, and teachers to develop educational opportunities
                  for students of Aptos.
                </Text>
                <div className="flex flex-row gap-4 items-center justify-between w-full">
                  <div className="flex flex-row gap-4 items-start justify-start w-auto">
                    <Text
                      className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-700 text-xs tracking-[0.60px] w-auto"
                      size="txtRalewayRomanSemiBold12Blue700"
                    >
                      question
                    </Text>
                    <Text
                      className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                      size="txtRalewayRomanSemiBold12Blue900"
                    >
                      resource
                    </Text>
                  </div>
                  <Button className="bg-black-900_01 flex h-6 items-center justify-center p-[7px] w-6">
                    <Img src="images/img_arrowup.svg" alt="arrowup" />
                  </Button>
                </div>
              </div>
              <List
                className="flex flex-col gap-4 items-center w-full"
                orientation="vertical"
              >
                <div className="bg-black-900_01 border-l-[10px] border-orange-300 border-solid flex flex-1 flex-col gap-4 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Button className="capitalize cursor-pointer font-semibold min-w-[94px] py-3.5 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                      project
                    </Button>
                    <Text
                      className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700e5"
                    >
                      <span className="text-light_blue-500 font-raleway text-left font-semibold">
                        9.1 k
                      </span>
                      <span className="text-white-A700_e5 font-raleway text-left font-semibold">
                        / week
                      </span>
                    </Text>
                  </div>
                  <Text
                    className="leading-[160.00%] max-w-[337px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                    size="txtRalewayRomanRegular16"
                  >
                    Discover the Aptos ecosystem! Use this category to introduce
                    projects, connect with our community, share updates, ask
                    questions, and openly discuss feedback.
                  </Text>
                  <Img
                    className="h-6 w-full"
                    src="images/img_arrowup_black_900_01.svg"
                    alt="arrowup"
                  />
                </div>
                <div className="bg-black-900_01 border-l-[10px] border-pink-300 border-solid flex flex-1 flex-col gap-4 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Button className="capitalize cursor-pointer font-semibold min-w-[137px] py-3.5 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                      suggestion
                    </Button>
                    <Text
                      className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700e5"
                    >
                      <span className="text-light_blue-500 font-raleway text-left font-semibold">
                        9.1 k
                      </span>
                      <span className="text-white-A700_e5 font-raleway text-left font-semibold">
                        / week
                      </span>
                    </Text>
                  </div>
                  <Text
                    className="leading-[160.00%] max-w-[337px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                    size="txtRalewayRomanRegular16"
                  >
                    This category is about coordination. Community feedback is
                    crucial for ecosystem success, and we strive to always be
                    improving our communication systems.
                  </Text>
                  <Img
                    className="h-6 w-full"
                    src="images/img_arrowup_black_900_01.svg"
                    alt="arrowup"
                  />
                </div>
                <div className="bg-black-900_01 border-deep_purple-A200 border-l-[10px] border-solid flex flex-1 flex-col gap-4 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full">
                  <div className="flex flex-row gap-4 items-center justify-between w-full">
                    <Button className="capitalize cursor-pointer font-semibold min-w-[195px] py-3.5 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                      node operations
                    </Button>
                    <Text
                      className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700e5"
                    >
                      <span className="text-light_blue-500 font-raleway text-left font-semibold">
                        9.1 k
                      </span>
                      <span className="text-white-A700_e5 font-raleway text-left font-semibold">
                        / week
                      </span>
                    </Text>
                  </div>
                  <Text
                    className="leading-[160.00%] max-w-[337px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                    size="txtRalewayRomanRegular16"
                  >
                    This category is about infrastructure. Here is a list of
                    Aptos Incentivized Testnet 2 (AIT-2) validator profiles,
                    where you may review details, ask questions, and further
                    discuss relevant issues.
                  </Text>
                  <div className="flex flex-row gap-4 items-center justify-between w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-deep_purple-900 text-xs tracking-[0.60px] w-auto"
                        size="txtRalewayRomanSemiBold12Deeppurple900"
                      >
                        AIT-2 Community Voting
                      </Text>
                    </div>
                    <Button className="bg-black-900_01 flex h-6 items-center justify-center p-[7px] w-6">
                      <Img src="images/img_arrowup.svg" alt="arrowup" />
                    </Button>
                  </div>
                </div>
                <div className="bg-black-900_01 border-green-400 border-l-[10px] border-solid flex flex-1 flex-col gap-4 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Button className="capitalize cursor-pointer font-semibold min-w-[159px] py-3.5 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                      development
                    </Button>
                    <Text
                      className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700e5"
                    >
                      <span className="text-light_blue-500 font-raleway text-left font-semibold">
                        9.1 k
                      </span>
                      <span className="text-white-A700_e5 font-raleway text-left font-semibold">
                        / week
                      </span>
                    </Text>
                  </div>
                  <Text
                    className="leading-[160.00%] max-w-[337px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                    size="txtRalewayRomanRegular16"
                  >
                    This category is about building. Discuss the Move language,
                    ask technical questions, explore the Aptos framework, and
                    find resources.
                  </Text>
                  <div className="flex flex-row gap-4 items-center justify-between w-full">
                    <div className="flex flex-row gap-4 items-start justify-start w-auto">
                      <Text
                        className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-green-300 text-xs tracking-[0.60px] w-auto"
                        size="txtRalewayRomanSemiBold12Green300"
                      >
                        wallet
                      </Text>
                      <Text
                        className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-gray-500_01 text-xs tracking-[0.60px] w-auto"
                        size="txtRalewayRomanSemiBold12Gray50001"
                      >
                        move
                      </Text>
                    </div>
                    <Button className="bg-black-900_01 flex h-6 items-center justify-center p-[7px] w-6">
                      <Img src="images/img_arrowup.svg" alt="arrowup" />
                    </Button>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
              <div className="bg-black-900 border-b border-solid border-white-A700_4c flex flex-row sm:gap-10 items-start justify-between py-2 w-full">
                <Text
                  className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                  size="txtRalewayRomanSemiBold20WhiteA700e5"
                >
                  Topic
                </Text>
                <div className="flex flex-row gap-12 items-start justify-start w-[270px]">
                  <div className="flex flex-col items-start justify-start px-4 w-auto">
                    <Text
                      className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700e5"
                    >
                      replies
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start px-4 w-auto">
                    <Text
                      className="capitalize text-white-A700_e5 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700e5"
                    >
                      activity
                    </Text>
                  </div>
                </div>
              </div>
              <List
                className="flex flex-col gap-4 items-center w-full"
                orientation="vertical"
              >
                <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-12">
                      <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image382.png"
                          alt="image382"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Curve’s New crvUSD Stablecoin Deployed To Ethereum With
                        $22 Million Minted
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue400"
                        >
                          Education
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue900"
                        >
                          resource
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          community
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          learning
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          nodes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16Lightblue500"
                  >
                    34k
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16WhiteA700e5"
                  >
                    8 min
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-12">
                      <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image382.png"
                          alt="image382"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Curve’s New crvUSD Stablecoin Deployed To Ethereum With
                        $22 Million Minted
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue400"
                        >
                          Education
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue900"
                        >
                          resource
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          community
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          learning
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          nodes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16Lightblue500"
                  >
                    34k
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16WhiteA700e5"
                  >
                    8 min
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-12">
                      <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image382.png"
                          alt="image382"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Curve’s New crvUSD Stablecoin Deployed To Ethereum With
                        $22 Million Minted
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue400"
                        >
                          Education
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue900"
                        >
                          resource
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          community
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          learning
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          nodes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16Lightblue500"
                  >
                    34k
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16WhiteA700e5"
                  >
                    8 min
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-12">
                      <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image382.png"
                          alt="image382"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Curve’s New crvUSD Stablecoin Deployed To Ethereum With
                        $22 Million Minted
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue400"
                        >
                          Education
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue900"
                        >
                          resource
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          community
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          learning
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          nodes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16Lightblue500"
                  >
                    34k
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16WhiteA700e5"
                  >
                    8 min
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-12">
                      <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image382.png"
                          alt="image382"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Curve’s New crvUSD Stablecoin Deployed To Ethereum With
                        $22 Million Minted
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue400"
                        >
                          Education
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue900"
                        >
                          resource
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          community
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          learning
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          nodes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16Lightblue500"
                  >
                    34k
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16WhiteA700e5"
                  >
                    8 min
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-12">
                      <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image382.png"
                          alt="image382"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Curve’s New crvUSD Stablecoin Deployed To Ethereum With
                        $22 Million Minted
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue400"
                        >
                          Education
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue900"
                        >
                          resource
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          community
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          learning
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          nodes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16Lightblue500"
                  >
                    34k
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16WhiteA700e5"
                  >
                    8 min
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-12">
                      <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image382.png"
                          alt="image382"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Curve’s New crvUSD Stablecoin Deployed To Ethereum With
                        $22 Million Minted
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue400"
                        >
                          Education
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue900"
                        >
                          resource
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          community
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          learning
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          nodes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16Lightblue500"
                  >
                    34k
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16WhiteA700e5"
                  >
                    8 min
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-12">
                      <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image382.png"
                          alt="image382"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Curve’s New crvUSD Stablecoin Deployed To Ethereum With
                        $22 Million Minted
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue400"
                        >
                          Education
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue900"
                        >
                          resource
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          community
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          learning
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          nodes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16Lightblue500"
                  >
                    34k
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16WhiteA700e5"
                  >
                    8 min
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-12">
                      <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image382.png"
                          alt="image382"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Curve’s New crvUSD Stablecoin Deployed To Ethereum With
                        $22 Million Minted
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue400"
                        >
                          Education
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue900"
                        >
                          resource
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          community
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          learning
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          nodes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16Lightblue500"
                  >
                    34k
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16WhiteA700e5"
                  >
                    8 min
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-12">
                      <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image382.png"
                          alt="image382"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Curve’s New crvUSD Stablecoin Deployed To Ethereum With
                        $22 Million Minted
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue400"
                        >
                          Education
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue900"
                        >
                          resource
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          community
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          learning
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          nodes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16Lightblue500"
                  >
                    34k
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16WhiteA700e5"
                  >
                    8 min
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-12">
                      <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image382.png"
                          alt="image382"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Curve’s New crvUSD Stablecoin Deployed To Ethereum With
                        $22 Million Minted
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue400"
                        >
                          Education
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue900"
                        >
                          resource
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          community
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          learning
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          nodes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16Lightblue500"
                  >
                    34k
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16WhiteA700e5"
                  >
                    8 min
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-12">
                      <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image382.png"
                          alt="image382"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Curve’s New crvUSD Stablecoin Deployed To Ethereum With
                        $22 Million Minted
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue400"
                        >
                          Education
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue900"
                        >
                          resource
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          community
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          learning
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          nodes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16Lightblue500"
                  >
                    34k
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16WhiteA700e5"
                  >
                    8 min
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-12">
                      <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image382.png"
                          alt="image382"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Curve’s New crvUSD Stablecoin Deployed To Ethereum With
                        $22 Million Minted
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue400"
                        >
                          Education
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue900"
                        >
                          resource
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          community
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          learning
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          nodes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16Lightblue500"
                  >
                    34k
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16WhiteA700e5"
                  >
                    8 min
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-12">
                      <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image382.png"
                          alt="image382"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Curve’s New crvUSD Stablecoin Deployed To Ethereum With
                        $22 Million Minted
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue400"
                        >
                          Education
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue900"
                        >
                          resource
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          community
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          learning
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          nodes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16Lightblue500"
                  >
                    34k
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16WhiteA700e5"
                  >
                    8 min
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-12">
                      <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image382.png"
                          alt="image382"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Curve’s New crvUSD Stablecoin Deployed To Ethereum With
                        $22 Million Minted
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue400"
                        >
                          Education
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue900"
                        >
                          resource
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          community
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          learning
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          nodes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16Lightblue500"
                  >
                    34k
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16WhiteA700e5"
                  >
                    8 min
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-12">
                      <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image382.png"
                          alt="image382"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Curve’s New crvUSD Stablecoin Deployed To Ethereum With
                        $22 Million Minted
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue400"
                        >
                          Education
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue900"
                        >
                          resource
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          community
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          learning
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          nodes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16Lightblue500"
                  >
                    34k
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16WhiteA700e5"
                  >
                    8 min
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-12">
                      <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image382.png"
                          alt="image382"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Curve’s New crvUSD Stablecoin Deployed To Ethereum With
                        $22 Million Minted
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue400"
                        >
                          Education
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue900"
                        >
                          resource
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          community
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          learning
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          nodes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16Lightblue500"
                  >
                    34k
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16WhiteA700e5"
                  >
                    8 min
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-12">
                      <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image382.png"
                          alt="image382"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Curve’s New crvUSD Stablecoin Deployed To Ethereum With
                        $22 Million Minted
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue400"
                        >
                          Education
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue900"
                        >
                          resource
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          community
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          learning
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          nodes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16Lightblue500"
                  >
                    34k
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16WhiteA700e5"
                  >
                    8 min
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-between px-4 py-2 rounded-lg w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row font-raleway gap-8 items-center justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-12">
                      <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Img
                          className="h-12 md:h-auto rounded-[50%] w-12"
                          src="images/img_image382.png"
                          alt="image382"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700e5"
                      >
                        Curve’s New crvUSD Stablecoin Deployed To Ethereum With
                        $22 Million Minted
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-400 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue400"
                        >
                          Education
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-blue-900 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12Blue900"
                        >
                          resource
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          community
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center pb-1 pt-[7px] px-1 rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          learning
                        </Text>
                        <Text
                          className="bg-black-900_01 capitalize justify-center px-1 py-[5px] rounded text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA700e5"
                        >
                          nodes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="capitalize text-base text-light_blue-500 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16Lightblue500"
                  >
                    34k
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtInterSemiBold16WhiteA700e5"
                  >
                    8 min
                  </Text>
                </div>
              </List>
            </div>
            <div className="bg-white-A700_33 flex md:flex-1 flex-col items-center justify-start pb-[140px] md:px-5 rounded-sm w-[1%] md:w-full">
              <Line className="bg-white-A700_33 h-[60px] rounded-sm w-1" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end mt-12 md:px-10 sm:px-5 px-[90px] w-full">
          <Button className="bg-deep_purple-A200 capitalize cursor-pointer font-semibold min-w-[105px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
            see less
          </Button>
        </div>
        <div className="flex flex-col font-inter items-center mt-[51px] w-full">
          <Footer className="bg-gray-900 flex gap-8 items-center justify-center px-20 md:px-5 py-4 w-full" />
        </div>
      </div>
    </>
  );
};

export default ForumcodexalldetailPage;
