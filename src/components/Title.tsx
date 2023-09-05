import React from "react";
import tw from "twin.macro";

interface Props {
  children: React.ReactNode;
}

export default function Title({ children }: Props) {
  return <Content>{children}</Content>;
}

const Content = tw.h1`font-medium text-2xl`;
