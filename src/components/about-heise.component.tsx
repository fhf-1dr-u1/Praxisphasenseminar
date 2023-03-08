import React from "react";
import { ReactElement } from "react";
import { GrUserWorker } from "react-icons/gr";
import { AiOutlineStock } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import pic from "../assets/Heise.jpeg";
import { InfoBox } from "./UI/Infobox.component";
import { Link } from "react-scroll";
import { HorizontalLine } from "./UI/horizontal-line.component";

export const AboutHeise = (): ReactElement => {
  return (
    <div className="relative w-full">
      <div className="bg-blue-900 absolute z-10 top-1/2 left-0 right-2/3 bottom-0 xl:visible invisible" />
      <Link
        activeClass="active"
        to="Work"
        spy={true}
        smooth={true}
        duration={400}
        className="flex flex-wrap items-center justify-center gap-12 xl:gap-x-20 xl:h-[100vh] bg-slate-50 relative py-20 xl:py-0"
        id="About-Heise"
      >
        <img
          className="rounded-3xl z-20 xl:mt-0 ml-4"
          src={pic}
          alt=""
          width="550"
          height="700"
        />
        <div className="flex flex-col gap-8 lg:mr-4 mx-14 md:mx-20">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold">
              About Heise Medien
            </h2>
            <HorizontalLine className="mb-0">
              <h4 className="text-base md:text-lg">
                Das Unternehmen für IT-Medien
              </h4>
            </HorizontalLine>
          </div>
          <div className="flex gap-3 flex-wrap">
            <InfoBox title="Gegründet" text="19 Juni 1949">
              <FaRegHandshake className="text-2xl" />
            </InfoBox>
            <InfoBox title="Mitarbeiter" text="1085">
              <GrUserWorker className="text-2xl" />
            </InfoBox>
            <InfoBox title="Umsatz" text="194 Millionen">
              <AiOutlineStock className="text-2xl"></AiOutlineStock>
            </InfoBox>
          </div>
          <div className="max-w-lg">
            <p className="text-gray-700">
              Die Heise Medien GmbH & Co. KG ist ein Medienunternehmen mit dem
              Hauptsitz in Hannover. Der Verlag wird derzeitig von Ansgar Heise
              geführt und verfügt über mehrere Standorte in Deutschland. Die
              Geschäftsfelder werden dabei in 3 unterschiedlichen Kategorien
              eingeteilte: Verzeichnismedien, Content-Medien und
              Shopping-Portale.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
