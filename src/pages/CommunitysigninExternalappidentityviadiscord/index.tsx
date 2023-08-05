import React from "react";

import { Button, Img, Line, List, Text } from "components";
import CommunitySignInCardbottom from "components/CommunitySignInCardbottom";
import Footer1 from "components/Footer1";
import Header2 from "components/Header2";

const CommunitysigninExternalappidentityviadiscordPage: React.FC = () => {
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
                    External app identity
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_carbonclosefilled.svg"
                  alt="carbonclosefill"
                />
              </div>
            </div>
            <div className="flex flex-col gap-12 h-[538px] md:h-auto items-end justify-start w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <Text
                  className="capitalize leading-[160.00%] text-base text-center text-white-A700 tracking-[0.80px]"
                  size="txtRalewayRomanMedium16WhiteA700"
                >
                  <span className="text-white-A700 font-raleway font-medium">
                    <>
                      wants to access your Discord account? <br /> Signed in as{" "}
                    </>
                  </span>
                  <span className="text-deep_purple-A200 font-raleway font-medium">
                    jilly77#4374
                  </span>
                  <span className="text-white-A700 font-raleway font-medium">
                    {" "}
                  </span>
                  <span className="text-light_blue-500 font-raleway font-medium">
                    {" "}
                    Not you?
                  </span>
                </Text>
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <Text
                    className="text-base text-white-A700_e5 tracking-[0.80px] w-full"
                    size="txtRalewayRomanMedium16"
                  >
                    <span className="text-white-A700_e5 font-raleway text-left font-medium">
                      This
                    </span>
                    <span className="text-green-400 font-raleway text-left font-medium">
                      {" "}
                      will allow
                    </span>
                    <span className="text-white-A700_e5 font-raleway text-left font-medium">
                      {" "}
                      the developer od CodeX identify to
                    </span>
                  </Text>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="leading-[160.00%] text-base text-white-A700_e5 tracking-[0.80px]"
                      size="txtRalewayRomanRegular16"
                    >
                      <>
                        Access your username, avatar, and banner
                        <br />
                        Access your email address
                        <br />
                        Once you authorize, you will be redirected outside of
                        Discord to: https://aptoslabs.com
                        <br />
                        The developer of Aptos Identity&#39;s privacy policy and
                        terms of service apply to this application.
                        <br />
                        Active since May 12, 2022
                        <br />
                        This application cannot read your messages or send
                        messages as you.
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-8 items-start justify-start w-auto">
                <Button className="border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[89px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                  cancel
                </Button>
                <Button className="bg-gradient  capitalize cursor-pointer font-semibold py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] w-[91px]">
                  Ok
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="bg-gray-900 flex font-inter gap-8 items-center justify-center mt-[82px] px-20 md:px-5 py-12 w-full" />
      </div>
    </>
  );
};

export default CommunitysigninExternalappidentityviadiscordPage;
