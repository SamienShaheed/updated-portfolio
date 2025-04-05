import type { Contact } from "@/types/contact";
import {
  SiGithub,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";

const contact: Contact = {
  email: "samienshaheed@gmail.com",
  socials: [
    {
      name: "Github",
      href: "https://github.com/SamienShaheed",
      Icon: SiGithub,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/samienshaheed/",
      Icon: SiLinkedin,
    },
  ],
};

export { contact };
