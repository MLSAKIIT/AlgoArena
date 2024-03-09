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
import Image from "next/image";
import React ,{Suspense}from "react";
import dynamic from "next/dynamic";
import SearchBar from "@/components/learningPath/Search";
import { ALLOWED_DOMAINS } from "@/constants";
import { notFound } from "next/navigation";
import Navbar from "@/components/ui/Navbar";

import { Fragment } from "react";
const Tags = dynamic(() => import("@/components/learningPath/LearningPathTags"), {
  ssr: false,
});
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
    <Fragment>
      <Navbar />
      <div className="container relative flex flex-col justify-center items-center gap-10 max-w-[120rem]">
        <SearchBar domain={domain} query={searchParams.q} />
        <div className="absolute lg:h-[80rem] lg:w-[78rem] lg:top-[-180px] lg:left-[-250px] lg:block hidden -z-10">
          <Image
            src="/dashboard-ellipse1.svg"
            alt="Ellipse"
            height={100}
            width={80}
            className="absolute w-[80rem] h-[75rem] left-[13rem] top-[15rem] overflow-hidden lg:block hidden"
          />
        </div>
        {searchParams.q && (
          <div className="text-xl">
            <span>
              Showing results for{" "}
              <span className="font-semibold">
                &quot;{searchParams.q}&quot;
              </span>
            </span>
          </div>
        )}

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <div className="text-xl">
              <span>
                No learning paths found for{" "}
                <span className="font-semibold">{domain}</span>
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="absolute -z-10 right-0 bottom-[15rem] w-[55rem] h-[40rem]  overflow-hidden lg:block hidden pointer-events-none" style={{bottom:"0px !important"}} suppressHydrationWarning>
        <Image src="/dashboard-ellipse2.svg" alt="Ellipse" fill />
      </div>
    </Fragment>
  );
};

export default LearningPathsPage;

const LearningPathCard = ({ data }) => {
  const totalChapters = data.sections.reduce((acc, section) => acc + section.chapters.length, 0);
  
  return (
    <Card suppressHydrationWarning>
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
      <Suspense fallback={<div>Loading...</div>}>
        <Tags data={data} />
      </Suspense>
      </CardFooter>
      <div className="pl-6 pr-10 flex items-center justify-between gap-6 absolute bottom-6 w-full">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/play.png"
              alt="play icon"
              width={15}
              height={15}
            />
            <div>{totalChapters} videos</div>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/time.png"
              alt="play icon"
              width={15}
              height={15}
            />
            <div>
              {data && data.createdAt && typeof data.createdAt === "object"
                ? data.createdAt
                    .toString()
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("-")
                : ""}
            </div>
          </div>
        </div>
        <Image
          src="/assets/icons/rightarr.svg"
          alt="next icon"
          width={25}
          height={25}
          
        />
      </div>
    </Card>
  );
};
