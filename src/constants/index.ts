import ModelImage1 from "../assets/images/model-1.avif";
import StudioImage from "../assets/images/studio-image.jpg";
import ModelImage2 from "../assets/images/model-2.jpg";
import WallOfFameImage from "../assets/images/wall-of-fame.jpg";
import ModelImage3 from "../assets/images/model-3.jpg";
import SubImage3 from "../assets/images/sub-image-3.jpg";
export const navbarLinks: {
  label: string;
  href: "/";
  subLinks?: { label: string; href: string }[];
}[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/",
  },
  {
    label: "Services",
    href: "/",
  },
  {
    label: "Our Work",
    href: "/",
    subLinks: [
      {
        label: "Case Study - B2B",
        href: "/",
      },
    ],
  },
  {
    label: "Learn",
    href: "/",
    subLinks: [
      {
        label: "Downloads",
        href: "/",
      },
      {
        label: "Blog",
        href: "/",
      },
    ],
  },
  {
    label: "Work with us",
    href: "/",
  },
];

export const heroSectionData: {
  title: string;
  mainImage: string;
  subImage: string;
}[] = [
  {
    title: "Creativity",
    mainImage: ModelImage1,
    subImage: StudioImage,
  },
  {
    title: "Agility",
    mainImage: ModelImage2,
    subImage: WallOfFameImage,
  },
  {
    title: "Strategy",
    mainImage: ModelImage3,
    subImage: SubImage3,
  },
];

export const AccordianData: { title: string; description: string }[] = [
  {
    title: "Social Media Marketing",
    description:
      "Social Media is the key ingredient to running a successful business as its one of the best advocates of proving your credibility online and IRL",
  },
  {
    title: "Strategy + Consulting",
    description:
      "Prepare to slay the marketing game with our Strategy + Consulting service. We’re here to serve up some serious sass and Gen Z style. No more boring fluff – we bring the real deal to skyrocket your business to legendary status",
  },
  {
    title: "Content Creation",
    description:
      "Lights, camera, action! Welcome to the production powerhouse where content creation takes centre stage. Our exceptional team is ready to transform your vision into a visual masterpiece.",
  },
  {
    title: "Paid Ad Management",
    description:
      "Are you ready to slay the game of paid ads management? We’re the ultimate squad of digital marketing maestros, taking over platforms like Facebook Ads, TikTok Ads, and Pinterest Ads, where the Gen-Z party never stops.",
  },
  {
    title: "Website Development",
    description:
      "Get ready to rock the digital world with our kickass Website Development Service at Truffle Times. We’re not about boring websites – we create digital wonders that make your competitors go, “Whoa!” From stunning e-commerce platforms to mobile-friendly magic, we’ll make your website a showstopper.",
  },
  {
    title: "Email Marketing",
    description:
      "Get ready to unleash your product-based business’s email marketing game like a fearless champion! We’re here to bring the bold, the fun, and the unstoppable energy to your brand.",
  },
];
