import React from "react";

import { Button, Img, List, Text } from "components";
import CodeXDAOGovernanceOneRowframe370831 from "components/CodeXDAOGovernanceOneRowframe370831";
import CreateTokenHomepageFooterexplorer from "components/CreateTokenHomepageFooterexplorer";

const CodeXDAOgovernanceOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-center justify-end mx-auto w-full">
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mx-auto w-full">
            <div className="h-[680px] md:h-[817px] mb-[217px] relative w-[59%] md:w-full">
              <div className="absolute bottom-[0] h-[600px] inset-x-[0] mx-auto w-full">
                <Img
                  className="h-[600px] m-auto object-cover w-full"
                  src="images/img_fixdesignanimation.png"
                  alt="fixdesignanimat"
                />
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[6%] flex flex-row h-1 items-center justify-center right-[16%] w-[1%]"
                  style={{ backgroundImage: "url('images/img_group19.svg')" }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-row h-1 items-center justify-evenly w-full"
                    style={{ backgroundImage: "url('images/img_group19.svg')" }}
                  >
                    <Img
                      className="h-1"
                      src="images/img_group19.svg"
                      alt="vector"
                    />
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[293px] left-[0] object-cover rounded-[16px] top-[0]"
                src="images/img_polygon1.png"
                alt="polygonOne"
              />
            </div>
            <Img
              className="h-[534px] md:h-auto md:mt-0 mt-[363px] object-cover rounded-[16px]"
              src="images/img_polygon2.png"
              alt="polygonTwo"
            />
          </div>
          <div className="flex flex-col gap-8 items-start justify-center max-w-[660px] ml-auto mr-[92px] mt-[-NaNpx] px-4 py-20 w-full z-[1]">
            <Text
              className="capitalize leading-[140.00%] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
              size="txtRalewayRomanSemiBold48"
            >
              <>
                Participate in the
                <br />
                Governance of CodeX
              </>
            </Text>
            <Text
              className="leading-[160.00%] max-w-[628px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px]"
              size="txtRalewayRomanSemiBold24"
            >
              CodeX tokenholders can take part in the decision-making of the
              CodeX Platform and Association
            </Text>
            <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-auto sm:w-full">
              <Button className="bg-gradient  capitalize cursor-pointer font-semibold min-w-[194px] py-5 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                go to forum
              </Button>
              <Button className="border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[205px] py-5 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                Current Votes
              </Button>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 h-[346px] justify-start max-w-[1440px] mt-[-121.14px] mx-auto md:px-10 px-20 sm:px-5 w-full z-[1]"
            orientation="horizontal"
          >
            <div className="bg-black-900_01 flex sm:flex-1 flex-col gap-8 h-[346px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[397px] sm:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-row gap-4 items-start justify-start w-full">
                    <Img
                      className="h-12 w-12"
                      src="images/img_ribookmarkline.svg"
                      alt="ribookmarkline"
                    />
                    <Text
                      className="capitalize flex-1 leading-[140.00%] max-w-[269px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px]"
                      size="txtRalewayRomanSemiBold32"
                    >
                      Learn : How to Govern
                    </Text>
                  </div>
                  <Text
                    className="leading-[160.00%] text-base text-white-A700_e5 tracking-[0.80px]"
                    size="txtRalewayRomanRegular16"
                  >
                    <>
                      From ideation to implementation,
                      <br />
                      learn the governance process,
                      <br />
                      requirements and more.
                    </>
                  </Text>
                </div>
              </div>
              <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[94px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                Tutorial
              </Button>
            </div>
            <div className="bg-black-900_01 flex sm:flex-1 flex-col gap-8 h-[346px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[397px] sm:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-row gap-4 items-start justify-start w-full">
                    <Img
                      className="h-12 w-12"
                      src="images/img_octiconcommentdiscussion24.svg"
                      alt="octiconcommentd"
                    />
                    <Text
                      className="capitalize flex-1 leading-[140.00%] max-w-[269px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px]"
                      size="txtRalewayRomanSemiBold32"
                    >
                      Discuss: CodeX Forum
                    </Text>
                  </div>
                  <Text
                    className="leading-[160.00%] text-base text-white-A700_e5 tracking-[0.80px]"
                    size="txtRalewayRomanRegular16"
                  >
                    <>
                      A space to propose and discuss
                      <br />
                      ideas to improve the CodeX platform, product and
                      processes.
                    </>
                  </Text>
                </div>
              </div>
              <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[84px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                forum
              </Button>
            </div>
            <div className="bg-black-900_01 flex sm:flex-1 flex-col gap-8 h-[346px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[397px] sm:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-row gap-4 items-start justify-start w-full">
                    <Img
                      className="h-12 w-12"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <Text
                      className="capitalize flex-1 leading-[140.00%] max-w-[269px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px]"
                      size="txtRalewayRomanSemiBold32"
                    >
                      Vote: CodeX Snapshot
                    </Text>
                  </div>
                  <Text
                    className="leading-[160.00%] text-base text-white-A700_e5 tracking-[0.80px]"
                    size="txtRalewayRomanRegular16"
                  >
                    <>
                      Where proposals are voted on-
                      <br />
                      chain by CodeX (CDX) tokenholders before implementation.
                    </>
                  </Text>
                </div>
              </div>
              <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[108px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                Snapshot
              </Button>
            </div>
          </List>
          <CodeXDAOGovernanceOneRowframe370831 className="bg-black-900_cc flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1440px] mt-[-NaNpx] mx-auto md:px-10 px-20 sm:px-5 w-full z-[1]" />
        </div>
        <div className="bg-black-900 flex flex-col gap-8 items-center justify-start max-w-[670px] mt-40 md:px-5 w-full">
          <Text
            className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px] w-auto"
            size="txtRalewayRomanSemiBold32WhiteA700"
          >
            Forum Activity
          </Text>
          <Text
            className="text-center text-white-A700 text-xl tracking-[1.00px] w-full"
            size="txtRalewayRomanSemiBold20WhiteA700"
          >
            Participate in the latest community discussion of the DIA Forum
          </Text>
        </div>
        <div className="md:h-[1154px] sm:h-[735px] h-[835px] mt-24 md:px-5 relative w-full">
          <Img
            className="absolute bottom-[0] h-[639px] left-[0] object-cover rounded-[16px]"
            src="images/img_polygon2.png"
            alt="polygonThree"
          />
          <List
            className="absolute flex flex-col gap-8 inset-x-[0] items-center max-w-[1440px] mx-auto md:px-10 px-20 sm:px-5 top-[0] w-full"
            orientation="vertical"
          >
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-16 items-start justify-start my-0 w-auto md:w-full">
              <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-[620px] md:w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="bg-gradient1  capitalize flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12"
                    size="txtRalewayRomanSemiBold24"
                  >
                    i
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <Text
                      className="capitalize leading-[160.00%] max-w-[471px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px]"
                      size="txtRalewayRomanSemiBold24"
                    >
                      Proposal for creating an Instagram account for CodeX
                    </Text>
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanMedium16"
                    >
                      June 5, 2023 - 18:51 GMT+7
                    </Text>
                  </div>
                </div>
                <Text
                  className="capitalize leading-[160.00%] text-base text-white-A700_e5 tracking-[0.80px]"
                  size="txtRalewayRomanSemiBold16WhiteA700e5"
                >
                  <>
                    Dear CodeX Community, I hope this letter finds you well. I
                    <br />
                    am writing to propose the creation of an official
                  </>
                </Text>
              </div>
              <div className="bg-black-900_01 flex flex-col gap-4 h-[250px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-[620px] md:w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="bg-gradient1  capitalize flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12"
                    size="txtRalewayRomanSemiBold24"
                  >
                    f
                  </Text>
                  <div className="flex flex-col h-[118px] md:h-auto items-start justify-start w-auto sm:w-full">
                    <Text
                      className="capitalize leading-[160.00%] max-w-[471px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px]"
                      size="txtRalewayRomanSemiBold24"
                    >
                      Proposal for Creating a Facebook Account for CodeX
                    </Text>
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanMedium16"
                    >
                      June 5, 2023 - 18:51 GMT+7
                    </Text>
                  </div>
                </div>
                <Text
                  className="capitalize leading-[160.00%] text-base text-white-A700_e5 tracking-[0.80px]"
                  size="txtRalewayRomanSemiBold16WhiteA700e5"
                >
                  <>
                    Dear CodeX Community, I hope this letter finds you well. I
                    <br />
                    am writing to propose the creation of an official
                  </>
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-16 items-start justify-start my-0 w-auto md:w-full">
              <div className="bg-black-900_01 flex flex-col h-[234px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[620px] md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="bg-gradient1  capitalize flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12"
                      size="txtRalewayRomanSemiBold24"
                    >
                      1
                    </Text>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="capitalize leading-[160.00%] max-w-[483px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px]"
                        size="txtRalewayRomanSemiBold24"
                      >
                        Proposal for creating an Instagram account for CodeX
                      </Text>
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanMedium16"
                      >
                        June 5, 2023 - 18:51 GMT+7
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="capitalize leading-[160.00%] text-base text-white-A700_e5 tracking-[0.80px]"
                    size="txtRalewayRomanSemiBold16WhiteA700e5"
                  >
                    <>
                      Dear CodeX Community, I hope this letter finds you well. I
                      <br />
                      am writing to propose the creation of an official
                    </>
                  </Text>
                </div>
              </div>
              <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-[620px] md:w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="bg-gradient1  capitalize flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12"
                    size="txtRalewayRomanSemiBold24"
                  >
                    f
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <Text
                      className="capitalize leading-[160.00%] max-w-[499px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px]"
                      size="txtRalewayRomanSemiBold24"
                    >
                      Proposal for Creating a Facebook Account for CodeX
                    </Text>
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanMedium16"
                    >
                      June 5, 2023 - 18:51 GMT+7
                    </Text>
                  </div>
                </div>
                <Text
                  className="capitalize leading-[160.00%] text-base text-white-A700_e5 tracking-[0.80px]"
                  size="txtRalewayRomanSemiBold16WhiteA700e5"
                >
                  <>
                    Dear CodeX Community, I hope this letter finds you well. I
                    <br />
                    am writing to propose the creation of an official
                  </>
                </Text>
              </div>
            </div>
          </List>
          <Button className="absolute bg-light_blue-500 bottom-[18%] capitalize cursor-pointer font-semibold min-w-[103px] py-[11px] right-[5%] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
            show all
          </Button>
        </div>
        <div className="font-inter h-[486px] mt-2.5 md:px-5 relative w-full">
          <div className="bg-gradient2  flex flex-col font-raleway gap-8 items-center justify-start max-w-[1440px] mb-[-2px] mx-auto pb-24 pt-8 md:px-10 px-20 sm:px-5 w-full z-[1]">
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
          <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-col gap-8 items-center justify-start max-w-[1440px] mt-auto mx-auto md:px-10 px-20 sm:px-5 py-4 w-full" />
        </div>
        <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-col font-inter gap-8 items-center justify-start max-w-[1440px] mt-[1390px] md:px-10 px-20 sm:px-5 py-4 w-full" />
      </div>
    </>
  );
};

export default CodeXDAOgovernanceOnePage;
