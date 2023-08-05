import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import CommunitySignInCardbottom from "components/CommunitySignInCardbottom";
import Footer1 from "components/Footer1";
import Header2 from "components/Header2";

const CommunitysuccesauthentificationPage: React.FC = () => {
  const communitySignInCardbottomPropList = [
    {},
    {
      discussiontext: (
        <>
          Participate in open discussions across various threads, explore
          opportunities <br />
          to collaborate, and get more involved in projects building on Codex.
        </>
      ),
      discussionforum: "Discussion Forum",
      getinvolvedtext: "get involved",
    },
    {
      discussiontext:
        "Join our Telegram to chat with us directly, take part in our growing ecosystem.",
      discussionforum: "telegram",
      getinvolvedtext: "join us",
    },
  ];

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-center justify-start mx-auto w-full">
        <Header2 className="bg-gray-900_e5 flex md:flex-col md:gap-10 items-center justify-between px-20 md:px-5 shadow-bs1 w-full" />
        <div className="backdrop-opacity-[0.5] blur-[10.00px] md:h-[1227px] sm:h-[1520px] h-[957px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-start justify-start m-auto w-full">
            <div className="md:h-[609px] h-[617px] relative w-[95%] md:w-full">
              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[62%]">
                <Img
                  className="h-[600px] md:h-auto object-cover w-full"
                  src="images/img_fixdesignanimation.png"
                  alt="fixdesignanimat"
                />
              </div>
              <div className="absolute flex flex-col gap-8 h-full inset-y-[0] items-start justify-center max-w-[660px] my-auto px-4 py-20 right-[0] w-full">
                <Text
                  className="capitalize leading-[140.00%] max-w-[628px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
                  size="txtRalewayRomanSemiBold48"
                >
                  CodeX is designed for those who thrilled to not quit
                </Text>
                <Text
                  className="leading-[160.00%] lowercase max-w-[628px] md:max-w-full text-white-A700 text-xl tracking-[1.00px]"
                  size="txtRalewayRomanSemiBold20WhiteA700"
                >
                  The Codex community is a worldwide movement of developers,
                  node operators, educators, and other contributors building a
                  safer, user-ready, and widely accessible blockchain ecosystem.
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="bg-gradient  flex flex-col items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-auto">
                    <Text
                      className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                      size="txtRalewayRomanSemiBold20WhiteA700"
                    >
                      join the community
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[340px] md:h-[618px] sm:h-[911px] relative w-[1440px] md:w-full">
              <Line className="bg-gradient3  h-1.5 ml-auto w-[17%]" />
              <div className="absolute bg-black-900 flex flex-col h-full inset-[0] items-center justify-center m-auto max-w-[1440px] md:px-10 px-20 sm:px-5 py-8 w-full">
                <List
                  className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
                  orientation="horizontal"
                >
                  
                </List>
              </div>
            </div>
          </div>
          <div className="absolute bg-black-900_01 flex flex-col inset-x-[0] items-center justify-start max-w-[632px] mx-auto p-8 sm:px-5 rounded-[16px] top-[4%] w-full">
            <div className="flex flex-col items-start justify-center pb-8 pt-2 w-full">
              <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Text
                    className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                    size="txtRalewayRomanSemiBold24"
                  >
                    successful authentication
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_carbonclosefilled.svg"
                  alt="carbonclosefill"
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 items-end justify-start w-full">
              <div className="flex flex-col gap-8 items-center justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="capitalize text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                    size="txtRalewayRomanSemiBold24"
                  >
                    <span className="text-white-A700 font-raleway font-semibold">
                      Welcome,
                    </span>
                    <span className="text-deep_purple-A200 font-raleway font-semibold">
                      {" "}
                      jilly77#4374!
                    </span>
                  </Text>
                  <Input
                    name="frame371155"
                    placeholder="Successfully authenticated from Discord account."
                    className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:pr-5 text-left text-white-A700 text-xs tracking-[0.60px] w-full"
                    wrapClassName="bg-green-400_7f pb-2 pl-4 pr-[35px] pt-[11px] rounded-lg w-full"
                  ></Input>
                </div>
                <div className="flex flex-col gap-8 items-center justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-[566px] sm:w-full">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      Email{" "}
                    </Text>
                    <Input
                      name="email"
                      placeholder="xxx@gmai.com"
                      className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                      wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                      type="email"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-[566px] sm:w-full">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700e5"
                    >
                      user name
                    </Text>
                    <Input
                      name="inputfieldtext"
                      placeholder="create your user name"
                      className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                      wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                      type="text"
                    ></Input>
                  </div>
                  <Text
                    className="capitalize leading-[160.00%] text-white-A700_e5 text-xs tracking-[0.60px]"
                    size="txtRalewayRomanRegular12"
                  >
                    <>
                      Allowed Characters: a-zA-Z0-9,- <br />
                      Must begin and end alphanumerically
                      <br /> May not have two consecutive_or-
                    </>
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-[566px] sm:w-full">
                    <div className="border border-light_blue-500 border-solid h-4 rounded w-4"></div>
                    <Text
                      className="capitalize flex-1 text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                      size="txtRalewayRomanSemiBold12WhiteA700e5"
                    >
                      Agree to the Codex Terms of Use and Privacy Policy.
                    </Text>
                  </div>
                </div>
              </div>
              <Button className="bg-gradient  capitalize cursor-pointer font-semibold min-w-[139px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
                continue
              </Button>
            </div>
          </div>
        </div>
        <Footer1 className="bg-gray-900 flex font-inter gap-8 items-center justify-center mt-[82px] px-20 md:px-5 py-12 w-full" />
      </div>
    </>
  );
};

export default CommunitysuccesauthentificationPage;
