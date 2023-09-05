import React from "react";
import { Global, css } from "@emotion/react";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const red = theme`colors.black`;
const customStyles = css`
  html {
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
  }

  @supports (font-variation-settings: normal) {
    html {
    }
  }

  body {
    height: 100%;
    -webkit-tap-highlight-color: ${red};
    ${tw`antialiased`}
  }

  #__next {
    height: 100%;
  }

  [multiple],
  [type="date"],
  [type="datetime-local"],
  [type="email"],
  [type="tel"],
  [type="text"],
  [type="time"],
  [type="url"],
  [type="week"],
  [type="month"],
  [type="number"],
  [type="password"],
  [type="search"],
  select,
  textarea {
    ${tw`appearance-none`}
    ${tw`bg-white`}
    ${tw`border-gray-600`}
    ${tw`border-solid`}
    ${tw`border`}
    ${tw`p-2`}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
