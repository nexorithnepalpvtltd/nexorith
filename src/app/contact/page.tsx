import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <section className="container">
        <Image
          src="/contact-hero.jpg"
          alt="Contac hero"
          height={500}
          width={500}
          className="mx-auto w-full max-w-[900px] rounded-md"
        />

        <div className="lg:p-18 relative z-10 mx-auto -mt-10 max-w-[80vw] space-y-8 rounded-md bg-white p-6 shadow-[0px_0px_75px_-22px_rgba(0,_0,_0,_0.1)] md:-mt-16 md:p-10 lg:-mt-28 lg:max-w-[700px]">
          <div className="space-y-4">
            <h2 className="max-w-[20ch] text-balance text-2xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Let&apos;s level up your brand, together
            </h2>
            <div className="text-muted-foreground">
              You can reach us anytime via info@nexorith.com
            </div>
          </div>

          <hr />

          <div className="grid gap-6">
            <div className="flex flex-col gap-2.5">
              <Label htmlFor="name">Full Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="John Smith"
                className="py-5"
                required
              />
            </div>
            <div className="grid gap-2.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="email@website.com"
                className="py-5"
                required
              />
            </div>
            <div className="grid gap-2.5">
              <Label htmlFor="tel">Phone number</Label>
              <Input
                type="text"
                id="tel"
                placeholder="98XXXXXXXX"
                className="py-5"
                required
              />
            </div>
            <div className="grid gap-2.5">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="We want to..." rows={4} />
            </div>

            <Button className="justify-self-start" size="lg">
              Send a message
            </Button>
          </div>
        </div>
      </section>

      <section className="container grid items-center gap-6 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-3 lg:py-24">
        <div className="flex h-full flex-col justify-center gap-4 rounded-md border bg-secondary p-6 text-secondary-foreground shadow-sm lg:p-8">
          <MapPinIcon className="text-primary" />
          <h3 className="text-lg font-bold">Office Address</h3>
          <div className="text-secondary-foreground/80">
            1421 Coburn Hollow Road Metamora, Near Center Point, IL 61548.
          </div>
        </div>
        <div className="flex h-full flex-col justify-center gap-4 rounded-md border bg-secondary p-6 text-secondary-foreground shadow-sm lg:p-8">
          <MailIcon className="text-primary" />
          <h3 className="text-lg font-bold">Email us</h3>
          <div className="text-secondary-foreground/80">
            We&apos;re on top of things and aim to respond to all inquiries
            within 24 hours.
          </div>
          <Button variant="link" className="inline-block p-0" asChild>
            <Link href="mailto:info@nexorith.com">info@nexorith.com</Link>
          </Button>
        </div>
        <div className="flex h-full flex-col justify-center gap-4 rounded-md border bg-secondary p-6 text-secondary-foreground shadow-sm md:col-span-2 lg:col-span-1 lg:p-8">
          <PhoneIcon className="text-primary" />
          <h3 className="text-lg font-bold">Call us</h3>
          <div className="text-secondary-foreground/80">
            Let&apos;s work together towards a common goal - get in touch!
          </div>
          <Button variant="link" className="inline-block p-0" asChild>
            <Link
              href="https://api.whatsapp.com/send?phone=9779818385342"
              target="_blank"
            >
              +977 981-8385342{" "}
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <iframe
          aria-hidden="false"
          src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          tabIndex={0}
          title="Google Map"
          className="h-72 w-full md:h-80 lg:h-96"
        />
      </section>
    </main>
  );
}
