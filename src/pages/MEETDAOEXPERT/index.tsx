import React from "react";

import { Button, Img, List, Text } from "components";
import CodeXDAOGovernanceOneRowframe370831 from "components/CodeXDAOGovernanceOneRowframe370831";
import CreateTokenHomepageFooterexplorer from "components/CreateTokenHomepageFooterexplorer";

const MEETDAOEXPERTPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-start justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="md:h-[1391px] sm:h-[817px] h-[897px] md:px-5 relative w-full">
            <div className="md:h-[1391px] sm:h-[817px] h-[897px] m-auto w-full">
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="h-[600px] md:h-[817px] mb-[217px] relative w-[59%] md:w-full">
                    <Img
                      className="h-[600px] m-auto object-cover w-full"
                      src="images/img_fixdesignanimation.png"
                      alt="fixdesignanimat"
                    />
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[1%] flex flex-row h-1 items-center justify-center right-[16%] w-[1%]"
                      style={{
                        backgroundImage: "url('images/img_group19.svg')",
                      }}
                    >
                      <div
                        className="bg-cover bg-no-repeat flex flex-row h-1 items-center justify-evenly w-full"
                        style={{
                          backgroundImage: "url('images/img_group19.svg')",
                        }}
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
                    className="h-[534px] md:h-auto md:mt-0 mt-[283px] object-cover rounded-[16px]"
                    src="images/img_polygon2.png"
                    alt="polygonTwo"
                  />
                </div>
              </div>
              <div className="absolute bottom-[0] flex flex-col gap-4 inset-x-[0] items-center justify-start mx-auto w-auto md:w-full">
                <div className="flex flex-col items-start justify-center md:px-10 px-20 sm:px-5 w-full">
                  <Text
                    className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 tracking-[2.00px] w-auto"
                    size="txtRalewayRomanSemiBold40"
                  >
                    Meet our team of DAO experts.
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-center max-w-[1440px] md:px-10 px-20 sm:px-5 py-2 w-full">
                      <div className="flex flex-col items-start justify-center py-2 w-full">
                        <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-auto">
                          <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[43px] py-[13px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                            All
                          </Button>
                          <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[66px] py-[13px] rounded-lg text-base text-center text-gray-500 tracking-[0.80px]">
                            legal
                          </Button>
                          <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[117px] py-[13px] rounded-lg text-base text-center text-gray-500 tracking-[0.80px]">
                            full service
                          </Button>
                          <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[170px] py-[13px] rounded-lg text-base text-center text-gray-500 tracking-[0.80px]">
                            human resources
                          </Button>
                          <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[92px] py-[13px] rounded-lg text-base text-center text-gray-500 tracking-[0.80px]">
                            treasury
                          </Button>
                          <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[81px] py-[13px] rounded-lg text-base text-center text-gray-500 tracking-[0.80px]">
                            tooling
                          </Button>
                          <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[210px] py-[13px] rounded-lg text-base text-center text-gray-500 tracking-[0.80px]">
                            design & development
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[314px] left-[0] object-cover rounded-[16px] top-[0]"
                src="images/img_polygon1.png"
                alt="polygonOne"
              />
            </div>
            <div className="absolute flex flex-col gap-8 items-center justify-center max-w-[660px] px-4 py-20 right-[6%] top-[19%] w-full">
              <Text
                className="capitalize leading-[140.00%] max-w-[628px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
                size="txtRalewayRomanSemiBold48"
              >
                Find the right DAO expert for your needs
              </Text>
              <Text
                className="leading-[160.00%] max-w-[628px] md:max-w-full text-white-A700_e5 text-xl tracking-[1.00px]"
                size="txtRalewayRomanSemiBold20WhiteA700e5"
              >
                Work with DAO experts to create a DAO that meets your specific
                needs.
              </Text>
            </div>
            <CodeXDAOGovernanceOneRowframe370831 className="absolute bg-black-900_cc flex md:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between max-w-[1440px] mx-auto md:px-10 px-20 sm:px-5 top-[0] w-full" />
          </div>
        </div>
        <div className="flex flex-col items-end mt-4 md:px-10 px-20 sm:px-5 w-full">
          <a
            href="javascript:"
            className="capitalize text-base text-light_blue-500 tracking-[0.80px]"
          >
            <Text size="txtRalewayRomanSemiBold16Lightblue500">see all</Text>
          </a>
        </div>
        <div className="flex flex-col md:gap-10 gap-[159px] items-center mt-[19px] w-full">
          <div className="flex h-[1696px] md:h-[2092px] sm:h-[4688px] justify-end md:px-5 relative w-full">
            <Img
              className="h-[639px] mb-[280px] mt-auto object-cover rounded-[16px]"
              src="images/img_polygon2.png"
              alt="polygonThree"
            />
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto max-w-[1440px] md:px-10 px-20 sm:px-5 w-full">
              <div className="gap-16 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="bg-black-900_01 flex flex-1 flex-col gap-8 h-full items-start justify-between p-8 sm:px-5 rounded-lg w-full">
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
                      className="leading-[160.00%] md:max-w-full max-w-xs text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      LexDAO is a non-profit DAO that provides legal engineering
                      services to push the ecosystem forward. They advise
                      projects on how to develop tech-based solutions for legal
                      needs.
                    </Text>
                  </div>
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[78px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    Legal
                  </Button>
                </div>
                <div className="bg-black-900_01 flex flex-1 flex-col gap-8 h-full items-start justify-between p-8 sm:px-5 rounded-lg w-full">
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
                      className="leading-[160.00%] md:max-w-full max-w-xs text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      Toku is a global solution for token compensation and tax
                      compliance. They simplify token compensation and tax
                      compliance globally.
                    </Text>
                  </div>
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[181px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    Human Resources
                  </Button>
                </div>
                <div className="bg-black-900_01 flex flex-1 flex-col gap-8 h-full items-start justify-between p-8 sm:px-5 rounded-lg w-full">
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
                      className="leading-[160.00%] md:max-w-full max-w-xs text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      Exponent is a team of web3 treasury managers that help
                      your DAO scale capital management effectively and without
                      compromise. They provide FinOps risk mitigation and
                      automated treasury services.
                    </Text>
                  </div>
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[103px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    Treasury
                  </Button>
                </div>
                <div className="bg-black-900_01 flex flex-1 flex-col gap-8 h-full items-start justify-between p-8 sm:px-5 rounded-lg w-full">
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
                      className="leading-[160.00%] md:max-w-full max-w-xs text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      BC is a web3-native strategy-to-execution consulting firm
                      that offers marketing, token design, full-stack
                      development, governance design, community management, DAO
                      formation, NFT creation, and educational services.
                    </Text>
                  </div>
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[128px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    full Service
                  </Button>
                </div>
                <div className="bg-black-900_01 flex flex-1 flex-col gap-8 h-full items-start justify-between p-8 sm:px-5 rounded-lg w-full">
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
                      className="leading-[160.00%] md:max-w-full max-w-xs text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      Blossom Labs is a developer team that specializes in
                      blockchain-based infrastructure for online communities.
                      They build custom Aragon Apps, create DAO architecture and
                      modifications, and provide free software and guides to
                      modify your DAO.
                    </Text>
                  </div>
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[92px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    tooling
                  </Button>
                </div>
                <div className="bg-black-900_01 flex flex-1 flex-col gap-8 h-full items-start justify-between p-8 sm:px-5 rounded-lg w-full">
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
                      className="leading-[160.00%] md:max-w-full max-w-xs text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      General Magic offers solution services for impact DAOs.
                      Their mission is to make magic happen by helping
                      crypto-philanthropic organizations and communities reach
                      their full potential.
                    </Text>
                  </div>
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[128px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    full service
                  </Button>
                </div>
                <div className="bg-black-900_01 flex flex-1 flex-col gap-8 h-full items-start justify-between p-8 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-8 items-center justify-start w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_637df37dca19c0e.png"
                        alt="637df37dca19c0e"
                      />
                      <Text
                        className="capitalize flex-1 text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        IndieDAO
                      </Text>
                    </div>
                    <Text
                      className="leading-[160.00%] md:max-w-full max-w-xs text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      IndieDAO offers professional design and development
                      services to teams that need expert help. They have smart
                      designers, smart developers, and smart contracts.
                    </Text>
                  </div>
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[203px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    design & developers
                  </Button>
                </div>
                <div className="bg-black-900_01 flex flex-1 flex-col gap-8 h-full items-start justify-between p-8 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-8 items-center justify-start w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_637df391f5021f4.png"
                        alt="637df391f5021fFour"
                      />
                      <Text
                        className="capitalize flex-1 text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        Opolis
                      </Text>
                    </div>
                    <Text
                      className="leading-[160.00%] md:max-w-full max-w-xs text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      Opolis is a member-owned digital employment cooperative
                      that offers crypto-friendly payroll, employment benefits,
                      tokenized rewards, and membership perks to independent
                      workers in both web2 and web3.
                    </Text>
                  </div>
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[181px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    Human Resources
                  </Button>
                </div>
                <div className="bg-black-900_01 flex flex-1 flex-col gap-8 h-full items-start justify-between p-8 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-8 items-center justify-start w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_637df3a5d93444d.png"
                        alt="637df3a5d93444d"
                      />
                      <Text
                        className="capitalize flex-1 text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        Otoco
                      </Text>
                    </div>
                    <Text
                      className="leading-[160.00%] md:max-w-full max-w-xs text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      Otoco creates on-chain companies and legal solutions for
                      web3 builders, including Delaware and Wyoming-based LLCs,
                      a legal document library, tools for signing documents,
                      fundraising, and more.
                    </Text>
                  </div>
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[78px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    legal
                  </Button>
                </div>
                <div className="bg-black-900_01 flex flex-1 flex-col gap-8 h-full items-start justify-between p-8 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-8 items-center justify-start w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_637df3b0eabf247.png"
                        alt="637df3b0eabf247"
                      />
                      <Text
                        className="capitalize flex-1 text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        Solidity Guild
                      </Text>
                    </div>
                    <Text
                      className="leading-[160.00%] md:max-w-full max-w-xs text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      Solidity Guild is a collective of web3 developers that
                      provide Solidity smart contract development, tokenomics
                      design, auditing, and full-stack app development.
                    </Text>
                  </div>
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[203px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    design & developers
                  </Button>
                </div>
                <div className="bg-black-900_01 flex flex-1 flex-col gap-8 h-full items-start justify-between p-8 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-8 items-center justify-start w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_637df3bf9f3c790.png"
                        alt="637df3bf9f3c790"
                      />
                      <Text
                        className="capitalize flex-1 text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        Twali
                      </Text>
                    </div>
                    <Text
                      className="leading-[160.00%] md:max-w-full max-w-xs text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      Twall supports web projects with curated expertise and
                      execution across a range of non-technical verticals, such
                      as compliance, legal, accounting, tax, marketing,
                      tokenomics, and more. The revolution will be quite boring
                      without them.
                    </Text>
                  </div>
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[128px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    full service
                  </Button>
                </div>
                <div className="bg-black-900_01 flex flex-1 flex-col gap-8 h-full items-start justify-between p-8 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-8 items-center justify-start w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_637df20e2ccaf6f.png"
                        alt="637df20e2ccaf6f"
                      />
                      <Text
                        className="capitalize flex-1 text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        Weezi
                      </Text>
                    </div>
                    <Text
                      className="leading-[160.00%] md:max-w-full max-w-xs text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      Weezi offers multi-wallet cross-chain DAO tooling for
                      asset management with automated accounting.
                    </Text>
                  </div>
                  <Button className="bg-light_blue-500 capitalize cursor-pointer font-medium min-w-[92px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                    tooling
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <List
            className="flex flex-col font-inter gap-[1390px] items-center w-full"
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

export default MEETDAOEXPERTPage;
