import { Metadata } from "next";
import Link from "next/link";

import { AnnouncementIcon } from "@/components/icons/announcement";
import { DatabaseIcon } from "@/components/icons/database";
import { GraphIcon } from "@/components/icons/graph";
import { PaintIcon } from "@/components/icons/paint";
import { PersonAnnouncingIcon } from "@/components/icons/person-announcing";
import { RedditIcon } from "@/components/icons/reddit";
import { ServicesIcon } from "@/components/icons/services";
import { StrategyIcon } from "@/components/icons/strategy";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { MoveRightIcon, PhoneIcon } from "lucide-react";

import { avatarUrls, companies, links } from "@/configs/site";

export const metadata: Metadata = {
  title: "Services",
};

const services = [
  {
    icon: AnnouncementIcon,
    title: "Digital Marketing",
    description:
      "Digital marketing is the art and science of reaching, engaging, and influencing your target audience through online channels.",
  },
  {
    icon: PaintIcon,
    title: "Web design",
    description:
      "A well-designed website not only captivates visitors but also conveys a brand's identity, ultimately driving engagement and conversions.",
  },
  {
    icon: StrategyIcon,
    title: "Strategic planning",
    description:
      "Strategic planning is the deliberate process of defining an organization's goals and objectives",
  },
  {
    icon: RedditIcon,
    title: "Brand design",
    description:
      "Brand design is the creative process of crafting a visual and emotional identity that represents your business",
  },
  {
    icon: DatabaseIcon,
    title: "Database analysis",
    description:
      "Database analysis involves the systematic examination of structured data sets to extract valuable insights, patterns, and trends.",
  },
  {
    icon: GraphIcon,
    title: "Business consulting",
    description:
      "Consultants analyze your operations, provide strategic recommendations assist in implementing solutions to tackle challenges, and drive growth.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="container grid items-center gap-14 py-16 md:grid-cols-2 md:gap-20 md:py-20 lg:gap-32 lg:py-24">
        <div className="space-y-6 lg:space-y-8">
          <h2 className="text-balance text-4xl font-bold tracking-tighter md:max-w-[12ch] md:text-5xl lg:text-7xl">
            Discover the solutions we offer
          </h2>
          <p className="leading-relaxed md:max-w-[50ch]">
            Our experienced team is dedicated to helping you achieve your goals
            through innovative technology.
          </p>
          <Button className="gap-2" size="lg" asChild>
            <Link href={links.contact}>
              <PhoneIcon className="h-4 w-4" />
              <span>Contact us</span>
            </Link>
          </Button>

          <div className="flex gap-4">
            <div className="flex -space-x-1">
              {avatarUrls.slice(0, 2).map((avatar) => (
                <Avatar key={avatar} className="h-12 w-12">
                  <AvatarImage src={avatar} />
                </Avatar>
              ))}
              <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-primary text-sm text-primary-foreground">
                10k+
              </div>
            </div>
            <div className="grid justify-items-start">
              <div className="font-medium">More then 10k active users! 🤩</div>
              <Link
                href={links.contact}
                className="group flex items-center p-0 transition hover:text-primary"
              >
                Join them now
                <MoveRightIcon className="h-4 transition group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <ServicesIcon className="text-primary" />
        </div>
      </section>

      <section className="container grid items-center gap-4 py-16 md:grid-cols-2 md:py-20 lg:gap-6 lg:py-24">
        {services.map((service) => (
          <Link
            key={service.title}
            href="#"
            className="group grid h-full grid-cols-[1fr,8fr] gap-4 rounded-md border p-6 transition hover:-translate-y-1 hover:shadow-[0px_0px_17px_-3px_rgba(0,_0,_0,_0.1)] lg:gap-6 lg:p-8"
          >
            <service.icon className="self-start text-primary" />
            <div className="flex flex-col justify-between">
              <div className="mb-4 space-y-4">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <div className="text-foreground/80">{service.description}</div>
              </div>
              <div className="flex items-center gap-0.5 p-0 transition group-hover:text-primary">
                <span>Know more</span>
                <MoveRightIcon className="h-4 transition group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="container relative">
        <div className="grid place-items-center space-y-4 bg-secondary py-16 text-center text-secondary-foreground md:py-20 lg:space-y-6 lg:py-24">
          <h2 className="text-balance text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            Ready to elevate your business?
          </h2>
          <p className="max-w-[50ch] text-balance">
            Join the Mizzle revolution today and be part of the millions
            who&apos;ve already embraced a brighter future!
          </p>
          <Button asChild size="lg">
            <Link href={links.contact}>Get started today</Link>
          </Button>

          <div className="mt-8 grid place-items-center">
            <div>Used by the world best companies.</div>
            <Carousel
              opts={{ align: "start", slidesToScroll: 1, loop: true }}
              className={"mt-4 max-w-[60vw] md:max-w-[70vw] lg:max-w-[600px]"}
            >
              <CarouselContent className="-ml-4">
                {companies.map((Company, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 pl-4 md:basis-1/4 lg:basis-1/4"
                  >
                    <Company className="h-[7vw] sm:h-8 lg:h-6" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        <PersonAnnouncingIcon className="absolute bottom-6 right-6 hidden h-40 text-primary lg:block" />
      </section>

      <section className="container max-w-[700px] py-16 md:py-20 lg:py-24">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
          You have questions we have answers
        </h2>

        <Accordion type="single" collapsible className="mt-6 space-y-4">
          <AccordionItem
            value="item-1"
            className="rounded-md bg-white px-6 py-3 shadow-md"
          >
            <AccordionTrigger className="font-bold">
              What web development technologies does Nexorith specialize in?
            </AccordionTrigger>
            <AccordionContent>
              Nexorith specializes in modern web development technologies
              including React, Next.js, and serverless architecture for scalable
              and responsive web applications.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="rounded-md bg-white px-6 py-3 shadow-md"
          >
            <AccordionTrigger className="font-bold">
              How does Nexorith approach SEO optimization?
            </AccordionTrigger>
            <AccordionContent>
              Nexorith uses a combination of on-page and off-page SEO
              strategies, including content optimization, technical SEO audits,
              and link-building to help clients rank higher in search engine
              results.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="rounded-md bg-white px-6 py-3 shadow-md"
          >
            <AccordionTrigger className="font-bold">
              What digital marketing services does Nexorith offer?
            </AccordionTrigger>
            <AccordionContent>
              Nexorith offers a wide range of digital marketing services,
              including social media marketing, pay-per-click (PPC) advertising,
              email campaigns, and analytics-driven strategies to boost online
              presence and engagement.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="rounded-md bg-white px-6 py-3 shadow-md"
          >
            <AccordionTrigger className="font-bold">
              Does Nexorith offer website maintenance and support?
            </AccordionTrigger>
            <AccordionContent>
              Yes, Nexorith provides ongoing website maintenance and support
              services to ensure your website stays up-to-date, secure, and
              optimized for performance.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="rounded-md bg-white px-6 py-3 shadow-md"
          >
            <AccordionTrigger className="font-bold">
              How does Nexorith ensure website security?
            </AccordionTrigger>
            <AccordionContent>
              Nexorith follows best practices for website security, including
              SSL certification, regular vulnerability assessments, and secure
              coding practices to protect against cyber threats and ensure data
              privacy.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
