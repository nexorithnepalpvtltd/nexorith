"use client";

import { useId } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

import { CheckedState } from "@radix-ui/react-checkbox";

import { courseLevels } from "@/courses";

export function SkilLevelSelectionCard() {
  const id = useId();
  const searchParams = useSearchParams();
  const router = useRouter();

  const skillsFilters =
    searchParams
      .get("skill")
      ?.split(".")
      .map((v) => v.toLowerCase())
      .filter((value) =>
        courseLevels.includes(value as (typeof courseLevels)[number]),
      ) || [];

  function handleChange(value: CheckedState, level: string) {
    if (typeof value !== "boolean") return;

    const params = new URLSearchParams(searchParams.toString());

    if (level === "all") {
      params.delete("skill");
    } else {
      const updatedSkills = value
        ? [...skillsFilters, level]
        : skillsFilters.filter((item) => item !== level);

      if (updatedSkills.length === 0) {
        params.delete("skill");
      } else {
        params.set("skill", updatedSkills.join("."));
      }
    }

    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl lg:text-2xl">Skill level</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        {courseLevels.map((skill) => (
          <div key={skill} className="flex items-center space-x-2">
            <Checkbox
              id={`${id}-${skill}`}
              checked={skillsFilters.includes(skill)}
              onCheckedChange={(value) => handleChange(value, skill)}
            />
            <label htmlFor={`${id}-${skill}`} className="capitalize">
              {skill}
            </label>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
