import React from "react";

import { Button, Img, List, Text } from "components";
import CodeXDAOGovernanceOneRowframe370831 from "components/CodeXDAOGovernanceOneRowframe370831";
import CreateTokenHomepageFooterexplorer from "components/CreateTokenHomepageFooterexplorer";

const CodeXDAOhomepagePage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway sm:gap-10 md:gap-10 gap-40 items-end justify-end mx-auto w-full">
        <div className="flex flex-col items-start md:px-5 w-full">
          <div className="flex flex-col relative w-full">
            <div className="md:h-[689px] sm:h-[721px] h-[924px] mx-auto w-full">
              <div className="absolute flex flex-col md:gap-10 gap-[72px] inset-x-[0] justify-start mx-auto top-[0] w-full">
                <div className="md:h-[602px] h-[682px] relative w-full">
                  <div className="absolute bottom-[0] inset-x-[0] mx-auto overflow-x-auto w-full">
                    <div className="flex md:h-[600px] h-[602px] justify-end overflow-auto relative w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-row h-full items-center justify-center mb-[249px] ml-auto mr-[736px] mt-auto w-[1%]"
                        style={{
                          backgroundImage:
                            "url('images/img_vector_deep_purple_300.svg')",
                        }}
                      >
                        <div
                          className="bg-cover bg-no-repeat flex flex-row h-[3px] items-center justify-evenly w-full"
                          style={{
                            backgroundImage:
                              "url('images/img_vector_deep_purple_300.svg')",
                          }}
                        >
                          <Img
                            className="h-[3px]"
                            src="images/img_vector_deep_purple_300.svg"
                            alt="vector"
                          />
                        </div>
                      </div>
                      <div className="absolute md:h-[600px] h-[602px] inset-y-[0] my-auto md:pr-10 sm:pr-5 pr-[418px] right-[0] w-full">
                        <div className="absolute h-[600px] inset-y-[0] my-auto right-[69%] w-[51%] md:w-full">
                          <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] rotate-[180deg] w-[74%]">
                            <Img
                              className="h-[600px] md:h-auto object-cover w-full"
                              src="images/img_fixdesignanimation_600x840.png"
                              alt="fixdesignanimat"
                            />
                          </div>
                          <div className="absolute flex flex-col gap-8 items-center justify-center left-[0] max-w-[846px] px-4 py-20 top-[5%] w-full">
                            <Text
                              className="capitalize leading-[140.00%] max-w-[814px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 tracking-[2.40px]"
                              size="txtRalewayRomanSemiBold48"
                            >
                              CodeX Ecosystem is Built on Community
                            </Text>
                            <Text
                              className="leading-[160.00%] max-w-[814px] md:max-w-full text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px]"
                              size="txtRalewayRomanSemiBold24"
                            >
                              Join the transformative mission of CodeX as we
                              forge an expansive ecosystem, primed for
                              widespread adoption. Become an integral part of
                              our vibrant community, driving the movement
                              towards a future brimming with limitless
                              potential!
                            </Text>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[37%]">
                          <Img
                            className="h-[600px] md:h-auto object-cover w-full"
                            src="images/img_fixdesignanimation.png"
                            alt="fixdesignanimat_One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[293px] left-[22%] object-cover rounded-[16px] top-[0]"
                    src="images/img_polygon1.png"
                    alt="polygonOne"
                  />
                </div>
                <Text
                  className="capitalize md:ml-[0] ml-[924px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[2.00px]"
                  size="txtRalewayRomanSemiBold40"
                >
                  What is CodeX DAO?{" "}
                </Text>
              </div>
              <Img
                className="absolute bottom-[0] h-[534px] object-cover right-[0] rounded-[16px]"
                src="images/img_polygon2.png"
                alt="polygonTwo"
              />
            </div>
            <List
              className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 h-[346px] justify-start max-w-[1440px] ml-auto mt-[-22.14px] md:px-10 px-20 sm:px-5 w-full z-[1]"
              orientation="horizontal"
            >
              <div className="bg-black-900_01 flex flex-1 flex-col gap-8 h-full items-start justify-between p-8 sm:px-5 rounded-lg w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                      <Img
                        className="h-12 w-12"
                        src="images/img_mail.svg"
                        alt="mail"
                      />
                      <Text
                        className="capitalize flex-1 md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px] w-auto"
                        size="txtRalewayRomanSemiBold32"
                      >
                        Governance & Validation
                      </Text>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[560px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanMedium16"
                    >
                      CodeX DAO empowers community members to propose, discuss,
                      vote on, and approve platform features, product
                      governance, and more. Contributions are rewarded with
                      points, validating trustworthiness and ambassador
                      potential.
                    </Text>
                  </div>
                </div>
                <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[121px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  Participate
                </Button>
              </div>
              <div className="bg-black-900_01 flex flex-1 flex-col gap-8 h-full items-start justify-between p-8 sm:px-5 rounded-lg w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                      <Img
                        className="h-12 w-12"
                        src="images/img_devicon.svg"
                        alt="devicon"
                      />
                      <Text
                        className="capitalize flex-1 md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px] w-auto"
                        size="txtRalewayRomanSemiBold32"
                      >
                        Development & Growth
                      </Text>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[560px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanMedium16"
                    >
                      The CodeX DAO enables contributions across various
                      domains, including coding, design, and more, with
                      rewarding opportunities throughout the process. Stay
                      notified of pull requests, prepare to collaborate, and
                      receive well-deserved rewards for your efforts.
                    </Text>
                  </div>
                </div>
                <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[75px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  Work
                </Button>
              </div>
            </List>
            <CodeXDAOGovernanceOneRowframe370831 className="bg-black-900_cc flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1440px] ml-auto mt-[-NaNpx] md:px-10 px-20 sm:px-5 w-full z-[1]" />
          </div>
        </div>
        <div className="flex flex-col font-inter items-center pl-[418px] md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[1390px] items-center justify-end w-full">
            <div className="md:h-[318px] sm:h-[414px] h-[491px] relative w-full">
              <Img
                className="absolute bottom-[0] h-[171px] left-[0] object-cover rounded-[16px]"
                src="images/img_polygon2.png"
                alt="polygonThree"
              />
              <CreateTokenHomepageFooterexplorer className="absolute bg-gray-900 bottom-[0] flex flex-col gap-8 inset-x-[0] items-center justify-start max-w-[1440px] mx-auto md:px-10 px-20 sm:px-5 py-4 w-full" />
              <div className="absolute bg-gradient2  flex flex-col font-raleway gap-8 inset-x-[0] items-center justify-start max-w-[1440px] mx-auto pb-24 pt-8 md:px-10 px-20 sm:px-5 top-[0] w-full">
                <div className="flex flex-col gap-8 items-center justify-start max-w-[670px] w-full">
                  <Text
                    className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px] w-auto"
                    size="txtRalewayRomanSemiBold32WhiteA700"
                  >
                    question?
                  </Text>
                  <Text
                    className="capitalize text-center text-white-A700 text-xl tracking-[1.00px] w-full"
                    size="txtRalewayRomanSemiBold20WhiteA700"
                  >
                    Connect with the CodeX community and get help.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-auto sm:w-full">
                  <Button
                    className="bg-gradient  cursor-pointer flex items-center justify-center min-w-[175px] px-8 py-[19px] rounded-lg"
                    leftIcon={
                      <Img
                        className="h-6 mt-px mr-2"
                        src="images/img_icoutlinediscord.svg"
                        alt="ic:baseline-discord"
                      />
                    }
                  >
                    <div className="capitalize font-semibold sm:px-5 text-left text-white-A700 text-xl tracking-[1.00px]">
                      discord
                    </div>
                  </Button>
                  <Button
                    className="border border-light_blue-500 border-solid cursor-pointer flex items-center justify-center min-w-[193px] px-[31px] py-[19px] rounded-lg"
                    leftIcon={
                      <Img
                        className="h-6 mb-px mr-2"
                        src="images/img_arrowleft.svg"
                        alt="arrow_left"
                      />
                    }
                  >
                    <div className="capitalize font-semibold sm:px-5 text-left text-white-A700 text-xl tracking-[1.00px]">
                      telegram
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-col gap-8 items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-4 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeXDAOhomepagePage;
