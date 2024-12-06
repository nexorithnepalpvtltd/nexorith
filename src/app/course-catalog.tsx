"use client";

import { ComponentProps, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ClockIcon, TableIcon } from "lucide-react";

import { Category, Level, courseCategories, courses } from "@/courses";
import { cn } from "@/utils/cn";

export function CourseCatalog() {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  function handleCategorySelect(category: Category) {
    if (selectedCategories.includes(category))
      return setSelectedCategories((prevCategories) =>
        prevCategories.filter((val) => val !== category),
      );

    setSelectedCategories((prevCategories) => [...prevCategories, category]);
  }

  return (
    <>
      <div className="mb-6">
        <div className="flex flex-wrap justify-center gap-2">
          <Button
            variant={selectedCategories.length === 0 ? "default" : "outline"}
            onClick={() => setSelectedCategories([])}
            className="capitalize"
          >
            All
          </Button>
          {courseCategories.map((category) => (
            <Button
              key={category}
              variant={
                selectedCategories.includes(category) ? "default" : "outline"
              }
              onClick={() => handleCategorySelect(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <CourseCards categories={selectedCategories} />
    </>
  );
}

export function CourseCards({
  categories,
  levels,
  className,
  ...divProps
}: { categories?: Category[]; levels?: Level[] } & ComponentProps<"div">) {
  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      !categories ||
      categories.length === 0 ||
      categories.includes(course.category);
    const matchesLevel =
      !levels || levels.length === 0 || levels.includes(course.level);

    return matchesCategory && matchesLevel;
  });

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",
        className,
      )}
      {...divProps}
    >
      {filteredCourses.map((course) => (
        <Card key={course.id} className="flex flex-col shadow-sm">
          <CardHeader className="p-0">
            <Link href={`/courses/${course.slug}`}>
              <Image
                src={course.image}
                alt={course.title}
                width={300}
                height={200}
                className="h-48 w-full rounded-t-lg object-cover"
              />
            </Link>
          </CardHeader>
          <CardContent className="flex-grow p-4">
            <Badge className="mb-3 capitalize">{course.level}</Badge>
            <CardTitle className="mb-2 text-xl transition-all ease-in hover:text-primary">
              <Link href={`/courses/${course.slug}`}>{course.title}</Link>
            </CardTitle>
            <p className="text-muted-foreground">{course.shortDescription}</p>
          </CardContent>
          <hr className="mx-4" />
          <CardFooter className="flex justify-between p-4">
            <div className="flex items-center gap-1">
              <ClockIcon className="h-4 w-4 text-primary" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <TableIcon className="h-4 w-4 text-primary" />
              <span>{course.lectures} lectures</span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
