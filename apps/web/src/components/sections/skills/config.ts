import type { Skill } from "@/types/skill";

const skills: Skill[] = [
  {
    name: "Full Stack Development",
    thumbnail: "images/skills/software-developer.jpg",
    description: "Full Stack Development encompasses both front-end and back-end work to build robust, scalable, and user-friendly applications. It involves a wide range of technologies, frameworks, and best practices for everything from designing intuitive user interfaces to managing efficient server-side logic and databases."
  },
  {
    name: "System Design & Architecture",
    thumbnail: "images/skills/ui-ux-design.jpg",
    description: "System Design & Architecture focuses on creating high-level plans for scalable, maintainable, and secure software systems. It includes analyzing requirements, choosing appropriate technologies, defining data flows, and applying best practices to ensure efficient performance and adaptability."
  },
  {
    name: "Database Design & Management",
    thumbnail: "images/skills/database-management.jpg",
    description: "Database Design & Management involves planning, creating, and maintaining databases to ensure optimal performance, security, and data integrity. It covers everything from choosing the right data models and indexing strategies to implementing backup and recovery procedures."
  },
  {
    name: "AI Integration",
    thumbnail: "images/skills/ai-integration.jpg",
    description: "AI Integration involves incorporating machine learning and artificial intelligence models into software systems to enhance capabilities and automation. This skill set covers selecting and training appropriate models, implementing inference pipelines, and ensuring seamless integration with existing infrastructures."
  }
];

export { skills };
