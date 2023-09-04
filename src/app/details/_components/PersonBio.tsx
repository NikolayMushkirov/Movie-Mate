"use client";

import { useState } from "react";

type Props = {
  paragraphs: string[];
  name: string;
};

const PersonBio = ({ paragraphs, name }: Props) => {
  const [expanded, setExpanded] = useState(true);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <div className=" flex flex-col justify-start gap-4">
      <h2 className="text-3xl font-bold">{name}</h2>
      <div>
        <h4 className="mb-2 text-2xl font-semibold">Biography</h4>
        <div className="">
          {expanded ? (
            <p className="mb-4 text-lg">{paragraphs[0]}</p>
          ) : (
            paragraphs.map((paragraph: string, index: number) => (
              <p className="mb-4 text-lg" key={index}>
                {paragraph}
              </p>
            ))
          )}
        </div>
        <span className="italic cursor-pointer" onClick={toggleExpanded}>
          {expanded ? "Read more" : ""}
        </span>
      </div>
    </div>
  );
};

export default PersonBio;
