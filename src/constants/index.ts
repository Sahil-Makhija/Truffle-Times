import ModelImage1 from "../assets/images/model-1.avif"
import StudioImage from "../assets/images/studio-image.jpg"
import ModelImage2 from "../assets/images/model-2.jpg"
import WallOfFameImage from "../assets/images/wall-of-fame.jpg"
import ModelImage3 from "../assets/images/model-3.jpg"
import SubImage3 from "../assets/images/sub-image-3.jpg"
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
    title:"Creativity",
    mainImage:ModelImage1,
    subImage:StudioImage
  },
  {
    title:"Agility",
    mainImage:ModelImage2,
    subImage:WallOfFameImage
  },
  {
    title:"Strategy",
    mainImage:ModelImage3,
    subImage:SubImage3
  },

];
