import React from "react";

import { Button, Img, List, Text } from "components";
import BlogCard from "components/BlogCard";
import CreateTokenHomepageFooterexplorer from "components/CreateTokenHomepageFooterexplorer";
import Header from "components/Header";

const BlogPage: React.FC = () => {
  const blogCardPropList = [
    {},
    {
      tokentreasur2: "Foundations",
      description:
        "Les how to deploy your DAO on Polygon, ing your DAO members time and money",
      howtointeract: "How to create DAO proposals with the Aragon App",
      scale: "start",
    },
    {
      howtointeract: "How to create DAO proposals with the Aragon App",
      tokentreasur2: "Governance & Coordination",
    },
    {
      description:
        "DAO governance tokens are used by organizations to vote on decisions Leam how to mint them for your DAO!",
      howtointeract: "How to mint DAO governance tokens with the Aragon App",
    },
    {
      tokentreasur2: "Foundations",
      description:
        "Multisige are a common voting choice for many DAOS because of the ease of use and simplicity Learn",
      howtointeract: "How to create a multisig with the Aragon App",
      scale: "start",
    },
    {
      tokentreasur2: "Governance & Coordination",
      description:
        "In this guide, we cover how to build a pluginan Aragon OSX, so that your DAO and all other DAOS built on Aragon OSX can use it!",
      howtointeract: "How to Build a DAO Plugin using Aragon OSX",
      scale: "evolve",
    },
    {
      howtointeract: "How to build a DAO brand identity",
      tokentreasur2: "Beyond the Blockchain",
      description:
        "From the ENS subdomain you choose to the logo you set, branding is a crucial part of building your DAO and a key component of the Aragon App.",
    },
    {
      tokentreasur2: "Foundations",
      description:
        "Multisige are a common voting choice for many DAOS because of the ease of use and simplicity Learn",
      howtointeract: "How to create a multisig with the Aragon App",
      scale: "start",
    },
    {
      tokentreasur2: "Governance & Coordination",
      description:
        "In this guide, we cover how to build a pluginan Aragon OSX, so that your DAO and all other DAOS built on Aragon OSX can use it!",
      howtointeract: "How to Build a DAO Plugin using Aragon OSX",
      scale: "evolve",
    },
  ];

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-start justify-end w-full">
          <Header className="bg-black-900_cc flex md:flex-col md:gap-10 items-center justify-between px-20 md:px-5 w-full" />
          <div className="md:h-[600px] h-[668px] md:px-5 relative w-full">
            <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[59%]">
              <Img
                className="h-[600px] md:h-auto object-cover w-full"
                src="images/img_fixdesignanimation.png"
                alt="fixdesignanimat"
              />
            </div>
            <div className="absolute flex flex-col gap-8 items-center justify-center max-w-[660px] px-4 py-20 right-[6%] top-[5%] w-full">
              <Text
                className="capitalize leading-[140.00%] max-w-[628px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
                size="txtRalewayRomanSemiBold48"
              >
                <>Explore the N0-Code builder&#39;s library</>
              </Text>
              <Text
                className="leading-[160.00%] max-w-[628px] md:max-w-full text-white-A700 text-xl tracking-[1.00px]"
                size="txtRalewayRomanSemiBold20WhiteA700"
              >
                Resources for No-Code builders at every stage of the process.
              </Text>
            </div>
            <div className="absolute bg-black-900 bottom-[0] flex flex-col gap-4 inset-x-[0] items-center justify-start mx-auto w-auto md:w-full">
              <div className="flex flex-col items-start justify-center md:px-10 px-20 sm:px-5 w-full">
                <Text
                  className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[2.00px] w-auto"
                  size="txtRalewayRomanSemiBold40"
                >
                  how to build
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-black-900 flex flex-col items-start justify-center max-w-[1440px] md:px-10 px-20 sm:px-5 py-2 w-full">
                    <div className="flex flex-col items-start justify-center py-2 w-full">
                      <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-auto">
                        <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[43px] py-[13px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                          All
                        </Button>
                        <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[113px] py-[13px] rounded-lg text-base text-center text-gray-500 tracking-[0.80px]">
                          foundation
                        </Button>
                        <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[214px] py-[13px] rounded-lg text-base text-center text-gray-500 tracking-[0.80px]">
                          Beyond the blockchain
                        </Button>
                        <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[162px] py-[13px] rounded-lg text-base text-center text-gray-500 tracking-[0.80px]">
                          token & treasury
                        </Button>
                        <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[248px] py-[13px] rounded-lg text-base text-center text-gray-500 tracking-[0.80px]">
                          Governance & Coordination
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1741px] md:h-[2939px] sm:h-[5487px] mt-16 md:px-5 relative w-full">
            <Img
              className="h-[5px] mt-3.5 mx-auto"
              src="images/img_group19.svg"
              alt="vector"
            />
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-start m-auto w-auto md:w-full">
              <div className="md:gap-5 gap-[49px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {blogCardPropList.map((props, index) => (
                  <React.Fragment key={`BlogCard${index}`}>
                    <BlogCard
                      className="bg-black-900_01 flex flex-1 flex-col gap-12 h-[559px] md:h-auto items-start justify-between pb-8 pt-4 px-4 rounded-lg w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[110px] items-end justify-end md:ml-[0] ml-[248px] mt-40 md:px-5 w-[78%] md:w-full">
            <div className="flex flex-col items-start justify-start md:px-10 px-20 sm:px-5 w-auto md:w-full">
              <Text
                className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 tracking-[2.40px] w-auto"
                size="txtRalewayRomanSemiBold48"
              >
                Meet our team of DAO experts.
              </Text>
            </div>
            <a
              href="javascript:"
              className="capitalize mb-[3px] md:mt-0 mt-11 text-base text-light_blue-500 tracking-[0.80px]"
            >
              <Text size="txtRalewayRomanSemiBold16Lightblue500">see all</Text>
            </a>
          </div>
          <div className="flex flex-col md:gap-10 gap-64 justify-start mt-16 overflow-auto w-full">
            <div className="flex md:flex-col flex-row gap-5 h-[400px] md:h-auto items-start justify-start ml-24 md:ml-[0] md:px-5 w-auto md:w-full">
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-1/2 md:w-full"
                orientation="horizontal"
              >
                <div className="bg-black-900_01 border border-light_blue-500 border-solid flex flex-col gap-8 h-[400px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[406px] sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-8 items-center justify-start w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_637df385343a8f0.png"
                        alt="637df385343a8fZero"
                      />
                      <Text
                        className="capitalize flex-1 text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        LexDAO
                      </Text>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[342px] md:max-w-full text-base text-white-A700_99 tracking-[0.80px]"
                      size="txtRalewayRomanMedium16WhiteA70099"
                    >
                      LexDAO is a non-profit DAO that provides legal engineering
                      services to push the ecosystem forward. They advise
                      projects on how to develop tech-based solutions for legal
                      needs.
                    </Text>
                  </div>
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[90px] py-3 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                    Legal
                  </Button>
                </div>
                <div className="bg-black-900_01 flex flex-col gap-8 h-[400px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[420px] sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-8 items-center justify-start w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_6412d438b35697a.png"
                        alt="6412d438b35697a"
                      />
                      <Text
                        className="capitalize flex-1 text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        TOKU
                      </Text>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[356px] md:max-w-full text-base text-white-A700_99 tracking-[0.80px]"
                      size="txtRalewayRomanMedium16WhiteA70099"
                    >
                      Toku is a global solution for token compensation and tax
                      compliance. They simplify token compensation and tax
                      compliance globally.
                    </Text>
                  </div>
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[219px] py-3 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                    Human Resources
                  </Button>
                </div>
                <div className="bg-black-900_01 flex flex-col gap-8 h-[400px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[413px] sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-8 items-center justify-start w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_637df3650c998de.png"
                        alt="637df3650c998de"
                      />
                      <Text
                        className="capitalize flex-1 text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        Exponent
                      </Text>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[349px] md:max-w-full text-base text-white-A700_99 tracking-[0.80px]"
                      size="txtRalewayRomanMedium16WhiteA70099"
                    >
                      Exponent is a team of web3 treasury managers that help
                      your DAO scale capital management effectively and without
                      compromise. They provide FinOps risk mitigation and
                      automated treasury services.
                    </Text>
                  </div>
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[121px] py-3 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                    Treasury
                  </Button>
                </div>
              </List>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 h-[400px] justify-start w-auto md:w-full"
                orientation="horizontal"
              >
                <div className="bg-black-900_01 flex flex-col gap-8 h-[400px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[413px] sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-8 items-center justify-start w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_637df358f5021fd.png"
                        alt="637df358f5021fd"
                      />
                      <Text
                        className="capitalize flex-1 text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        Bankless Consulting
                      </Text>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[349px] md:max-w-full text-base text-white-A700_99 tracking-[0.80px]"
                      size="txtRalewayRomanMedium16WhiteA70099"
                    >
                      BC is a web3-native strategy-to-execution consulting firm
                      that offers marketing, token design, full-stack
                      development, governance design, community management, DAO
                      formation, NFT creation, and educational services.
                    </Text>
                  </div>
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[153px] py-2 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                    full Service
                  </Button>
                </div>
                <div className="bg-black-900_01 flex flex-col gap-8 h-[400px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[406px] sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-8 items-center justify-start w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_637df346ff345bf.png"
                        alt="637df346ff345bf"
                      />
                      <Text
                        className="capitalize flex-1 text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        Blossom Labs
                      </Text>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[342px] md:max-w-full text-base text-white-A700_99 tracking-[0.80px]"
                      size="txtRalewayRomanMedium16WhiteA70099"
                    >
                      Blossom Labs is a developer team that specializes in
                      blockchain-based infrastructure for online communities.
                      They build custom Aragon Apps, create DAO architecture and
                      modifications, and provide free software and guides to
                      modify your DAO.
                    </Text>
                  </div>
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[108px] py-2 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                    tooling
                  </Button>
                </div>
                <div className="bg-black-900_01 flex flex-col gap-8 h-[400px] md:h-auto items-start justify-between p-8 sm:px-5 rounded-lg w-[420px] sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-8 items-center justify-start w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_637df3732850db8.png"
                        alt="637df3732850dbEight"
                      />
                      <Text
                        className="capitalize flex-1 text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        General Magic
                      </Text>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[356px] md:max-w-full text-base text-white-A700_99 tracking-[0.80px]"
                      size="txtRalewayRomanMedium16WhiteA70099"
                    >
                      General Magic offers solution services for impact DAOs.
                      Their mission is to make magic happen by helping
                      crypto-philanthropic organizations and communities reach
                      their full potential.
                    </Text>
                  </div>
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[153px] py-2 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                    full service
                  </Button>
                </div>
              </List>
            </div>
            <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-col font-inter gap-8 items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-4 w-full" />
          </div>
          <CreateTokenHomepageFooterexplorer className="bg-gray-900 flex flex-col font-inter gap-8 items-center justify-start max-w-[1440px] mt-[1390px] md:px-10 px-20 sm:px-5 py-4 w-full" />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
