"use client";

import { useId } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

import { CheckedState } from "@radix-ui/react-checkbox";

import { courseCategories } from "@/courses";

export function CategorySelectionCard() {
  const id = useId();
  const searchParams = useSearchParams();
  const router = useRouter();

  const categoriesFilters =
    searchParams
      .get("category")
      ?.split(".")
      .map((v) => v.toLowerCase())
      .filter((value) =>
        courseCategories.includes(value as (typeof courseCategories)[number]),
      ) || [];

  function handleChange(value: CheckedState, category: string) {
    if (typeof value !== "boolean") return;

    const params = new URLSearchParams(searchParams.toString());

    if (category === "all") {
      params.delete("category");
    } else {
      const updatedCategories = value
        ? [...categoriesFilters, category]
        : categoriesFilters.filter((item) => item !== category);

      if (updatedCategories.length === 0) {
        params.delete("category");
      } else {
        params.set("category", updatedCategories.join("."));
      }
    }

    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl lg:text-2xl">Category</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        <div className="flex items-center space-x-2">
          <Checkbox
            id={`${id}-all`}
            checked={categoriesFilters.length === 0}
            onCheckedChange={(value) => handleChange(value, "all")}
          />
          <label htmlFor={`${id}-all`} className="capitalize">
            All
          </label>
        </div>
        {courseCategories.map((category) => (
          <div key={category} className="flex items-center space-x-2">
            <Checkbox
              id={`${id}-${category}`}
              checked={categoriesFilters.includes(category)}
              onCheckedChange={(value) => handleChange(value, category)}
            />
            <label htmlFor={`${id}-${category}`} className="capitalize">
              {category}
            </label>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
