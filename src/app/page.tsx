import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowDecoration } from "@/components/icons/arrow";
import { BirdsDecoration } from "@/components/icons/birds";
import { HandWrittenLines } from "@/components/icons/handwritten-lines";
import { LearnIcon } from "@/components/icons/learn";
import { SettingIcon } from "@/components/icons/setting";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import AvatarCircles from "@/components/ui/avatar-circles";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";

import { ArrowRightIcon, BadgeCheckIcon } from "lucide-react";

import { companies } from "@/configs/site";
import { avatarUrls, reviews } from "@/configs/site";

import { CourseCatalog } from "./course-catalog";

// const services = [
//   "Digital Marketing",
//   "Graphics Design",
//   "UI/UX",
//   "ERP Development",
//   "MVP Development",
//   "App Development",
//   "Web Development",
// ];

export const metadata: Metadata = {
  title: "Home | Nexorith",
};

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="container grid py-16 md:py-20 lg:py-40">
          <div className="absolute inset-0 z-[-2] hidden bg-hero-back bg-cover bg-center bg-no-repeat md:block"></div>

          <div className="absolute inset-0 z-[-1] hidden bg-gradient-to-r from-white via-white/70 to-transparent md:block"></div>
          <div className="relative hidden -rotate-6 scale-150 md:left-3/4 md:top-5 md:inline lg:left-2/4">
            <HandWrittenLines className="h-20 rotate-180 scale-150" />
          </div>
          <div className="z-10 flex flex-col gap-6 md:items-start">
            <div className="bottom-5 left-5 inline-block rounded-md bg-secondary p-4 text-secondary-foreground shadow-sm">
              <div className="inline-block items-center gap-2">
                <div className="flex">
                  <strong className="text-lg">5K+</strong>
                  <AvatarCircles avatarUrls={avatarUrls} />
                </div>
              </div>
              <p>Total Visitors Per Month </p>
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tighter md:max-w-[12ch] md:text-4xl lg:text-7xl">
              We <span className="text-primary">Craft,</span> your{" "}
              <span className="text-primary">Dream.</span>
            </h2>
            <p className="text-base leading-relaxed md:max-w-[50ch]">
              At Nexorith, we bring your vision to life with premium IT
              solutions and expert skill training. Empower your business and
              elevate your tech skills with us .
            </p>

            <div>
              <ul className="grid gap-6 md:grid-cols-2">
                <li className="group/edit flex cursor-pointer gap-4 rounded-sm p-3 outline outline-1 outline-primary backdrop-blur-lg duration-200 hover:bg-primary hover:text-white hover:outline-primary">
                  <Link className="flex" href="/services">
                    <div className="space-y-1 text-justify md:max-w-60">
                      <strong className="text-primary group-hover/edit:text-white">
                        Get IT Service from Us
                      </strong>
                      <p className="text-xs">
                        You will receive a dedicated team focused on achieving
                        your goals.
                      </p>
                    </div>
                    <SettingIcon className="self-centere m-4 h-12 w-12 text-primary group-hover/edit:text-white" />
                  </Link>
                </li>
                <Link className="flex" href="/courses">
                  <li className="group/edit flex cursor-pointer gap-4 rounded-sm p-3 outline outline-1 outline-primary backdrop-blur-lg duration-200 hover:bg-primary hover:text-white hover:outline-primary">
                    <div className="space-y-1 text-justify md:max-w-56">
                      <strong className="text-primary group-hover/edit:text-white">
                        Learn from Nexorith
                      </strong>
                      <p className="text-xs">
                        A customized learning environment focused on
                        participants' unique needs and goals.
                      </p>
                    </div>
                    <LearnIcon className="self-centere m-4 h-12 w-12 text-primary group-hover/edit:text-white" />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container grid items-center gap-8 py-16 md:gap-20 md:py-20 lg:grid-cols-[3fr,2fr] lg:py-24"
        id="About"
      >
        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:gap-8">
          <div className="relative">
            <Image
              src="/about-1.jpg"
              className="w-full rounded-md"
              alt="About 1"
              height={400}
              width={400}
            />
            <BirdsDecoration className="absolute bottom-32 right-4 hidden h-24 text-primary xs:block md:bottom-2 lg:bottom-14" />
          </div>
          <div className="grid gap-4 md:gap-8">
            <div className="grid place-items-center gap-1 rounded-md bg-secondary p-4 text-center">
              <strong className="text-4xl text-secondary-foreground">2+</strong>
              <span className="text-secondary-foreground">
                Years of Experience
              </span>
            </div>
            <div className="grid place-items-center gap-1 rounded-md bg-primary p-4 text-center">
              <strong className="text-4xl text-primary-foreground">70+</strong>
              <span className="text-primary-foreground">Happy Customers</span>
            </div>
            <Image
              src="/about-2.jpg"
              className="w-full rounded-md md:col-span-2"
              alt="About 1"
              height={400}
              width={400}
            />
          </div>
        </div>
        <div className="space-y-6 lg:space-y-8">
          <p className="text-balance text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            World-Class Quality with Expert Team
          </p>

          <p className="leading-relaxed md:max-w-[50ch]">
            Nexorith delivers premium tech solutions and skill training. With
            expertise in cybersecurity, blockchain, app development, and more,
            we empower businesses to succeed digitally.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-1">
              <BadgeCheckIcon className="not-sr-only fill-primary text-primary-foreground" />
              <span>
                <strong>Cutting-Edge Solutions: </strong> Innovative tech
                solutions that keep your business competitive and secure.
              </span>
            </li>
            <li className="flex items-center gap-1">
              <BadgeCheckIcon className="not-sr-only fill-primary text-primary-foreground" />
              <span>
                <strong>Expert Guidance:</strong> Partner with a skilled team in
                cutting-edge tech, from cybersecurity to blockchain, for
                reliable results.
              </span>
            </li>
            <li className="flex items-center gap-1">
              <BadgeCheckIcon className="not-sr-only fill-primary text-primary-foreground" />
              <span>
                <strong>Customized Approach:</strong> Get tailored solutions
                aligned with your unique business goals for maximum impact and
                efficiency.s
              </span>
            </li>
          </ul>
          <Link className="flex" href="/about">
            <Button variant="secondary" size="lg" className="group">
              <span>Learn More</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </div>
      </section>
      <section className="bg-opacity-40 bg-course-bg">
        <section className="py-10">
          <header className="mb-8 space-y-2 text-center lg:space-y-5">
            <h2 className="text-balance text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Global Expertise: Courses with International-Level Content
            </h2>
            <p className="mx-auto leading-relaxed">
              Unlock globally recognized knowledge and skills with courses
              designed to meet international standards, ensuring you stay
              competitive and informed.
            </p>
          </header>
          <section className="container grid items-center gap-8 py-16 md:gap-20 md:py-20 lg:grid-cols-[3fr,2fr] lg:py-24">
            <div className="space-y-6 lg:space-y-8">
              {/* TODO: Fix duplicate */}

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-1">
                  <BadgeCheckIcon className="not-sr-only fill-primary text-primary-foreground" />
                  <span>
                    <strong> Expert-Led Curriculum:</strong> Learn from industry
                    professionals for real-world insights and practical
                    knowledge.
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <BadgeCheckIcon className="not-sr-only fill-primary text-primary-foreground" />
                  <span>
                    <strong> Flexible, Self-Paced Learning:</strong> Study at
                    your own pace to balance learning with other commitments..
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <BadgeCheckIcon className="not-sr-only fill-primary text-primary-foreground" />
                  <span>
                    <strong>
                      Affordable Access to High-Quality IT Courses:
                    </strong>{" "}
                    Gain valuable skills with competitive pricing options.
                  </span>
                </li>
              </ul>
              <Link className="flex" href="/courses">
                <Button variant="secondary" size="lg" className="group">
                  <span>Get your first demo class</span>
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 xs:grid-cols-1 md:gap-8">
              <div className="relative">
                <Image
                  src="/course1.svg"
                  className="hidden w-full rounded-md md:flex lg:flex"
                  alt="About 1"
                  height={100}
                  width={100}
                />
              </div>
              <div className="grid gap-4 md:gap-8"></div>
            </div>
          </section>
        </section>

        <section className="container -mt-20 py-16 md:py-20 lg:py-24">
          <header className="mb-8 space-y-2 text-center lg:space-y-5">
            <h2 className="text-balance text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Our Courses
            </h2>
            <p className="mx-auto max-w-[50ch] leading-relaxed">
              Expand your skills with our comprehensive selection of courses.
              From beginner to advanced, we have something for everyone.
            </p>
          </header>

          <CourseCatalog />
        </section>
      </section>
      <section className="grid place-items-center gap-6 bg-gray-100 py-16 md:py-20 lg:py-24">
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
      <section className="container grid items-center gap-8 py-16 md:gap-10 md:py-20 lg:grid-cols-[1fr,3fr] lg:py-24">
        <div className="space-y-6 lg:space-y-8">
          {/* TODO: Fix duplicate */}
          <Link
            className="group inline-block rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            href="/contact"
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>💖 Real results from real clients</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </Link>

          <h2 className="max-w-[20ch] text-balance text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            See how we&apos;ve helped our clients succeed
          </h2>

          <strong className="block text-lg">
            Over 70 satisfied clients and more than 500 happy students.
          </strong>

          <Carousel
            opts={{ align: "start", slidesToScroll: 1 }}
            className="max-w-[90vw]"
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="select-none space-y-4 md:basis-1/2"
                >
                  <blockquote className="font-medium leading-relaxed">
                    {review.description}
                  </blockquote>
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src={review.avatar} alt={review.name} />
                    </Avatar>
                    <span>By {review.name}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots className="mt-6 lg:mt-8" />
          </Carousel>
        </div>
        <div className="relative">
          <ArrowDecoration className="absolute -left-28 top-1/4 hidden h-40 lg:block" />
          <Image
            className="w-full"
            src="/testimonials.jpg"
            alt="Testimonials"
            height={400}
            width={400}
          />
          {/* <div className="absolute left-5 top-5 flex max-w-[35ch] items-center gap-2 rounded-md bg-secondary p-2 text-secondary-foreground shadow-md lg:-left-20 lg:top-16">
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/59228569"
                alt="Person"
              />
            </Avatar>
            <p>The best Bootstrap theme we&apos;ve ever used 🔥</p>
          </div>

          <div className="absolute bottom-5 right-5 flex max-w-[35ch] items-center gap-2 rounded-md bg-white p-2 shadow-md lg:-left-20 lg:bottom-16">
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/20110627"
                alt="Person"
              />
            </Avatar>
            <p>Excellent Theme 💖</p>
          </div> */}
        </div>
      </section>
    </main>
  );
}
