import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import CodeXDAOGovernanceOneRowframe370831 from "components/CodeXDAOGovernanceOneRowframe370831";
import CreateTokenHomepageFooterexplorer from "components/CreateTokenHomepageFooterexplorer";
import HomePageCodexAppColumnonboard from "components/HomePageCodexAppColumnonboard";

const HomepagecontributorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-start justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mx-auto w-full">
              <Img
                className="h-[231px] md:h-auto object-cover rounded-[16px]"
                src="images/img_polygon1.png"
                alt="polygonOne"
              />
              <div className="md:h-[535px] h-[776px] sm:h-[837px] md:mt-0 mt-40 relative w-[62%] md:w-full">
                <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[9%] w-[74%]">
                  <div className="flex flex-col md:gap-10 gap-[270px] items-start justify-start w-full">
                    <div className="flex flex-col gap-8 items-start justify-start max-w-[660px] px-4 py-20 w-full">
                      <Text
                        className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px] w-full"
                        size="txtRalewayRomanSemiBold48"
                      >
                        Be a part of our journey
                      </Text>
                      <Text
                        className="leading-[160.00%] max-w-[628px] md:max-w-full text-white-A700 text-xl tracking-[1.00px]"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        As a veteran programmer contributor, use your skills to
                        support the community by building infrastructure,
                        collaborating, guiding others, and sharing knowledge.
                        Earn recognition and rewards based on your valuable
                        contributions.
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col items-start justify-start px-4 py-2 w-auto">
                          <Text
                            className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                            size="txtRalewayRomanSemiBold20WhiteA700"
                          >
                            Leaderboard
                          </Text>
                        </div>
                        <Button className="bg-gradient4  capitalize cursor-pointer font-semibold min-w-[208px] py-3 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                          Current Bounties
                        </Button>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-row h-1.5 items-center justify-start ml-0.5 md:ml-[0] w-[1%] md:w-full"
                      style={{
                        backgroundImage: "url('images/img_group19.svg')",
                      }}
                    >
                      <div
                        className="bg-cover bg-no-repeat flex flex-row h-1.5 items-center justify-evenly w-full"
                        style={{
                          backgroundImage: "url('images/img_group19.svg')",
                        }}
                      >
                        <Img
                          className="h-1.5"
                          src="images/img_group19.svg"
                          alt="vector"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[5%] h-[534px] object-cover right-[0] rounded-[16px]"
                  src="images/img_polygon2.png"
                  alt="polygonTwo"
                />
                <Text
                  className="absolute bottom-[17%] capitalize left-[0] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[2.00px]"
                  size="txtRalewayRomanSemiBold40"
                >
                  How does it work?{" "}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start ml-[139px] mt-[-NaNpx] w-[32%] z-[1]">
              <Img
                className="h-[420px] md:h-auto object-cover w-full"
                src="images/img_untitled11280x601.png"
                alt="untitled11280xSix"
              />
            </div>
            <div className="font-inter gap-[39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 h-[533px] md:h-auto items-center justify-start mt-[-64.52px] mx-auto md:px-10 px-20 sm:px-5 w-auto z-[1]">
              <HomePageCodexAppColumnonboard
                className="bg-black-900_01 flex flex-col gap-8 h-[533px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-full"
                editimage="images/img_edit.svg"
              />
              <div className="bg-black-900_01 flex flex-col gap-8 h-[533px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-row gap-4 items-start justify-between w-full">
                    <div className="bg-gradient1  h-24 rounded-[16px] w-24"></div>
                    <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold h-12 py-[9px] rounded-bl-[50%] rounded-br-lg rounded-tl-lg rounded-tr-lg text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12">
                      2
                    </Button>
                  </div>
                  <div className="flex flex-col font-raleway gap-4 items-start justify-start w-auto">
                    <Text
                      className="capitalize leading-[140.00%] max-w-[332px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px]"
                      size="txtRalewayRomanSemiBold32"
                    >
                      Find the Opportunity
                    </Text>
                    <Text
                      className="leading-[160.00%] max-w-[332px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      After registration, explore CodeX GitHub repository for
                      project opportunities, contribute to projects, engage in
                      forum discussions, help others with pull requests, and
                      review tasks for successful completion.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row font-raleway gap-8 items-start justify-start w-auto">
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[87px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    github
                  </Button>
                  <Button className="bg-black-900_01 border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[85px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    forum
                  </Button>
                </div>
              </div>
              <HomePageCodexAppColumnonboard
                className="bg-black-900_01 flex flex-col gap-8 h-[533px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-full"
                editimage="images/img_edit.svg"
                registertext="Get reward"
              />
            </div>
            <CodeXDAOGovernanceOneRowframe370831 className="bg-black-900_cc flex md:flex-col flex-row font-raleway md:gap-10 items-center justify-between max-w-[1440px] mt-[-NaNpx] mx-auto md:px-10 px-20 sm:px-5 w-full z-[1]" />
          </div>
        </div>
        <Text
          className="capitalize md:ml-[0] ml-[475px] mt-[102px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px]"
          size="txtRalewayRomanSemiBold32WhiteA700"
        >
          the 4 level Programming{" "}
        </Text>
        <div className="flex flex-col items-center mt-16 w-full">
          <div className="md:h-[1139px] sm:h-[726px] h-[846px] md:px-5 relative w-full">
            <div className="flex flex-col gap-[9px] h-full justify-start m-auto w-full">
              <div className="md:h-[1052px] sm:h-[639px] h-[757px] relative w-full">
                <Img
                  className="absolute bottom-[0] h-[639px] left-[0] object-cover rounded-[16px]"
                  src="images/img_polygon2.png"
                  alt="polygonThree"
                />
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start max-w-[1440px] mx-auto md:px-10 px-20 sm:px-5 top-[0] w-full">
                  <div className="gap-16 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-auto">
                        <Text
                          className="bg-light_blue-500 capitalize flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12"
                          size="txtRalewayRomanSemiBold24"
                        >
                          0
                        </Text>
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text
                            className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                            size="txtRalewayRomanSemiBold24"
                          >
                            Level 0
                          </Text>
                          <Text
                            className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                            size="txtRalewayRomanMedium16"
                          >
                            No Code based
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                        size="txtRalewayRomanRegular16"
                      >
                        The no-code level is perfect for non-technical users who
                        desire to build basic applications without coding. With
                        CodeX, you can create applications effortlessly by
                        simply filling out a form, choosing from a variety of
                        pre-built functionalities provided in the templates.
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-1 flex-col gap-4 h-[274px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-auto">
                        <Text
                          className="bg-light_blue-500 capitalize flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12"
                          size="txtRalewayRomanSemiBold24"
                        >
                          1
                        </Text>
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text
                            className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                            size="txtRalewayRomanSemiBold24"
                          >
                            Level 1
                          </Text>
                          <Text
                            className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                            size="txtRalewayRomanMedium16"
                          >
                            Flow
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                        size="txtRalewayRomanRegular16"
                      >
                        <>
                          The flow level is for creating complex applications
                          with multiple steps, decision-making, and integration
                          with external services. Use flowcharts to define the
                          logical structure, with each block representing a task
                          or decision. Customize your application&#39;s
                          appearance, add content, and define workflows easily.
                        </>
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-1 flex-col h-[248px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-row gap-4 items-center justify-start w-auto">
                          <Text
                            className="bg-light_blue-500 capitalize flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12"
                            size="txtRalewayRomanSemiBold24"
                          >
                            2
                          </Text>
                          <div className="flex flex-col gap-2 items-start justify-start w-auto">
                            <Text
                              className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                              size="txtRalewayRomanSemiBold24"
                            >
                              Level 2
                            </Text>
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanMedium16"
                            >
                              Code Translator
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                          size="txtRalewayRomanRegular16"
                        >
                          Code translation converts source code from one
                          programming language to another seamlessly. Easily
                          translate Solidity, Rush, C, and more languages
                          without starting from scratch. The translated code can
                          be converted to a flowchart in Level 1.
                        </Text>
                      </div>
                    </div>
                    <div className="bg-black-900_01 flex flex-1 flex-col gap-4 items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-auto">
                        <Text
                          className="bg-light_blue-500 capitalize flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12"
                          size="txtRalewayRomanSemiBold24"
                        >
                          3
                        </Text>
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text
                            className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                            size="txtRalewayRomanSemiBold24"
                          >
                            Level 3
                          </Text>
                          <Text
                            className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                            size="txtRalewayRomanMedium16"
                          >
                            Library
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[160.00%] max-w-[556px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                        size="txtRalewayRomanRegular16"
                      >
                        The library level is for developers creating reusable
                        components and modules. Write code for specific
                        functionality, package it as libraries to share with
                        others, and promote code reusability and collaboration.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-inter items-start justify-end md:ml-[0] ml-[73px] pr-0.5 py-0.5">
                <Text
                  className="mt-[50px] text-white-A700 text-xl"
                  size="txtInterRegular20"
                >
                  Not a developer? No problem! Contribute to our web 3 space
                  through design, marketing, community management, and more.
                  Help drive mass adoption and shape a decentralized future with
                  us.
                </Text>
              </div>
            </div>
            <Text
              className="absolute bottom-[9%] capitalize left-[5%] sm:text-[31px] md:text-[33px] text-[35px] text-white-A700 tracking-[1.75px]"
              size="txtRalewayRomanSemiBold35"
            >
              Contribute to the Development of CodeX
            </Text>
          </div>
          <List
            className="flex flex-col gap-[88px] items-center mt-16 w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 md:flex-col flex-row gap-[35px] h-[444px] md:h-auto items-start justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 w-full">
              <div className="bg-black-900_01 border border-light_blue-500 border-solid flex sm:flex-1 flex-col gap-8 h-[444px] md:h-auto items-start justify-between p-8 md:px-5 rounded-lg w-[380px] sm:w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px] w-auto"
                      size="txtRalewayRomanSemiBold32"
                    >
                      🎨 Design
                    </Text>
                    <Text
                      className="leading-[30.00px] max-w-[332px] md:max-w-full text-[19px] text-white-A700_99 tracking-[0.20px]"
                      size="txtInterRegular19"
                    >
                      <>
                        The Design Veteran offers design assistance to
                        developers in the CodeX ecosystem. Simply request help
                        via a pull request, and we&#39;ll provide expert support
                        in brand development, marketing design, motion design,
                        and UI/UX design.
                      </>
                    </Text>
                  </div>
                </div>
                <Button className="bg-indigo-600 capitalize cursor-pointer font-medium min-w-[165px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  Design Bounties
                </Button>
              </div>
              <div className="bg-black-900_01 flex sm:flex-1 flex-col gap-8 h-[444px] md:h-auto items-start justify-between p-8 md:px-5 rounded-lg w-[393px] sm:w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px] w-auto"
                      size="txtRalewayRomanSemiBold32"
                    >
                      📈 Growth
                    </Text>
                    <Text
                      className="leading-[30.00px] max-w-[332px] md:max-w-full text-[19px] text-white-A700_99 tracking-[0.20px]"
                      size="txtInterRegular19"
                    >
                      The Growth Veteran supports CodeX project developers in
                      expanding their community reach. Submit a pull request to
                      request assistance in promotional campaigns, growth
                      tactics, and social development.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Button className="bg-indigo-600 capitalize cursor-pointer font-medium min-w-[168px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    Growth Bounties
                  </Button>
                </div>
              </div>
              <div className="bg-black-900_01 flex sm:flex-1 flex-col h-[444px] md:h-auto items-start justify-start p-8 md:px-5 rounded-lg w-[419px] sm:w-full">
                <div className="flex flex-col gap-4 h-full items-start justify-between w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px] w-auto"
                      size="txtRalewayRomanSemiBold32"
                    >
                      ✍️ Copywriting
                    </Text>
                    <Text
                      className="leading-[160.00%] text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      <>
                        Product deep dives, market
                        <br />
                        research, community updates or
                        <br />
                        announcements, the Copywriting
                        <br />
                        Veteran writes informative and
                        <br />
                        educative content.
                      </>
                    </Text>
                  </div>
                  <Button
                    className="common-pointer bg-indigo-600 capitalize cursor-pointer font-medium min-w-[208px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]"
                    onClick={() => navigate("/myaccountdeveloper")}
                  >
                    Copywriting bounties
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-[35px] h-[468px] md:h-auto items-start justify-start max-w-[1433px] mx-auto md:px-5 w-full">
              <div className="bg-black-900_01 border border-light_blue-500 border-solid flex sm:flex-1 flex-col gap-8 h-[468px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[395px] sm:w-full">
                <div className="flex flex-col items-start justify-start w-[332px]">
                  <div className="flex flex-col gap-4 items-start justify-start w-[332px]">
                    <Text
                      className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px] w-auto"
                      size="txtRalewayRomanSemiBold32"
                    >
                      🚂 Biz dev
                    </Text>
                    <Text
                      className="leading-[30.00px] max-w-[332px] md:max-w-full text-[19px] text-white-A700_99 tracking-[0.20px]"
                      size="txtInterRegular19"
                    >
                      The Biz Dev Veteran helps project developers by providing
                      assistance in generating business opportunities and
                      achieving growth objectives. Simply submit a pull request
                      to request support with partnership, account management,
                      or any other business development needs.
                    </Text>
                  </div>
                </div>
                <Button className="bg-indigo-600 capitalize cursor-pointer font-medium min-w-[170px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  Biz Dev Bounties
                </Button>
              </div>
              <div className="bg-black-900_01 flex sm:flex-1 flex-col gap-8 h-[468px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[389px] sm:w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px] w-auto"
                      size="txtRalewayRomanSemiBold32"
                    >
                      💼 Operations
                    </Text>
                    <Text
                      className="leading-[30.00px] max-w-[332px] md:max-w-full text-[19px] text-white-A700_99 tracking-[0.20px]"
                      size="txtInterRegular19"
                    >
                      <>
                        Level up your ideas! Our Operation Veteran is here to
                        turn your suggestions into successes. Submit a pull
                        request to propose and discuss improvements for our
                        platform, products, and processes. Let&#39;s make zero
                        become hero together!
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Button className="bg-indigo-600 capitalize cursor-pointer font-medium min-w-[199px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    Operations Bounties
                  </Button>
                </div>
              </div>
              <div className="bg-black-900_01 flex sm:flex-1 flex-col h-[468px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-[429px] sm:w-full">
                <div className="flex flex-col gap-4 h-full items-start justify-between w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px] w-auto"
                      size="txtRalewayRomanSemiBold32"
                    >
                      💻 Finance
                    </Text>
                    <Text
                      className="leading-[160.00%] max-w-[332px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      Get professional finance assistance with ease! Our Finance
                      Veteran is here to support you in areas like financial
                      forecasting, accounting, and more. Just submit a pull
                      request, and unlock their expertise to elevate your
                      financial endeavors.
                    </Text>
                  </div>
                  <Button
                    className="common-pointer bg-indigo-600 capitalize cursor-pointer font-medium min-w-[173px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]"
                    onClick={() => navigate("/myaccountdeveloper")}
                  >
                    Finance Bounties
                  </Button>
                </div>
              </div>
            </div>
          </List>
          <div className="flex flex-col font-inter gap-[43px] items-center justify-start max-w-[1263px] mt-14 mx-auto md:px-5 py-[63px] w-full">
            <div className="flex flex-col gap-[26px] items-center justify-start p-1">
              <Text
                className="sm:text-[23px] md:text-[25px] text-[27px] text-center text-white-A700 tracking-[0.28px]"
                size="txtInterMedium27"
              >
                Questions?
              </Text>
              <Text
                className="mb-1.5 text-[19px] text-center text-white-A700"
                size="txtInterRegular19WhiteA700"
              >
                Connect with the CodeX community and get help.
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-start mb-[7px] md:px-10 sm:px-5 px-[434px] w-full">
              <div className="bg-light_blue-A700 border border-light_blue-A700 border-solid flex sm:flex-1 flex-row items-center justify-center p-[15px] rounded-[10px] w-[46%] sm:w-full">
                <Img
                  className="h-[15px] ml-[15px] w-[15px]"
                  src="images/img_discordmenusvg.svg"
                  alt="discordmenusvg"
                />
                <Text
                  className="ml-3.5 text-center text-sm text-white-A700_01 tracking-[1.80px] uppercase"
                  size="txtInterMedium14"
                >
                  Discord
                </Text>
                <Img
                  className="h-3 ml-[11px] mr-[5px]"
                  src="images/img_arrowright_white_a700_01.svg"
                  alt="arrowright"
                />
              </div>
              <div className="border border-solid border-white-A700_01 flex sm:flex-1 flex-row items-center justify-center p-[15px] rounded-[10px] w-[49%] sm:w-full">
                <Img
                  className="h-[15px] ml-[15px] w-[15px]"
                  src="images/img_airplane.svg"
                  alt="airplane"
                />
                <Text
                  className="ml-4 text-[13px] text-center text-white-A700_01 tracking-[1.80px] uppercase"
                  size="txtInterMedium13"
                >
                  Telegram
                </Text>
                <Img
                  className="h-3 ml-[11px] mr-[5px]"
                  src="images/img_arrowright_white_a700_01.svg"
                  alt="arrowright_One"
                />
              </div>
            </div>
          </div>
          <List
            className="flex flex-col font-inter gap-[1390px] items-center mt-14 w-full"
            orientation="vertical"
          >
            <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-1 flex-col gap-8 items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-4 w-full" />
            <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-1 flex-col gap-8 items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-4 w-full" />
          </List>
        </div>
      </div>
    </>
  );
};

export default HomepagecontributorPage;
