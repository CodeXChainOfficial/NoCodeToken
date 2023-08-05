import React from "react";

import { Button, Img, Line, List, Text } from "components";
import CommunitySignInCardbottom from "components/CommunitySignInCardbottom";
import Footer1 from "components/Footer1";
import Header2 from "components/Header2";

const ForumverificationpagePage: React.FC = () => {
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
        <div className="backdrop-opacity-[0.5] blur-[10.00px] flex flex-col items-start justify-start w-full">
          <div className="h-[617px] md:px-5 relative w-[95%] md:w-full">
            <div className="h-[617px] m-auto w-full">
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
                  <Button className="bg-gradient  capitalize cursor-pointer font-semibold min-w-[275px] py-5 rounded-lg text-center text-white-A700 text-xl tracking-[1.00px]">
                    join the community
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute bg-black-900_01 flex flex-col items-center justify-start max-w-[632px] p-8 sm:px-5 right-[24%] rounded-[16px] top-[6%] w-full">
              <div className="flex flex-col items-start justify-center pb-8 pt-2 w-full">
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-full">
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Text
                      className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                      size="txtRalewayRomanSemiBold24"
                    >
                      email verification
                    </Text>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_carbonclosefilled.svg"
                    alt="carbonclosefill"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-8 items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-auto sm:w-full">
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
                </div>
                <Text
                  className="leading-[160.00%] text-base text-white-A700_e5 tracking-[0.80px]"
                  size="txtRalewayRomanMedium16"
                >
                  <span className="text-white-A700_e5 font-raleway text-left font-medium">
                    A verification email has been sent to{" "}
                  </span>
                  <span className="text-blue-400 font-raleway text-left font-medium">
                    lynxverseofficial@gmail.com.{" "}
                  </span>
                  <span className="text-white-A700_e5 font-raleway text-left font-medium">
                    <>
                      Please verify your email by clicking the link sent to your
                      inbox. <br />
                      If you have not received this email, please check your
                      spam folder, or click here to send a new email.
                    </>
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <div className="h-[340px] md:h-[618px] sm:h-[911px] md:px-5 relative w-[1440px] md:w-full">
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
        <Footer1 className="bg-gray-900 flex font-inter gap-8 items-center justify-center mt-[82px] px-20 md:px-5 py-12 w-full" />
      </div>
    </>
  );
};

export default ForumverificationpagePage;
