import { FooterNavItem, LinkItem } from "@/lib/types";
import { Linkedin, Slack } from "lucide-react";

export const links: LinkItem[] = [
  { id: 0, name: "Articles", to: "/articles" },
  { id: 1, name: "About", to: "/about" },
  // { id: 3, name: "Search", to: "/search" },
];

export const siteData = {
  title: 'Dan Cramer',
  author: 'Dan Cramer',
  headerTitle: 'Dan Cramer',
  profileUrl: '/logo.svg',
  headerDescription: 'Personal Site for me, Dan Cramer',
  footerText: '© All rights reserved',
  language: 'en-us',
  locale: 'en-US',
  websiteUrl: 'dancramer.com',
};


export const footerNavigation: FooterNavItem[] = [
  // {
  //   name: "GitHub",
  //   href: "/",
  //   icon: Github,
  // },
  // {
  //   name: "Twitter",
  //   href: "/",
  //   icon: Twitter,
  // },
  // {
  //   name: "Slack",
  //   href: "https://join.slack.com/t/analytics-roundtable/shared_invite/zt-1m5vonbd3-4~ZRqbz_sO4iWrn691DhwA",
  //   icon: Slack,
  // },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/dancramer/",
    icon: Linkedin,
  },
];

export const postsPerPage = 5;

export const email = "dancramer@gmail.com";
