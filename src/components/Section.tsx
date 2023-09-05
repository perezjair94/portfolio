import React from "react";
import Title from "./Title";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: Props) {
  return (
    <section role="section-content" className="my-10">
      <Title>{title}</Title>
      {children}
    </section>
  );
}
