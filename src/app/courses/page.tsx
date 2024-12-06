import Link from "next/link";

import { ServicesIcon } from "@/components/icons/services";
import { Button } from "@/components/ui/button";

import { BookOpenTextIcon } from "lucide-react";
import { z } from "zod";

import { Category, Level, courseCategories, courseLevels } from "@/courses";
import { SearchParams } from "@/types";

import { CourseCards } from "../course-catalog";
import { CategorySelectionCard } from "./category-selection-card";
import { SkilLevelSelectionCard } from "./skill-level-selection-card";

export default async function CoursePage({
  searchParams: rawSearchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const searchParams = searchParamsSchema.parse(await rawSearchParams);

  return (
    <main>
      <section className="container grid items-center gap-14 py-16 md:grid-cols-2 md:gap-20 md:py-20 lg:gap-32 lg:py-24">
        <div className="space-y-6 lg:space-y-8">
          <h2 className="text-balance text-4xl font-bold tracking-tighter md:max-w-[12ch] md:text-5xl lg:text-7xl">
            Discover the courses we offer
          </h2>
          <p className="leading-relaxed md:max-w-[50ch]">
            Our experienced team is dedicated to helping you achieve your goals
            through different courses.
          </p>
          <Button className="gap-2" size="lg" asChild>
            <Link href="#courses">
              <BookOpenTextIcon className="h-4 w-4" />
              <span>View Courses</span>
            </Link>
          </Button>
        </div>

        <div>
          <ServicesIcon className="text-primary" />
        </div>
      </section>

      <div
        className="container grid gap-4 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-[3fr,1fr] lg:py-24"
        id="courses"
      >
        <CourseCards
          categories={searchParams.category}
          levels={searchParams.skill}
          className="grid-cols-1 md:grid-cols-1 lg:grid-cols-3"
        />
        <div className="space-y-4">
          <CategorySelectionCard />
          <SkilLevelSelectionCard />
        </div>
      </div>
    </main>
  );
}

const searchParamsSchema = z.object({
  category: z
    .string()
    .transform((value) => {
      if (!value) return [];

      return value
        .split(".")
        .map((v) => v.toLowerCase())
        .filter((value) =>
          courseCategories.includes(value as (typeof courseCategories)[number]),
        ) as Category[];
    })
    .catch([]),
  skill: z
    .string()
    .transform((value) => {
      if (!value) return [];

      return value
        .split(".")
        .map((v) => v.toLowerCase())
        .filter((value) =>
          courseLevels.includes(value as (typeof courseLevels)[number]),
        ) as Level[];
    })
    .catch([]),
});
