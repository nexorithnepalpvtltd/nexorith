import Link from "next/link";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

import { links } from "@/configs/site";

import { NexorithLogo } from "./icons/logo";
import { Button } from "./ui/button";

export function SiteFooter() {
  return (
    <footer className="bg-secondary pt-16 text-secondary-foreground md:pt-20 lg:pt-24">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[2fr,1fr,1fr,1fr]">
        <div className="space-y-4 md:max-w-[30ch] lg:space-y-6">
          <NexorithLogo className="h-12 text-primary" />
          <p className="text-justify text-secondary-foreground/80">
            "Nexorith" communicates a sense of innovation, progress, and
            professionalism, making it a suitable choice for an IT company that
            aims to offer cutting-edge solutions and services.
          </p>
        </div>
        <div className="space-y-4 lg:space-y-6">
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href={links.home}
                className="font-medium text-secondary-foreground/80 transition hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={links.about}
                className="font-medium text-secondary-foreground/80 transition hover:text-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={links.services}
                className="font-medium text-secondary-foreground/80 transition hover:text-primary"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href={links.courses}
                className="font-medium text-secondary-foreground/80 transition hover:text-primary"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href={links.contact}
                className="font-medium text-secondary-foreground/80 transition hover:text-primary"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/#"
                className="font-medium text-secondary-foreground/80 transition hover:text-primary"
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-medium text-secondary-foreground/80 transition hover:text-primary"
              >
                Become a Partner
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4 lg:space-y-6">
          <h2 className="text-xl font-bold">Community</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="font-medium text-secondary-foreground/80 transition hover:text-primary/100 hover:brightness-[2.5]"
              >
                Student
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-medium text-secondary-foreground/80 transition hover:text-primary/100 hover:brightness-[2.5]"
              >
                Professional
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4 lg:space-y-6">
          <h2 className="text-xl font-bold">Follow us on</h2>
          <ul className="flex flex-wrap gap-1">
            <li>
              <Button
                variant="secondary"
                size="icon"
                className="group brightness-125 transition hover:bg-primary"
              >
                <FacebookIcon className="h-4 w-4 fill-primary stroke-none group-hover:fill-white" />
              </Button>
            </li>
            <li>
              <Button
                variant="secondary"
                size="icon"
                className="group brightness-125 transition hover:bg-primary"
              >
                <InstagramIcon className="h-4 w-4 stroke-primary group-hover:stroke-white" />
              </Button>
            </li>
            <li>
              <Button
                variant="secondary"
                size="icon"
                className="group brightness-125 transition hover:bg-primary"
              >
                <TwitterIcon className="h-4 w-4 fill-primary stroke-none group-hover:fill-white" />
              </Button>
            </li>
            <li>
              <Button
                variant="secondary"
                size="icon"
                className="group brightness-125 transition hover:bg-primary"
              >
                <LinkedinIcon className="h-4 w-4 fill-primary stroke-none group-hover:fill-white" />
              </Button>
            </li>
          </ul>
        </div>
      </div>

      <hr className="container my-8 border-secondary-foreground/10" />

      <div className="container pb-8 text-secondary-foreground/90">
        Copyrights © {new Date().getFullYear()} Nexorith
      </div>
    </footer>
  );
}
