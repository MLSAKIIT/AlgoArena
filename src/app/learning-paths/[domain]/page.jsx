import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/server/db";
import Link from "next/link";

import React from "react";
import SearchBar from "@/components/learningPath/Search";
import { ALLOWED_DOMAINS } from "@/constants";
import { notFound } from "next/navigation";

const getLearningPathsByDomain = async (domain, query) => {
  const actualQuery = query
    ? query
        .split(" ")
        .map((q) => q.trim())
        .filter((q) => q.length > 0)
    : [];
  const titleQuery = actualQuery.map((q) => ({
    title: { contains: q, mode: "insensitive" },
  }));
  const descriptionQuery = actualQuery.map((q) => ({
    description: { contains: q, mode: "insensitive" },
  }));
  const tagsQuery = { tags: { hasSome: [...actualQuery] } };
  const userQuery = {
    user: { name: { contains: query, mode: "insensitive" } },
  };
  const searchQuery = query
    ? {
        OR: [...titleQuery, ...descriptionQuery, tagsQuery, userQuery],
      }
    : {};

  const where = {
    AND: [
      searchQuery,
      { isPublished: true },
      {
        domain,
      },
    ],
  };
  const paths = await db.learningPath.findMany({
    where,
    include: {
      user: true,
      sections: {
        include: {
          chapters: true,
        },
      },
    },
  });
  return paths;
};

const LearningPathsPage = async ({ params: { domain }, searchParams }) => {
  if (!Object.values(ALLOWED_DOMAINS).includes(domain)) {
    return notFound();
  }
  
  const paths = await getLearningPathsByDomain(domain, searchParams.q);
  return (
    <div className="container flex flex-col gap-10">
      <section>
        <SearchBar domain={domain} query={searchParams.q} />
      </section>

      {searchParams.q && (
        <h2 className="text-xl">
          <span>
            Showing results for{" "}
            <span className="font-semibold">&quot;{searchParams.q}&quot;</span>
          </span>
        </h2>
      )}

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {paths.map((path) => (
            <Link
              href={`/learning-paths/${path.domain}/${path.id}`}
              key={path.id}
            >
              <LearningPathCard data={path} />
            </Link>
          ))}
        </div>

        {!paths.length && (
          <h2 className="text-xl">
            <span>
              No learning paths found for{" "}
              <span className="font-semibold">{domain}</span>
            </span>
          </h2>
        )}
      </section>
    </div>
  );
};

export default LearningPathsPage;

const LearningPathCard = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-bold text-lg">{data.title}</CardTitle>
        <CardDescription>
          by <span className="font-semibold">{data.user.name}</span>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="line-clamp-2">{data.description}</p>
      </CardContent>

      <CardFooter>
        <div className="flex flex-wrap gap-2 items-center">
          {data.tags.map((tag) => (
            <Link
              key={tag}
              href={`/learning-paths/[domain]`}
              as={`/learning-paths/${data.domain}?q=${tag}`}
            >
              <Badge key={tag}>#{tag}</Badge>
            </Link>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};
