"use client";

import { useState } from "react";

type Props = {
  paragraphs: string[];
  name: string;
};

const PersonBio = ({ paragraphs, name }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <div className=" flex flex-col justify-start gap-4 ">
      <h2 className="text-3xl font-bold max-lg:text-center max-xsm:text-2xl">
        {name}
      </h2>
      <div>
        <h4 className="mb-2 text-2xl font-semibold max-lg:text-center max-xsm:text-xl">
          Biography
        </h4>
        <div className="">
          {!expanded ? (
            <p className="mb-4 text-lg max-xsm:text-base">{paragraphs[0]}</p>
          ) : (
            paragraphs.map((paragraph: string, index: number) => (
              <p className="mb-4 text-lg max-xsm:text-base" key={index}>
                {paragraph}
              </p>
            ))
          )}
        </div>
        {paragraphs.at(0) !== "" && (
          <span className="cursor-pointer italic" onClick={toggleExpanded}>
            {!expanded ? "Read more" : ""}
          </span>
        )}
      </div>
    </div>
  );
};

export default PersonBio;
