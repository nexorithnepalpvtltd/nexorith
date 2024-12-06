import { ComponentProps, ElementType } from "react";

import { cn } from "@/utils/cn";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export function CompaniesCarousel({
  companies,
  className,
  ...props
}: {
  companies: ElementType[];
  className?: string;
} & ComponentProps<typeof Carousel>) {
  return (
    <Carousel
      opts={{ align: "start", slidesToScroll: 1, loop: true }}
      className={cn("max-w-[90vw] md:max-w-[70w] lg:max-w-[75vw]", className)}
      {...props}
    >
      <CarouselContent className="-ml-4">
        {companies.map((Company, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 pl-4 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
          >
            <Company className="h-[10vw] sm:h-12 md:h-10 lg:h-8" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
