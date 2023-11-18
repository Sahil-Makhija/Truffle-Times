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
