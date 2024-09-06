
export interface Package {
  id: string;
  title: string;
  description: string;
  contentFile: string;
  image?: string;
}

export const packages: Package[] = [
  {
    id: "gen-ai",
    title: "Gen AI",
    description: "Master the fundamentals and applications of Generative AI",
    contentFile: "gen-ai.md"
  },
  {
    id: "ui-development",
    title: "UI Development",
    description: "Learn modern UI development techniques and frameworks",
    contentFile: "ui-development.md"
  },
  {
    id: "backend-system-design",
    title: "Backend System Design",
    description: "Master backend technologies and system design principles",
    contentFile: "backend-system-design.md",
    image: "backend.png"
  }
];