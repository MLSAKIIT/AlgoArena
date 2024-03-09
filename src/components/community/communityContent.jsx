"use client";
import React, { useState } from "react";

const Content = ({ content }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`${expanded ? "h-auto" : "h-full"} md:h-auto my-2`}>
      {expanded ? (
        <span className="break-words">{content}</span>
      ) : (
        <span className="break-words">{content.substring(0, 100)}</span>
      )}
      <br />
      {content.length > 101 && (
        <a
          href="#"
          onClick={() => setExpanded(!expanded)}
          className="text-purple-500 underline underline-offset-4"
        >
          read {expanded ? "less" : "more"}
        </a>
      )}
    </div>
  );
};

export default Content;
