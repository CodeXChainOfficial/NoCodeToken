import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import CodeXDAOGovernanceOneRowframe370831 from "components/CodeXDAOGovernanceOneRowframe370831";
import CreateTokenHomepageFooterexplorer from "components/CreateTokenHomepageFooterexplorer";

const CodeXDevelopmentPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col items-start justify-end mx-auto w-full">
        <div className="flex flex-col font-raleway items-center w-full">
          <div className="md:h-[1104px] h-[1109px] sm:h-[773px] md:px-5 relative w-full">
            <div className="md:h-[1104px] h-[1109px] sm:h-[773px] m-auto w-full">
              <div className="absolute flex flex-col items-center justify-start right-[0] top-[11%] w-[92%]">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex h-[494px] md:h-[530px] justify-end relative w-[53%] md:w-full">
                    <Img
                      className="h-1 mb-2.5 ml-auto mr-[106px] mt-auto"
                      src="images/img_group19.svg"
                      alt="vector"
                    />
                    <div className="absolute flex flex-col gap-8 h-full inset-[0] items-start justify-end m-auto max-w-[660px] px-4 py-20 w-full">
                      <Text
                        className="capitalize leading-[140.00%] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
                        size="txtRalewayRomanSemiBold48"
                      >
                        <>
                          Contribute to the
                          <br />
                          Development of CodeX
                        </>
                      </Text>
                      <Text
                        className="leading-[42.00px] max-w-[628px] md:max-w-full md:text-2xl sm:text-[22px] text-[26px] text-white-A700 tracking-[0.28px]"
                        size="txtInterRegular26"
                      >
                        Join the web 3 community and help shape the future of
                        mass adoption. Be part of a dynamic ecosystem that
                        revolutionizes the internet for everyone.
                      </Text>
                      <div
                        className="bg-cover bg-no-repeat flex flex-row h-1 items-center justify-end w-[1%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group19.svg')",
                        }}
                      >
                        <Img
                          className="h-1"
                          src="images/img_group19.svg"
                          alt="vector_One"
                        />
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-[534px] md:h-auto md:mt-0 mt-[239px] object-cover rounded-[16px]"
                    src="images/img_polygon2.png"
                    alt="polygonTwo"
                  />
                </div>
              </div>
              <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[35px] h-[352px] md:h-auto inset-x-[0] items-center justify-start max-w-[1372px] mx-auto md:px-10 px-20 sm:px-5 w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[35px] grid md:grid-cols-1 grid-cols-2 w-[69%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-black-900_01 border border-light_blue-500 border-solid flex flex-col gap-8 h-[352px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-col gap-4 items-start justify-start w-auto">
                        <Text
                          className="capitalize leading-[140.00%] max-w-[332px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px]"
                          size="txtRalewayRomanSemiBold32"
                        >
                          Learn: How to Govern
                        </Text>
                        <Text
                          className="leading-[30.00px] text-[19px] text-white-A700_99 tracking-[0.20px]"
                          size="txtInterRegular19"
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
                    <Button className="bg-indigo-600 capitalize cursor-pointer font-medium min-w-[94px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                      Tutorial
                    </Button>
                  </div>
                  <div className="bg-black-900_01 flex flex-col gap-8 h-[352px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-col gap-4 items-start justify-start w-auto">
                        <Text
                          className="capitalize leading-[140.00%] max-w-[332px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px]"
                          size="txtRalewayRomanSemiBold32"
                        >
                          Discuss: CodeX Forum
                        </Text>
                        <Text
                          className="leading-[30.00px] text-[19px] text-white-A700_99 tracking-[0.20px]"
                          size="txtInterRegular19"
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
                    <div className="flex flex-col items-start justify-start w-full">
                      <Button className="bg-indigo-600 capitalize cursor-pointer font-medium min-w-[84px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                        forum
                      </Button>
                    </div>
                  </div>
                </List>
                <div className="bg-black-900_01 flex flex-1 flex-col h-full items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col gap-4 h-full items-start justify-between w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="capitalize leading-[140.00%] max-w-[332px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px]"
                        size="txtRalewayRomanSemiBold32"
                      >
                        Vote: CodeX Snapshot
                      </Text>
                      <Text
                        className="leading-[160.00%] text-base text-white-A700_e5 tracking-[0.80px]"
                        size="txtRalewayRomanRegular16"
                      >
                        <>
                          Where proposals are voted on-
                          <br />
                          chain by CodeX (CDX) tokenholders before
                          implementation.
                        </>
                      </Text>
                    </div>
                    <Button
                      className="common-pointer bg-indigo-600 capitalize cursor-pointer font-medium min-w-[108px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]"
                      onClick={() => navigate("/myaccountdeveloper")}
                    >
                      Snapshot
                    </Button>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[293px] left-[0] object-cover rounded-[16px] top-[0]"
                src="images/img_polygon1.png"
                alt="polygonOne"
              />
            </div>
            <div className="absolute flex flex-col items-center justify-start right-[7%] rotate-[180deg] top-[16%] w-[34%]">
              <Img
                className="h-[420px] md:h-auto object-cover w-full"
                src="images/img_untitled11280x601_420x458.png"
                alt="untitled11280xSix"
              />
            </div>
            <CodeXDAOGovernanceOneRowframe370831 className="absolute bg-black-900_cc flex md:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between max-w-[1372px] mx-auto md:px-10 px-20 sm:px-5 top-[0] w-full" />
          </div>
        </div>
        <Text
          className="capitalize md:ml-[0] ml-[92px] mt-[210px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px]"
          size="txtRalewayRomanSemiBold32WhiteA700"
        >
          Forum Activity
        </Text>
        <Text
          className="md:ml-[0] ml-[97px] mt-[5px] text-[19px] text-white-A700"
          size="txtInterRegular19WhiteA700"
        >
          Participate in the latest community discussion of the DIA Forum
        </Text>
        <div className="flex flex-col font-raleway md:gap-10 gap-[143px] items-center mt-[30px] w-full">
          <div className="md:h-[1128px] sm:h-[638px] h-[950px] md:px-5 relative w-full">
            <div
              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[639px] items-start justify-center left-[0] p-20 md:px-10 sm:px-5 rounded-[16px] w-1/4"
              style={{ backgroundImage: "url('images/img_polygon2.png')" }}
            >
              <Button
                className="common-pointer bg-indigo-600 capitalize cursor-pointer font-medium min-w-[124px] my-[218px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]"
                onClick={() => navigate("/myaccountdeveloper")}
              >
                <>Show All -&gt;</>
              </Button>
            </div>
            <List
              className="absolute flex flex-col gap-16 inset-x-[0] items-center max-w-[1372px] mx-auto md:px-10 px-20 sm:px-5 top-[0] w-full"
              orientation="vertical"
            >
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-16 items-start justify-start my-0 w-auto md:w-full">
                <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-[620px] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
                    <Text
                      className="bg-light_blue-500 capitalize flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12"
                      size="txtRalewayRomanSemiBold24"
                    >
                      c
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
                  <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
                    <Text
                      className="bg-light_blue-500 capitalize flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12"
                      size="txtRalewayRomanSemiBold24"
                    >
                      GD
                    </Text>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
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
                <div className="bg-black-900_01 flex flex-col h-[272px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[620px] md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
                      <Text
                        className="bg-light_blue-500 capitalize flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12"
                        size="txtRalewayRomanSemiBold24"
                      >
                        U
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
                        Dear CodeX Community, I hope this letter finds you well.
                        I<br />
                        am writing to propose the creation of an official
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-[620px] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
                    <Text
                      className="bg-light_blue-500 capitalize flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12"
                      size="txtRalewayRomanSemiBold24"
                    >
                      D
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
          </div>
          <List
            className="flex flex-col font-inter gap-[1390px] items-center w-full"
            orientation="vertical"
          >
            <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-1 flex-col gap-8 items-center justify-start max-w-[1372px] md:px-10 px-20 sm:px-5 py-4 w-full" />
            <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-1 flex-col gap-8 items-center justify-start max-w-[1372px] md:px-10 px-20 sm:px-5 py-4 w-full" />
          </List>
        </div>
      </div>
    </>
  );
};

export default CodeXDevelopmentPage;
