import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import NOCODENFTBLOCKCHAINColumnframe371101 from "components/NOCODENFTBLOCKCHAINColumnframe371101";

const NOCODENFTBLOCKCHAINPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway gap-[37px] justify-end mx-auto py-[107px] w-full">
        <Text
          className="capitalize ml-20 md:ml-[0] mr-[1139px] mt-[9px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
          size="txtRalewayRomanSemiBold48"
        >
          no-code
        </Text>
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <NOCODENFTBLOCKCHAINColumnframe371101 className="bg-black-900 flex flex-col items-center justify-start md:px-10 px-20 sm:px-5 py-4 w-auto md:w-full" />
            <Text
              className="capitalize md:ml-[0] ml-[571px] mt-[67px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px]"
              size="txtRalewayRomanSemiBold32WhiteA700"
            >
              Select blockchain
            </Text>
            <div className="flex flex-col items-start justify-start max-w-[1440px] mt-[35px] md:px-10 px-20 sm:px-5 w-full">
              <div className="bg-black-900 flex flex-col items-center justify-start max-w-7xl mx-auto p-8 md:px-5 rounded-lg shadow-bs2 w-full">
                <List
                  className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                    <div
                      className="common-pointer bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full"
                      onClick={() => navigate("/nocodenftgeneralinfo")}
                    >
                      <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                        <Button className="bg-black-900_01 flex h-12 items-center justify-center p-1.5 rounded-[50%] w-12">
                          <Img
                            className="h-[33px]"
                            src="images/img_codex11.png"
                            alt="frame370829"
                          />
                        </Button>
                      </div>
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        codex mainnet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062.png"
                        alt="frame371062"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        tron mainnet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_48x48.png"
                        alt="frame371062_One"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        etherium mainnet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_1.png"
                        alt="frame371062_Two"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        polygon mainnet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_2.png"
                        alt="frame371062_Three"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        arbritrum nova
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_3.png"
                        alt="frame371062_Four"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        fantom opera mainnet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_4.png"
                        alt="frame371062_Five"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        kava
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_5.png"
                        alt="frame371062_Six"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        moonbin mainnet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_6.png"
                        alt="frame371062_Seven"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        moonriver{" "}
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_7.png"
                        alt="frame371062_Eight"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        optimism
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_8.png"
                        alt="frame371062"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        arbritrum mainnet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_9.png"
                        alt="frame371062_One"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        avalanche mainnet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_10.png"
                        alt="frame371062_Two"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        BSC Mainnet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_11.png"
                        alt="frame371062_Three"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        cello
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_12.png"
                        alt="frame371062_Four"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        cronos mainnet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_13.png"
                        alt="frame371062_Five"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        fuse
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_14.png"
                        alt="frame371062_Six"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        gnosis
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_15.png"
                        alt="frame371062_Seven"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        harmony
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_16.png"
                        alt="frame371062_Eight"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        metis
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_17.png"
                        alt="frame371062_Nine"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20WhiteA700"
                      >
                        telos EVM
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-row gap-8 items-start justify-start md:ml-[0] ml-[1220px] mt-[99px] md:px-5 w-auto">
              <Button className="border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[72px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
                back
              </Button>
              <Button
                className="common-pointer bg-gradient  capitalize cursor-pointer font-semibold min-w-[70px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
                onClick={() => navigate("/nocodenftfeatures")}
              >
                next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NOCODENFTBLOCKCHAINPage;
