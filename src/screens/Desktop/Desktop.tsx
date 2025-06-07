import React from "react";
import { FrameByAnima } from "./sections/FrameByAnima";
import { SectionByAnima } from "./sections/SectionByAnima";

export const Desktop = (): JSX.Element => {
  return (
    <main className="w-full bg-white">
      <div className="relative">
        <div className="flex flex-col w-full items-start">
          <SectionByAnima />
          <FrameByAnima />
        </div>
      </div>
    </main>
  );
};
