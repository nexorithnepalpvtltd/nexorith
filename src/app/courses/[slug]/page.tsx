import { ReactNode } from "react";

import { notFound } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Expander,
  ExpanderButton,
  ExpanderContent,
} from "@/components/ui/expander";

import { AvatarImage } from "@radix-ui/react-avatar";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";
import "@vidstack/react/player/styles/default/layouts/video.css";
import "@vidstack/react/player/styles/default/theme.css";
import {
  BookOpenTextIcon,
  CircleCheckIcon,
  ClockIcon,
  GlobeIcon,
  GraduationCapIcon,
  InfoIcon,
  MedalIcon,
  SignalIcon,
  StarHalfIcon,
  StarIcon,
} from "lucide-react";

import { courses } from "@/courses";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const course = courses.find((c) => c.slug === slug);
  if (!course) return notFound();

  return (
    <main>
      <div className="container grid gap-6 md:grid-cols-[2fr,1fr]">
        <div className="space-y-8 py-6 md:py-8 lg:py-10">
          <section className="space-y-4">
            <h1 className="text-balance text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              {course.title}
            </h1>
            <p className="leading-relaxed text-gray-600">
              {course.shortDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-1">
                <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span>{course.rating}/5.0</span>
              </div>
              <div className="flex items-center gap-1">
                <GraduationCapIcon className="h-5 w-5" />
                <span>{course.enrolledCount} Enrolled</span>
              </div>
              <div className="flex items-center gap-1">
                <SignalIcon className="h-5 w-5" />
                <span>{course.level}</span>
              </div>
              <div className="flex items-center gap-1">
                <InfoIcon className="h-5 w-5" />
                <span>
                  Last updated{" "}
                  {course.lastUpdatedDate.toLocaleDateString("en-US", {
                    month: "2-digit",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <GlobeIcon className="h-5 w-5" />
                <span>{course.language}</span>
              </div>
            </div>
          </section>

          <section>
            <MediaPlayer title={course.title} src={course.videoUrl}>
              <MediaProvider />
              <DefaultVideoLayout icons={defaultLayoutIcons} />
            </MediaPlayer>
          </section>

          <section>
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  <h2>Course description</h2>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Expander initialVisibleItems={3}>
                  <ExpanderContent className="space-y-4 leading-relaxed text-gray-600">
                    {course.longDescription}
                  </ExpanderContent>

                  <ExpanderButton size="sm" />
                </Expander>

                <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
                  What you&apos;ll learn
                </h3>

                <ul className="space-y-1 md:columns-2">
                  {course.keyLearnings.map((keylearning, index) => (
                    <li key={index} className="flex gap-1">
                      <CircleCheckIcon className="not-sr-only h-6 fill-primary text-white" />
                      <span>{keylearning}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  <h2>Curriculum</h2>
                </CardTitle>
              </CardHeader>
              <Expander initialVisibleItems={2}>
                <CardContent>
                  <ExpanderContent className="space-y-4 leading-relaxed">
                    {course.modules.map((module, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
                          {module.title} ({module.lectures.length} lectures)
                        </h3>
                        <ul className="ml-4 list-disc space-y-1">
                          {module.lectures.map((lecture, lectureIdx) => (
                            <li key={lectureIdx}>{lecture}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </ExpanderContent>
                </CardContent>
                <CardFooter>
                  <ExpanderButton
                    collapseText="Show less curriculum"
                    expandText="Show more curriculum"
                    size="sm"
                    className="w-full"
                  />
                </CardFooter>
              </Expander>
            </Card>
          </section>

          <section>
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  <h2>Frequently Asked Questions</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="multiple" className="space-y-4">
                  {course.faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={`question-${index}`}
                      className="rounded-md border bg-white px-6 py-3 shadow-sm"
                    >
                      <AccordionTrigger className="font-bold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </section>
        </div>
        <div className="space-y-8 pb-6 md:sticky md:top-24 md:self-start md:pb-8 lg:pb-10">
          <section>
            <Card className="shadow-none">
              <CardHeader className="space-y-4">
                <CardTitle className="text-xl font-bold md:text-2xl lg:text-3xl">
                  Rs. {course.price}
                </CardTitle>

                <Button size="lg">Buy now</Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <h2 className="text-lg font-semibold md:text-xl">
                  This course includes
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpenTextIcon className="h-4 w-4 text-primary" />
                      <span>Lectures</span>
                    </div>
                    <span className="text-gray-600">
                      {course.modules.reduce(
                        (acc, value) => acc + value.lectures.length,
                        0,
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4 text-primary" />
                      <span>Duration</span>
                    </div>
                    <span className="text-gray-600">{course.duration}</span>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <SignalIcon className="h-4 w-4 text-primary" />
                      <span>Skills</span>
                    </div>
                    <span className="text-gray-600">{course.level}</span>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <GlobeIcon className="h-4 w-4 text-primary" />
                      <span>Language</span>
                    </div>
                    <span className="text-gray-600">{course.language}</span>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <MedalIcon className="h-4 w-4 text-primary" />
                      <span>Certificate</span>
                    </div>
                    <span className="text-gray-600">
                      {course.isCertificateAvailable ? "Yes" : "No"}
                    </span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex-col items-start gap-2">
                <div className="flex items-center gap-3">
                  <Avatar className="h-14 w-14">
                    <AvatarImage
                      src={course.instructor.profilePicUrl}
                      alt="Author"
                    />
                  </Avatar>
                  <div>
                    <div className="text-xl font-semibold">
                      By {course.instructor.name}
                    </div>
                    <div className="-mt-0.5 text-sm text-gray-600">
                      {course.instructor.role}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <Rating rating={course.instructor.rating} />
                  <span>{course.instructor.rating}/5.0</span>
                </div>
              </CardFooter>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
}

interface RatingProps {
  rating: number;
  totalStars?: number;
}

function Rating({ rating, totalStars = 5 }: RatingProps) {
  const renderStars = () => {
    const stars: ReactNode[] = [];
    for (let i = 1; i <= totalStars; i++) {
      if (rating >= i) {
        stars.push(
          <StarIcon
            key={i}
            className="h-4 w-4 fill-yellow-400 text-yellow-400"
          />,
        );
      } else if (rating > i - 1 && rating < i) {
        stars.push(
          <StarHalfIcon
            key={i}
            className="h-4 w-4 fill-yellow-400 text-yellow-400"
          />,
        );
      } else {
        stars.push(
          <StarIcon key={i} className="h-4 w-4 fill-none text-gray-300" />,
        );
      }
    }
    return stars;
  };

  return <div className="flex gap-0.5">{renderStars()}</div>;
}
