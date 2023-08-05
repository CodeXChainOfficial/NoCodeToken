import React from "react";

const sizeClasses = {
  txtInterSemiBold16WhiteA70099: "font-inter font-semibold",
  txtRalewayRomanSemiBold14: "font-raleway font-semibold",
  txtRalewayRomanSemiBold20WhiteA700e5: "font-raleway font-semibold",
  txtRalewayRomanSemiBold16: "font-raleway font-semibold",
  txtInterRegular20: "font-inter font-normal",
  txtRalewayRomanRegular16: "font-normal font-raleway",
  txtRalewayRomanSemiBold12: "font-raleway font-semibold",
  txtRalewayRomanSemiBold12Deeppurple900: "font-raleway font-semibold",
  txtInterRegular12WhiteA700: "font-inter font-normal",
  txtInterSemiBold24: "font-inter font-semibold",
  txtRalewayRomanRegular12: "font-normal font-raleway",
  txtInterMedium27: "font-inter font-medium",
  txtRalewayRomanSemiBold16WhiteA700e5: "font-raleway font-semibold",
  txtRalewayRomanSemiBold16Lightblue500: "font-raleway font-semibold",
  txtInterSemiBold16Lightblue500: "font-inter font-semibold",
  txtInterRegular26: "font-inter font-normal",
  txtRalewayRomanSemiBold12WhiteA700: "font-raleway font-semibold",
  txtRalewayRomanMedium16WhiteA70099: "font-medium font-raleway",
  txtRalewayRomanRegular16WhiteA700: "font-normal font-raleway",
  txtRalewayRomanSemiBold12DeeppurpleA200: "font-raleway font-semibold",
  txtRalewayRomanSemiBold24: "font-raleway font-semibold",
  txtInterMedium13: "font-inter font-medium",
  txtRalewayRomanSemiBold12Green400: "font-raleway font-semibold",
  txtRalewayRomanSemiBold20: "font-raleway font-semibold",
  txtRalewayRomanSemiBold12Pink300: "font-raleway font-semibold",
  txtRalewayRomanSemiBold12WhiteA7004c: "font-raleway font-semibold",
  txtInterRegular19WhiteA700: "font-inter font-normal",
  txtInterMedium14: "font-inter font-medium",
  txtRalewayRomanSemiBold16Black900: "font-raleway font-semibold",
  txtRalewayRomanSemiBold12Gray50001: "font-raleway font-semibold",
  txtInterRegular19: "font-inter font-normal",
  txtRalewayRomanSemiBold12Blue900: "font-raleway font-semibold",
  txtRalewayRomanSemiBold12Blue700: "font-raleway font-semibold",
  txtRalewayRomanSemiBold12Gray700: "font-raleway font-semibold",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular16WhiteA700e5: "font-inter font-normal",
  txtRalewayRomanSemiBold12WhiteA70099: "font-raleway font-semibold",
  txtInterRegular16: "font-inter font-normal",
  txtRalewayRomanMedium16Lightblue500: "font-medium font-raleway",
  txtRalewayRomanMedium16: "font-medium font-raleway",
  txtRalewayRomanSemiBold16WhiteA700: "font-raleway font-semibold",
  txtRalewayRomanSemiBold16WhiteA70099: "font-raleway font-semibold",
  txtRalewayRomanSemiBold36: "font-raleway font-semibold",
  txtRalewayRomanSemiBold32: "font-raleway font-semibold",
  txtRalewayRomanSemiBold35: "font-raleway font-semibold",
  txtRalewayRomanSemiBold20Green400: "font-raleway font-semibold",
  txtRalewayRomanSemiBold24WhiteA700e5: "font-raleway font-semibold",
  txtRalewayRomanSemiBold12Orange300: "font-raleway font-semibold",
  txtRalewayRomanSemiBold24Lightblue500: "font-raleway font-semibold",
  txtRalewayRomanRegular12WhiteA70099: "font-normal font-raleway",
  txtRalewayRomanSemiBold16WhiteA7004c: "font-raleway font-semibold",
  txtRalewayRomanMedium16WhiteA7004c: "font-medium font-raleway",
  txtRalewayRomanSemiBold20WhiteA70099: "font-raleway font-semibold",
  txtRalewayRomanBold20: "font-bold font-raleway",
  txtRalewayRomanMedium16DeeppurpleA200: "font-medium font-raleway",
  txtRalewayRomanSemiBold48: "font-raleway font-semibold",
  txtRalewayRomanSemiBold16WhiteA70087: "font-raleway font-semibold",
  txtRalewayRomanBold16: "font-bold font-raleway",
  txtRalewayRomanSemiBold32WhiteA700: "font-raleway font-semibold",
  txtRalewayRomanSemiBold20WhiteA700: "font-raleway font-semibold",
  txtRalewayRomanSemiBold40: "font-raleway font-semibold",
  txtRalewayRomanSemiBold12Green300: "font-raleway font-semibold",
  txtInterSemiBold12: "font-inter font-semibold",
  txtRalewayRomanMedium16Bluegray100: "font-medium font-raleway",
  txtRalewayRomanSemiBold12WhiteA700e5: "font-raleway font-semibold",
  txtRalewayRomanSemiBold80: "font-raleway font-semibold",
  txtInterSemiBold16: "font-inter font-semibold",
  txtRalewayRomanSemiBold20LightblueA100: "font-raleway font-semibold",
  txtInterSemiBold16WhiteA700e5: "font-inter font-semibold",
  txtRalewayRomanSemiBold12Blue400: "font-raleway font-semibold",
  txtRalewayRomanSemiBold12Lightblue500: "font-raleway font-semibold",
  txtRalewayRomanMedium16WhiteA700: "font-medium font-raleway",
  txtRalewayItalicRegular16: "font-normal font-raleway italic",
  txtRalewayRomanSemiBold32Lightblue500: "font-raleway font-semibold",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
