import { NexorithLogo } from "@/components/icons/logo";

export const links = {
  home: "/",
  about: "/about",
  services: "/services",
  blogs: "/blogs",
  courses: "/courses",
  contact: "/contact",
} as const;

export const navLinks = [
  { href: links.home, label: "Home" },
  { href: links.about, label: "About" },
  { href: links.services, label: "Services" },
  // { href: links.blogs, label: "Blogs" },
  { href: links.courses, label: "Courses" },
  { href: links.contact, label: "Contact" },
];

export const reviews = [
  {
    description:
      "Nexorith has transformed my understanding of web development! The courses are incredibly well-structured and informative.",
    avatar: "https://avatars.githubusercontent.com/u/12345678",
    name: "Aarav Shrestha",
  },
  {
    description:
      "I loved the hands-on approach of the Graphic Design Workshop. The instructors are knowledgeable and supportive.",
    avatar: "https://avatars.githubusercontent.com/u/23456789",
    name: "Sita Gurung",
  },
  {
    description:
      "The digital marketing strategies I learned from Nexorith helped boost my business's online presence significantly!",
    avatar: "https://avatars.githubusercontent.com/u/34567890",
    name: "Samir Thapa",
  },
  {
    description:
      "As a beginner, I found the Frontend Workshop to be very approachable and engaging. Highly recommended!",
    avatar: "https://avatars.githubusercontent.com/u/45678901",
    name: "Pooja Singh",
  },
  {
    description:
      "The courses at Nexorith provide a solid foundation in various technologies. I can't wait to apply what I've learned!",
    avatar: "https://avatars.githubusercontent.com/u/56789012",
    name: "Rajesh Karki",
  },
  {
    description:
      "Nexorith offers exceptional support throughout the learning process. I appreciate their commitment to student success.",
    avatar: "https://avatars.githubusercontent.com/u/67890123",
    name: "Anjali Rathi",
  },
];

export const avatarUrls = [
  "https://avatars.githubusercontent.com/u/61900781",
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

export const companies = [
  NexorithLogo,
  NexorithLogo,
  NexorithLogo,
  NexorithLogo,
  NexorithLogo,
  NexorithLogo,
  NexorithLogo,
  NexorithLogo,
  NexorithLogo,
  NexorithLogo,
];
