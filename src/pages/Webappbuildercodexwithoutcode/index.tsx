import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import CreateTokenHomepageFooterexplorer from "components/CreateTokenHomepageFooterexplorer";

const WebappbuildercodexwithoutcodePage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-center justify-end mx-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[1386px] items-center justify-end w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <header className="flex flex-col items-center justify-center md:px-5 w-full">
              <div className="bg-black-900_01 border-b border-black-900 border-solid flex flex-1 flex-col items-center justify-start max-w-[1440px] px-10 sm:px-5 py-2 w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto">
                  <Button className="bg-black-900_01 capitalize cursor-pointer font-semibold min-w-[62px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    file
                  </Button>
                  <Button className="bg-black-900_01 capitalize cursor-pointer font-semibold min-w-[64px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    edit
                  </Button>
                  <Button className="bg-black-900_01 capitalize cursor-pointer font-semibold min-w-[72px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    view
                  </Button>
                  <Button className="bg-black-900_01 capitalize cursor-pointer font-semibold min-w-[98px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    arrange
                  </Button>
                  <Button className="bg-black-900_01 capitalize cursor-pointer font-semibold min-w-[83px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    extras
                  </Button>
                  <Button className="bg-black-900_01 capitalize cursor-pointer font-semibold min-w-[71px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    help
                  </Button>
                </div>
              </div>
              <div className="bg-black-900_01 border-b border-solid border-white-A700_19 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1440px] px-10 sm:px-5 py-4 w-full">
                <Img
                  className="h-8 w-[735px]"
                  src="images/img_frame371519.svg"
                  alt="frame371519"
                />
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                  <Button
                    className="bg-light_blue-500 cursor-pointer flex items-center justify-center min-w-[162px] px-4 py-[9px] rounded-lg"
                    leftIcon={
                      <Img
                        className="h-6 mr-2.5"
                        src="images/img_icroundupload.svg"
                        alt="ic:round-upload"
                      />
                    }
                  >
                    <div className="capitalize font-semibold text-base text-left text-white-A700 tracking-[0.80px]">
                      upload file
                    </div>
                  </Button>
                  <Button
                    className="bg-green-400 cursor-pointer flex items-center justify-center min-w-[152px] px-4 py-[9px] rounded-lg"
                    leftIcon={
                      <Img
                        className="h-6 mr-2.5"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    }
                  >
                    <div className="capitalize font-semibold text-base text-left text-white-A700 tracking-[0.80px]">
                      save draft
                    </div>
                  </Button>
                  <Button
                    className="bg-deep_purple-A200 cursor-pointer flex items-center justify-center min-w-[124px] px-4 py-2 rounded-lg"
                    leftIcon={
                      <Img
                        className="h-6 mb-px mr-2.5"
                        src="images/img_makirocket.svg"
                        alt="maki:rocket"
                      />
                    }
                  >
                    <div className="capitalize font-semibold text-base text-left text-white-A700 tracking-[0.80px]">
                      deploy
                    </div>
                  </Button>
                </div>
              </div>
            </header>
            <div className="flex md:flex-col flex-row gap-[17px] items-start justify-between w-full">
              <div className="bg-black-900_01 flex flex-row gap-4 items-start justify-start mb-[100px] px-10 md:px-5 py-8 w-[318px]">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <div className="border-b border-solid border-white-A700_19 flex flex-col gap-4 items-start justify-center w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-full">
                      <Button className="bg-white-A700_19 flex h-8 items-center justify-center p-2 rounded-[50%] w-8">
                        <Img
                          className="h-4"
                          src="images/img_search_white_a700_32x32.svg"
                          alt="search"
                        />
                      </Button>
                      <Button className="bg-black-900_01 capitalize cursor-pointer font-semibold min-w-[86px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                        layers
                      </Button>
                    </div>
                    <div className="flex flex-col font-inter items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start px-4 py-2 w-auto">
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <Text
                            className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                            size="txtInterSemiBold12"
                          >
                            layer 1
                          </Text>
                          <Img
                            className="h-4 w-4"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Input
                    name="buttonsmallThirteen"
                    placeholder="existing template"
                    className="capitalize font-medium p-0 placeholder:text-light_blue-500 text-base text-left text-light_blue-500 tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border-b border-solid border-white-A700_19 flex pb-[9px] pt-[13px] px-4 w-full"
                    suffix={
                      <Img
                        className="mt-auto mb-[3px] h-4 ml-6"
                        src="images/img_play.svg"
                        alt="play"
                      />
                    }
                  ></Input>
                  <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start w-full">
                    <div className="bg-black-900_01 border-b border-solid border-white-A700_19 flex flex-col items-start justify-start px-4 py-2 w-full">
                      <Text
                        className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700"
                      >
                        strachpad
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Input
                        name="buttonsmallFive"
                        placeholder="general"
                        className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                        wrapClassName="bg-black-900_01 border-b border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] w-full"
                      ></Input>
                    </div>
                    <Input
                      name="buttonsmallSix"
                      placeholder="advanced"
                      className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                      wrapClassName="bg-black-900_01 border-b border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] w-full"
                    ></Input>
                    <Input
                      name="buttonsmallSeven"
                      placeholder="basic"
                      className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                      wrapClassName="bg-black-900_01 border-b border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] w-full"
                    ></Input>
                    <Input
                      name="buttonsmallEight"
                      placeholder="arrows"
                      className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                      wrapClassName="bg-black-900_01 border-b border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] w-full"
                    ></Input>
                    <Input
                      name="buttonsmallNine"
                      placeholder="flowchart"
                      className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                      wrapClassName="bg-black-900_01 border-b border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] w-full"
                    ></Input>
                    <Input
                      name="buttonsmallTen"
                      placeholder="entity relations"
                      className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                      wrapClassName="bg-black-900_01 border-b border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] w-full"
                    ></Input>
                    <Input
                      name="buttonsmallEleven"
                      placeholder="UML"
                      className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                      wrapClassName="bg-black-900_01 border-b border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] w-full"
                    ></Input>
                    <div className="bg-orange-300 border-b border-solid border-white-A700_19 flex flex-col items-center justify-center px-4 py-2 rounded-lg w-full">
                      <Text
                        className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700"
                      >
                        more shapes
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700_33 flex flex-col items-center justify-start pb-5 rounded-sm w-[2%]">
                  <Line className="bg-white-A700_33 h-[60px] rounded-sm w-1" />
                </div>
              </div>
              <div className="h-[837px] sm:h-[881px] md:px-5 relative w-[77%] md:w-full">
                <Img
                  className="absolute h-[600px] left-[0] top-[5%]"
                  src="images/img_frame371560.svg"
                  alt="frame371560"
                />
                <div className="absolute flex sm:flex-col flex-row sm:gap-5 h-full inset-y-[0] items-start justify-evenly my-auto right-[0] w-auto">
                  <Img
                    className="h-6 rounded-tl-[50%] rounded-tr-[50%] w-6"
                    src="images/img_oouinextltr.svg"
                    alt="oouinextltr"
                  />
                  <div className="bg-black-900 flex flex-col items-start justify-start pr-10 sm:pr-5 w-auto">
                    <div className="flex flex-row gap-4 items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start pb-8 pt-4 w-auto">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Button className="bg-black-900_01 border-black-900 border-r border-solid border-t capitalize cursor-pointer font-semibold min-w-[69px] py-2.5 rounded-lg text-center text-sm text-white-A700 tracking-[0.70px]">
                            style
                          </Button>
                          <Button className="bg-black-900 capitalize cursor-pointer font-semibold min-w-[62px] py-2.5 rounded-lg text-center text-sm text-white-A700 tracking-[0.70px]">
                            text
                          </Button>
                          <Button className="bg-black-900 capitalize cursor-pointer font-semibold min-w-[90px] py-2.5 rounded-lg text-center text-sm text-white-A700 tracking-[0.70px]">
                            arrange
                          </Button>
                        </div>
                        <div className="bg-black-900_01 flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-col items-start justify-start w-auto">
                            <div className="bg-black-900_01 border-b border-solid border-white-A700_19 flex flex-col items-start justify-start p-4 w-[304px]">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="capitalize text-white-A700 text-xs tracking-[0.60px] w-auto"
                                  size="txtRalewayRomanSemiBold12WhiteA700"
                                >
                                  layer style
                                </Text>
                                <div className="flex flex-row font-inter gap-4 items-center justify-start w-auto">
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Text
                                      className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                                      size="txtInterSemiBold12"
                                    >
                                      n
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-auto">
                                    <Text
                                      className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                                      size="txtInterSemiBold12"
                                    >
                                      100%
                                    </Text>
                                  </div>
                                  <Img
                                    className="h-4 w-4"
                                    src="images/img_mdieye.svg"
                                    alt="mdieye"
                                  />
                                  <Button className="bg-white-A700_19 flex h-6 items-center justify-center p-2 rounded-lg w-6">
                                    <Img
                                      className="h-[7px]"
                                      src="images/img_grid.svg"
                                      alt="grid"
                                    />
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="bg-black-900_01 flex flex-col font-inter items-start justify-start w-[304px]">
                              <div className="bg-black-900_01 flex flex-col items-center justify-start sm:px-5 px-8 py-2 w-full">
                                <div className="flex flex-row gap-4 items-center justify-between w-full">
                                  <Button
                                    className="bg-black-900_01 cursor-pointer flex items-center justify-center min-w-[101px] px-4 py-[9px]"
                                    rightIcon={
                                      <Img
                                        className="h-4 ml-2"
                                        src="images/img_arrowdown.svg"
                                        alt="arrow_down"
                                      />
                                    }
                                  >
                                    <div className="capitalize font-semibold text-left text-white-A700_e5 text-xs tracking-[0.60px]">
                                      normal
                                    </div>
                                  </Button>
                                  <Text
                                    className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                                    size="txtInterSemiBold12"
                                  >
                                    100%
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <List
                            className="flex flex-col gap-px items-center w-full"
                            orientation="vertical"
                          >
                            <div className="flex flex-col items-start justify-start w-auto">
                              <div className="bg-black-900_01 border-b border-solid border-white-A700_19 flex flex-col items-start justify-start p-4 w-[304px]">
                                <div className="flex flex-row items-center justify-between w-full">
                                  <Text
                                    className="capitalize text-white-A700 text-xs tracking-[0.60px] w-auto"
                                    size="txtRalewayRomanSemiBold12WhiteA700"
                                  >
                                    fill
                                  </Text>
                                  <div className="flex flex-row font-inter gap-4 items-center justify-start w-auto">
                                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                                      <div className="bg-purple-A400 h-4 w-4"></div>
                                      <Text
                                        className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                                        size="txtInterSemiBold12"
                                      >
                                        100%
                                      </Text>
                                    </div>
                                    <Img
                                      className="h-4 w-4"
                                      src="images/img_mdieye.svg"
                                      alt="mdieye"
                                    />
                                    <Button className="bg-white-A700_19 flex h-6 items-center justify-center p-2 rounded-lg w-6">
                                      <Img
                                        className="h-[7px]"
                                        src="images/img_grid.svg"
                                        alt="grid"
                                      />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-black-900_01 border-b border-solid border-white-A700_19 flex flex-col gap-2.5 items-start justify-start p-4 w-[304px]">
                                <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                                  <Button
                                    className="bg-black-900_01 border-l border-solid border-white-A700_19 cursor-pointer flex items-center justify-center min-w-[125px] px-[15px] py-[9px]"
                                    rightIcon={
                                      <Img
                                        className="h-4 ml-2"
                                        src="images/img_arrowdown.svg"
                                        alt="arrow_down"
                                      />
                                    }
                                  >
                                    <div className="capitalize font-semibold text-left text-white-A700_e5 text-xs tracking-[0.60px]">
                                      solid color
                                    </div>
                                  </Button>
                                  <Img
                                    className="h-6 rounded-lg w-6"
                                    src="images/img_cut_white_a700.svg"
                                    alt="cut"
                                  />
                                </div>
                                <Img
                                  className="h-52 md:h-auto object-cover w-full"
                                  src="images/img_frame371532.png"
                                  alt="frame371532"
                                />
                                <div className="flex flex-row items-center justify-between w-full">
                                  <Button
                                    className="bg-black-900_01 border-l border-solid border-white-A700_19 cursor-pointer flex items-center justify-center min-w-[80px] px-[15px] py-[9px]"
                                    rightIcon={
                                      <Img
                                        className="h-4 ml-2"
                                        src="images/img_arrowdown.svg"
                                        alt="arrow_down"
                                      />
                                    }
                                  >
                                    <div className="capitalize font-semibold text-left text-white-A700_e5 text-xs tracking-[0.60px]">
                                      hex
                                    </div>
                                  </Button>
                                  <div className="flex flex-row font-inter gap-4 items-start justify-start w-auto">
                                    <Text
                                      className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                                      size="txtInterSemiBold12"
                                    >
                                      F5F5F5
                                    </Text>
                                    <Text
                                      className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                                      size="txtInterSemiBold12"
                                    >
                                      100%
                                    </Text>
                                  </div>
                                </div>
                                <Button className="bg-black-900_01 border-l border-solid border-white-A700_19 capitalize cursor-pointer font-semibold min-w-[134px] py-2.5 text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                                  document color
                                </Button>
                                <Img
                                  className="h-14 w-full"
                                  src="images/img_frame371542.svg"
                                  alt="frame371542"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start w-auto">
                              <div className="bg-black-900_01 border-b border-solid border-white-A700_19 flex flex-col items-start justify-start p-4 w-[304px]">
                                <div className="flex flex-row items-center justify-between w-full">
                                  <Text
                                    className="capitalize text-white-A700 text-xs tracking-[0.60px] w-auto"
                                    size="txtRalewayRomanSemiBold12WhiteA700"
                                  >
                                    stroke
                                  </Text>
                                  <div className="flex flex-row font-inter gap-4 items-center justify-start w-auto">
                                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                                      <div className="bg-purple-A400 h-4 w-4"></div>
                                      <Text
                                        className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                                        size="txtInterSemiBold12"
                                      >
                                        100%
                                      </Text>
                                    </div>
                                    <Img
                                      className="h-4 w-4"
                                      src="images/img_mdieye.svg"
                                      alt="mdieye"
                                    />
                                    <Button className="bg-white-A700_19 flex h-6 items-center justify-center p-2 rounded-lg w-6">
                                      <Img
                                        className="h-[7px]"
                                        src="images/img_grid.svg"
                                        alt="grid"
                                      />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-black-900_01 flex flex-col font-inter gap-2 items-start justify-start w-[304px]">
                                <div className="bg-black-900_01 flex flex-col items-center justify-start sm:px-5 px-8 py-2 w-full">
                                  <div className="flex flex-row gap-4 items-center justify-between w-full">
                                    <div className="bg-black-900_01 flex flex-col items-start justify-start px-4 py-2 w-auto">
                                      <Img
                                        className="h-4 w-16"
                                        src="images/img_arrowright_white_a700.svg"
                                        alt="arrowright"
                                      />
                                    </div>
                                    <Text
                                      className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                                      size="txtInterSemiBold12"
                                    >
                                      1 pt
                                    </Text>
                                  </div>
                                </div>
                                <div className="bg-black-900_01 flex flex-col items-center justify-start sm:px-5 px-8 py-2 w-full">
                                  <div className="flex flex-row gap-4 items-center justify-between w-full">
                                    <Text
                                      className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                                      size="txtInterSemiBold12"
                                    >
                                      parimeter
                                    </Text>
                                    <Text
                                      className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                                      size="txtInterSemiBold12"
                                    >
                                      1 pt
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                      <div className="bg-white-A700_33 flex flex-col items-center justify-start pb-[140px] rounded-sm w-[2%]">
                        <Line className="bg-white-A700_33 h-[60px] rounded-sm w-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-col font-inter gap-8 items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-4 w-full" />
        </div>
      </div>
    </>
  );
};

export default WebappbuildercodexwithoutcodePage;
