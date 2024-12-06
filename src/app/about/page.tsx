import { Metadata } from "next";
import Image from "next/image";

import { PaperPlaneIcon } from "@/components/icons/paper-plane";
import { SquigglyLines } from "@/components/icons/squiggly-lines";
import { TorchIcon } from "@/components/icons/torch";
import { UFOIcon } from "@/components/icons/ufo";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { BadgeCheckIcon, StarIcon } from "lucide-react";

import { companies, reviews } from "@/configs/site";

const team = [
  { name: "Ankit Chundali", role: "President", photo: "/emma.jpg" },
  { name: "Prashant Dulal", role: "CEO", photo: "/emma.jpg" },
  { name: "Rajan Sharma", role: "COO", photo: "/emma.jpg" },
  { name: "Binamra Lamsal", role: "CTO", photo: "/emma.jpg" },
  { name: "Binod Chudali", role: "HR Executive", photo: "/emma.jpg" },
];

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <section className="container grid items-center gap-8 py-16 md:gap-20 md:py-20 lg:grid-cols-[3fr,2.75fr] lg:py-24">
        <div className="space-y-6 lg:space-y-8">
          <h2 className="text-balance text-4xl font-bold tracking-tighter md:max-w-[12ch] md:text-5xl lg:text-7xl">
            Exploring the Heart of Nexorith
          </h2>
          <p className="leading-relaxed md:max-w-[50ch]">
            We transform ideas into solutions that exceed your expectations.
            Dive into our story to understand how.
          </p>

          <div className="space-y-4">
            <div className="flex gap-0.5">
              <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            </div>
            <blockquote className="max-w-[40ch] text-lg font-semibold">
              &quot;Working with Nexorith has been a seamless journey from
              beginning to end!&quot;
            </blockquote>
            <div className="flex gap-1">
              <span className="font-semibold">Chitiz Lamsal</span>
              <span className="text-gray-400">CEO of Time Travel</span>
            </div>
          </div>
        </div>
        <div className="relative grid grid-cols-2 items-center gap-6 md:gap-0 md:px-28 lg:px-0">
          <div className="relative">
            <SquigglyLines className="absolute -left-10 -top-10 hidden h-16 text-primary md:block" />
            <Image
              className="h-min w-full rounded-lg"
              src="/about-2.jpg"
              alt="Hero Image"
              height={400}
              width={400}
            />
          </div>
          <div className="relative z-10 flex flex-col gap-6 md:-ml-10 md:gap-10">
            <Image
              className="h-min w-full rounded-lg object-contain"
              src="/hero.jpg"
              alt="Hero Image"
              height={400}
              width={400}
            />
            <Image
              className="h-min w-full rounded-lg"
              src="/testimonials.jpg"
              alt="Hero Image"
              height={400}
              width={400}
            />
          </div>
        </div>
      </section>

      <section className="container grid place-items-center gap-6 py-16 md:py-20 lg:py-24">
        <div className="text-center font-bold">
          Used by the world best companies
        </div>
        <Carousel
          opts={{ align: "start", slidesToScroll: 1, loop: true }}
          className={"max-w-[90vw] md:max-w-[70w] lg:max-w-[75vw]"}
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
      </section>

      <section className="container">
        <div className="grid-cols- grid place-content-center place-items-center gap-20 rounded-md bg-secondary px-6 py-16 text-secondary-foreground md:grid-cols-[2.5fr,3fr] md:px-14 md:py-20 lg:px-16 lg:py-24">
          <div className="flex w-full max-w-[60vw] flex-col">
            <div className="flex h-[250px] w-[250px] flex-col items-center justify-center space-y-0.5 rounded-[100%] border-2 border-secondary-foreground/80 text-center">
              <h3 className="text-3xl font-bold">
                70<span className="text-primary">+</span>
              </h3>
              <span>Happy Customers</span>
            </div>
            <div className="flex h-[200px] w-[200px] flex-col items-center justify-center space-y-0.5 self-end rounded-[100%] bg-secondary text-center brightness-105 xl:-mt-16">
              <h3 className="text-3xl font-bold">
                120<span className="text-primary">+</span>
              </h3>
              <span>Completed Projects</span>
            </div>
            <div className="flex h-[200px] w-[200px] flex-col items-center justify-center space-y-0.5 self-center rounded-[100%] bg-primary text-center text-primary-foreground">
              <h3 className="text-3xl font-bold">
                120<span className="text-primary-foreground">+</span>
              </h3>
              <span>Sucess Story</span>
            </div>
          </div>
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-balance text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Shaping Digital Futures
            </h2>
            <p className="leading-relaxed text-secondary-foreground/80 md:max-w-[55ch]">
              At Nexorith, our vision is to pioneer a new era of software
              solutions. We believe in empowering innovation, enabling
              businesses to shape their digital futures, and creating a world
              where software knows no bounds.
            </p>
            <ul className="space-y-6 lg:space-y-8">
              <li className="flex items-start gap-4">
                <TorchIcon className="not-sr-only h-8 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Innovative Solutions</h3>
                  <p className="text-secondary-foreground/80 lg:max-w-[50ch]">
                    We pride ourselves on crafting innovative software solutions
                    that address real-world challenges and drive digital
                    transformation.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <UFOIcon className="not-sr-only h-8 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Client-Centric Approach</h3>
                  <p className="text-secondary-foreground/80 lg:max-w-[50ch]">
                    Our client-centric approach ensures that we understand your
                    unique needs and provide tailored solutions that exceed
                    expectations.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <TorchIcon className="not-sr-only h-8 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Experienced Team</h3>
                  <p className="text-secondary-foreground/80 lg:max-w-[50ch]">
                    Our team of experienced professionals is committed to
                    delivering excellence and quality in every project we
                    undertake.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-20 lg:py-24">
        <Carousel
          opts={{ align: "start", slidesToScroll: 1, loop: true }}
          className="grid items-center gap-8 md:grid-cols-[1fr,2fr] md:gap-10"
        >
          <div className="space-y-8 md:space-y-14">
            <h2 className="max-w-[20ch] text-balance text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Meet Our Dedicated Team
            </h2>
            <div className="flex gap-2">
              <CarouselPrevious className="static h-10 w-10" />
              <CarouselNext className="static h-10 w-10" />
            </div>
          </div>
          <div>
            <CarouselContent className="-ml-8 max-w-[100vw] md:max-w-[60vw]">
              {team.map((person, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[100%] select-none space-y-4 pl-8 sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
                >
                  <Image
                    src={person.photo}
                    width={400}
                    height={400}
                    alt={person.name}
                    className="w-full rounded-md"
                  />
                  <div className="text-center">
                    <strong className="text-lg">{person.name}</strong>
                    <div className="text-sm text-muted-foreground">
                      {person.role}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </section>

      <section className="container grid items-center gap-8 py-16 md:gap-10 md:py-20 lg:grid-cols-2 lg:py-24">
        <div className="space-y-6 lg:space-y-8">
          <h2 className="max-w-[20ch] text-balance text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            Global Expertise: Courses with International-Level Content
          </h2>

          <p className="max-w-[56ch] text-balance">
            Unlock globally recognized knowledge and skills with courses
            designed to meet international standards, ensuring you stay
            competitive and informed.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-1">
              <BadgeCheckIcon className="not-sr-only fill-primary text-primary-foreground" />
              <span>
                <strong> Expert-Led Curriculum:</strong> Learn from industry
                professionals for real-world insights and practical knowledge.
              </span>
            </li>
            <li className="flex items-center gap-1">
              <BadgeCheckIcon className="not-sr-only fill-primary text-primary-foreground" />
              <span>
                <strong> Flexible, Self-Paced Learning:</strong> Study at your
                own pace to balance learning with other commitments..
              </span>
            </li>
            <li className="flex items-center gap-1">
              <BadgeCheckIcon className="not-sr-only fill-primary text-primary-foreground" />
              <span>
                <strong>Affordable Access to High-Quality IT Courses:</strong>{" "}
                Gain valuable skills with competitive pricing options.
              </span>
            </li>
          </ul>
        </div>
        <div className="relative">
          <Image
            className="w-full"
            src="/testimonials.jpg"
            alt="Testimonials"
            height={400}
            width={400}
          />
        </div>
      </section>

      <section className="container">
        <div className="grid items-center gap-8 rounded-md bg-testimonials-hero px-6 py-16 text-white md:gap-10 md:px-14 md:py-20 lg:grid-cols-2 lg:px-16 lg:py-24">
          <div className="flex h-full flex-col justify-between">
            <div className="space-y-2 lg:space-y-4">
              <div className="textxl text-lg font-bold lg:text-2xl">
                Innovate.
              </div>
              <div className="text-2xl font-bold lg:text-4xl">Elevate.</div>
              <div className="text-4xl font-bold lg:text-5xl">Succeed.</div>
            </div>
            <Button
              variant="secondary"
              size="lg"
              className="mt-8 self-start text-foreground"
            >
              Join our community
            </Button>
          </div>
          <div className="relative rounded-md bg-white p-10 text-foreground">
            <h2 className="mb-8 text-xl font-bold">
              Here our customers experience
            </h2>
            <Carousel
              opts={{ align: "start", slidesToScroll: 1, loop: true }}
              className="max-w-[calc(100vw-10rem)] md:max-w-[calc(100vw-16rem)]"
            >
              <CarouselContent>
                {reviews.map((review, index) => (
                  <CarouselItem key={index} className="select-none space-y-6">
                    <div className="flex gap-0.5">
                      <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    </div>
                    <blockquote className="font-medium leading-relaxed">
                      {review.description}
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={review.avatar} alt={review.name} />
                      </Avatar>
                      <div className="gap-0.5">
                        <div className="text-sm font-semibold">
                          {review.name}
                        </div>
                        <div className="text-xs">Content Writer</div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselDots className="mt-6 justify-center lg:mt-8" />
            </Carousel>
          </div>
        </div>
      </section>

      <section className="container grid place-items-center space-y-5 py-16 text-center md:py-20 lg:py-24">
        <PaperPlaneIcon className="mb-2 h-20" />
        <h1 className="text-balance text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
          We&apos;re hiring!
        </h1>
        <p className="text-balance">
          Our team is growing faster and we&apos;re always looking for a smart
          people
        </p>

        <Button size="lg">Learn More</Button>
      </section>
    </main>
  );
}
