"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
const Tags = ({ data }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags(data.tags);
  }, [data]);

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {tags.map((tag) => (
        <div key={tag}>
          <Link
            href={{
              pathname: `/learning-paths/[domain]`,
              query: { domain: data.domain, q: tag },
            }}
            as={`/learning-paths/${data.domain}?q=${tag}`}
          >
            <Badge key={tag}>#{tag}</Badge>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Tags;