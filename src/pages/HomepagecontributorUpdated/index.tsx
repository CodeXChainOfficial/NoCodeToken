import React from "react";

import { Button, Img, List, Text } from "components";
import CodeXDAOGovernanceOneRowframe370831 from "components/CodeXDAOGovernanceOneRowframe370831";
import CreateTokenHomepageFooterexplorer from "components/CreateTokenHomepageFooterexplorer";
import HomePageCodexAppColumnonboard from "components/HomePageCodexAppColumnonboard";

const HomepagecontributorUpdatedPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-start justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="h-[1049px] md:h-[647px] sm:h-[983px] mx-auto w-full">
              <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[362px] items-center justify-start left-[0] w-[95%]">
                <div className="flex relative w-full">
                  <div className="flex flex-col items-center justify-start my-auto w-[62%]">
                    <Img
                      className="h-[600px] md:h-auto object-cover w-full"
                      src="images/img_fixdesignanimation.png"
                      alt="fixdesignanimat"
                    />
                  </div>
                  <div className="flex flex-col gap-8 items-start justify-center max-w-[660px] mb-[21px] ml-[-140px] mt-auto px-4 py-20 w-full z-[1]">
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
                      collaborating, guiding others, and sharing knowledge. Earn
                      recognition and rewards based on your valuable
                      contributions.
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-auto sm:w-full">
                      <Button className="bg-gradient  capitalize cursor-pointer font-semibold min-w-[240px] py-5 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                        Current Bounties
                      </Button>
                      <div className="border border-light_blue-500 border-solid flex flex-col items-center justify-start sm:px-5 px-8 py-4 rounded-lg w-auto">
                        <Text
                          className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                          size="txtRalewayRomanSemiBold20WhiteA700"
                        >
                          Leaderboard
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-row h-[7px] items-center justify-center w-[1%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group2.svg')" }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-row h-[7px] items-center justify-evenly w-full"
                    style={{ backgroundImage: "url('images/img_group2.svg')" }}
                  >
                    <Img
                      className="h-[7px]"
                      src="images/img_group2.svg"
                      alt="vector"
                    />
                  </div>
                </div>
              </div>
              <Img
                className="absolute bottom-[14%] h-[534px] object-cover right-[0] rounded-[16px]"
                src="images/img_polygon2.png"
                alt="polygonTwo"
              />
              <Text
                className="absolute bottom-[23%] capitalize inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[2.00px] w-max"
                size="txtRalewayRomanSemiBold40"
              >
                How does it work?{" "}
              </Text>
              <Img
                className="absolute h-[231px] left-[0] object-cover rounded-[16px] top-[0]"
                src="images/img_polygon1.png"
                alt="polygonOne"
              />
            </div>
            <List
              className="sm:flex-col flex-row font-inter gap-[39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start mt-[-177.52px] mx-auto md:px-10 px-20 sm:px-5 w-auto z-[1]"
              orientation="horizontal"
            >
              <HomePageCodexAppColumnonboard
                className="bg-black-900_01 flex flex-col gap-8 h-[533px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-auto sm:w-full"
                editimage="images/img_edit.svg"
              />
              <div className="bg-black-900_01 flex flex-col gap-8 h-[533px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-auto sm:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-row gap-4 items-start justify-between w-full">
                    <div className="bg-gradient1  flex flex-col h-24 items-center justify-start p-[7px] rounded-[16px] w-24">
                      <Img
                        className="h-20 w-20"
                        src="images/img_frame371356.svg"
                        alt="frame371356"
                      />
                    </div>
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
                className="bg-black-900_01 flex flex-col gap-8 h-[533px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-auto sm:w-full"
                registertext="Get reward"
              />
            </List>
            <CodeXDAOGovernanceOneRowframe370831 className="bg-black-900_cc flex md:flex-col flex-row font-raleway md:gap-10 items-center justify-between max-w-[1440px] mt-[-NaNpx] mx-auto md:px-10 px-20 sm:px-5 w-full z-[1]" />
          </div>
        </div>
        <Text
          className="capitalize md:ml-[0] ml-[475px] mt-[166px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px]"
          size="txtRalewayRomanSemiBold32WhiteA700"
        >
          the 4 level Programming{" "}
        </Text>
        <div className="flex flex-col items-end mt-8 md:px-10 sm:px-5 px-[74px] w-full">
          <div className="flex flex-col items-center justify-end py-[3px]">
            <a
              href="javascript:"
              className="capitalize text-base text-light_blue-500 tracking-[0.80px]"
            >
              <Text size="txtRalewayRomanSemiBold16Lightblue500">see all</Text>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 w-full">
          <div className="md:h-[1380px] sm:h-[772px] h-[798px] md:px-5 relative w-full">
            <Img
              className="h-[639px] mt-7 object-cover rounded-[16px]"
              src="images/img_polygon2.png"
              alt="polygonThree"
            />
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-start m-auto max-w-[1440px] md:px-10 px-20 sm:px-5 w-full">
              <div className="gap-16 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="bg-black-900_01 flex flex-1 flex-col md:gap-10 gap-16 h-[380px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <Text
                        className="bg-gradient1  capitalize flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12"
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
                      CodeX, you can create applications effortlessly by simply
                      filling out a form, choosing from a variety of pre-built
                      functionalities provided in the templates.
                    </Text>
                  </div>
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[144px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    start to build
                  </Button>
                </div>
                <div className="bg-black-900_01 flex flex-1 flex-col md:gap-10 gap-16 h-[380px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <Text
                        className="bg-gradient1  capitalize flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12"
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
                        The flow level is for creating complex applications with
                        multiple steps, decision-making, and integration with
                        external services. Use flowcharts to define the logical
                        structure, with each block representing a task or
                        decision. Customize your application&#39;s appearance,
                        add content, and define workflows easily.
                      </>
                    </Text>
                  </div>
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[144px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    start to build
                  </Button>
                </div>
                <div className="bg-black-900_01 flex flex-1 flex-col md:gap-10 gap-16 h-[354px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <Text
                        className="bg-gradient1  capitalize flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12"
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
                      Code translation converts source code from one programming
                      language to another seamlessly. Easily translate Solidity,
                      Rush, C, and more languages without starting from scratch.
                      The translated code can be converted to a flowchart in
                      Level 1.
                    </Text>
                  </div>
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[144px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    start to build
                  </Button>
                </div>
                <div className="bg-black-900_01 flex flex-1 flex-col md:gap-10 gap-16 items-start justify-start p-8 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <Text
                        className="bg-gradient1  capitalize flex h-12 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-12"
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
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[144px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    start to build
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:h-[1018px] h-[1145px] sm:h-[1460px] mt-[166px] md:px-5 relative w-full">
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-[639px] items-end justify-start p-[100px] md:px-10 sm:px-5 right-[0] rounded-[16px] top-[6%] w-[22%]"
              style={{ backgroundImage: "url('images/img_polygon2.png')" }}
            >
              <div className="flex flex-col items-center justify-end mb-[377px] mt-9 py-[3px]">
                <a
                  href="javascript:"
                  className="capitalize text-base text-light_blue-500 tracking-[0.80px]"
                >
                  <Text size="txtRalewayRomanSemiBold16Lightblue500">
                    see all
                  </Text>
                </a>
              </div>
            </div>
            <List
              className="absolute sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-x-[0] justify-start max-w-[1440px] mx-auto md:px-10 px-20 sm:px-5 top-[23%] w-full"
              orientation="horizontal"
            >
              <div className="bg-black-900_01 flex sm:flex-1 flex-col gap-8 h-[412px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[397px] sm:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-4 items-start justify-start w-full">
                      <Img
                        className="h-12 w-12"
                        src="images/img_cut.svg"
                        alt="cut"
                      />
                      <Text
                        className="capitalize flex-1 md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px] w-auto"
                        size="txtRalewayRomanSemiBold32"
                      >
                        Design
                      </Text>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[333px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
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
                <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[165px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  Design Bounties
                </Button>
              </div>
              <div className="bg-black-900_01 flex sm:flex-1 flex-col gap-8 h-[412px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[397px] sm:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-4 items-start justify-start w-full">
                      <Img
                        className="h-12 w-12"
                        src="images/img_fluentarrowgrowth20filled.svg"
                        alt="fluentarrowgrow"
                      />
                      <Text
                        className="capitalize flex-1 md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px] w-auto"
                        size="txtRalewayRomanSemiBold32"
                      >
                        Growth
                      </Text>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[333px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      The Growth Veteran supports CodeX project developers in
                      expanding their community reach. Submit a pull request to
                      request assistance in promotional campaigns, growth
                      tactics, and social development.
                    </Text>
                  </div>
                </div>
                <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[168px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  Growth Bounties
                </Button>
              </div>
              <div className="bg-black-900_01 flex sm:flex-1 flex-col gap-8 h-[412px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[397px] sm:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-4 items-start justify-start w-full">
                      <Img
                        className="h-12 w-12"
                        src="images/img_fluentarrowgrowth20filled.svg"
                        alt="fluentarrowgrow"
                      />
                      <Text
                        className="capitalize flex-1 md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px] w-auto"
                        size="txtRalewayRomanSemiBold32"
                      >
                        {" "}
                        Copywriting
                      </Text>
                    </div>
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
                </div>
                <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[208px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  Copywriting bounties
                </Button>
              </div>
            </List>
            <List
              className="absolute bottom-[0] sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 h-[440px] inset-x-[0] justify-start max-w-[1440px] mx-auto md:px-10 px-20 sm:px-5 w-full"
              orientation="horizontal"
            >
              <div className="bg-black-900_01 flex sm:flex-1 flex-col gap-8 h-[440px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[397px] sm:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-4 items-start justify-start w-full">
                      <Img
                        className="h-12 w-12"
                        src="images/img_mdibusinessoutline.svg"
                        alt="mdibusinessoutl"
                      />
                      <Text
                        className="capitalize flex-1 md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px] w-auto"
                        size="txtRalewayRomanSemiBold32"
                      >
                        Biz dev
                      </Text>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[333px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      The Biz Dev Veteran helps project developers by providing
                      assistance in generating business opportunities and
                      achieving growth objectives. Simply submit a pull request
                      to request support with partnership, account management,
                      or any other business development needs.
                    </Text>
                  </div>
                </div>
                <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[170px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  Biz Dev Bounties
                </Button>
              </div>
              <div className="bg-black-900_01 flex sm:flex-1 flex-col gap-8 h-[440px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[397px] sm:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-4 items-start justify-start w-full">
                      <Img
                        className="h-12 w-12"
                        src="images/img_carbonoperationsrecord.svg"
                        alt="carbonoperation"
                      />
                      <Text
                        className="capitalize flex-1 md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px] w-auto"
                        size="txtRalewayRomanSemiBold32"
                      >
                        {" "}
                        Operations
                      </Text>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[333px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
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
                <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[199px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  Operations Bounties
                </Button>
              </div>
              <div className="bg-black-900_01 flex sm:flex-1 flex-col gap-8 h-[440px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[397px] sm:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-4 items-start justify-start w-full">
                      <Img
                        className="h-12 w-12"
                        src="images/img_home.svg"
                        alt="home"
                      />
                      <Text
                        className="capitalize flex-1 md:text-3xl sm:text-[28px] text-[32px] text-white-A700_e5 tracking-[1.60px] w-auto"
                        size="txtRalewayRomanSemiBold32"
                      >
                        Finance
                      </Text>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[333px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      Get professional finance assistance with ease! Our Finance
                      Veteran is here to support you in areas like financial
                      forecasting, accounting, and more. Just submit a pull
                      request, and unlock their expertise to elevate your
                      financial endeavors.
                    </Text>
                  </div>
                </div>
                <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[173px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  Finance Bounties
                </Button>
              </div>
            </List>
            <div className="absolute flex flex-col gap-8 items-center justify-start left-[21%] top-[0] w-auto">
              <Text
                className="capitalize sm:text-[31px] md:text-[33px] text-[35px] text-white-A700 tracking-[1.75px] w-auto"
                size="txtRalewayRomanSemiBold35"
              >
                Contribute to the Development of CodeX
              </Text>
              <Text
                className="leading-[30.00px] max-w-[719px] md:max-w-full text-center text-white-A700 text-xl"
                size="txtInterRegular20"
              >
                Not a developer? No problem! Contribute to our web 3 space
                through design, marketing, community management, and more. Help
                drive mass adoption and shape a decentralized future with us.
              </Text>
            </div>
          </div>
          <div className="bg-gradient2  flex flex-col gap-8 items-center justify-start max-w-[1440px] mt-[304px] pb-24 pt-8 md:px-10 px-20 sm:px-5 w-full">
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
          <List
            className="flex flex-col font-inter gap-[1390px] items-center mt-1.5 w-full"
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

export default HomepagecontributorUpdatedPage;
