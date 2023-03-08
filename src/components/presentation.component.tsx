import React from "react";
import { AboutHeise } from "./about-heise.component";
import { Introduction } from "./Introduction.component";
import { Work } from "./work.component";
import { Workflow } from "./Workflow.component";

export const Presentation = () => {
  return (
    <div className="cursor-pointer scroll-smooth w-full flex flex-col justify-center font-roboto">
      <Introduction />
      <AboutHeise />
      <Work />
      <Workflow />
    </div>
  );
};
