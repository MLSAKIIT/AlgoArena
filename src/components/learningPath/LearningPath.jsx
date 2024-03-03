"use client";
import React, { useState, useEffect } from "react";
import { DomainApi } from "@/app/utils/constants";
import LearningPathSection from "./LearningPathSection";
import LearningPathHeader from "./LearningPathHeader";

const LearningPath = ({ slugId }) => {
  const [domainData, setDomainData] = useState({});

  useEffect(() => {
    const fetchDomains = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_SERVER_URL + DomainApi
        );
        const json = await response.json();
        if (slugId !== null) {
          const reqDomain = json.find((domain) => domain.header.id == slugId);
          if (reqDomain) {
            setDomainData(reqDomain);
          } else {
            console.warn(`Domain with id ${slugId} not found.`);
          }
        }
      } catch (error) {
        console.error("Error fetching domain data:", error);
      }
    };
    fetchDomains();
  }, [slugId]);

  const { header, sections } = domainData;

  return (
    <div>
      {Object.keys(domainData).length === 0 ? (
        <div>Domain with id {slugId} not found.</div>
      ) : (
        <div>
          <LearningPathHeader header={header} />

          <LearningPathSection sections={sections} />
        </div>
      )}
    </div>
  );
};

export default LearningPath;
