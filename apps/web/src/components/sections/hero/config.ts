import type { Hero } from "@/types/hero";
import { metadata as meta } from "@/app/config";

const hero: Hero = {
  name: meta.author.name,
  label: meta.author.label,
  description:
    "I design and build ERP software & AI Solutions. Welcome to my portfolio.",
};

export { hero };
