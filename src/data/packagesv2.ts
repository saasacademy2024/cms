export interface Package {
    id: string;
    title: string;
    description: string;
    price: string;
    category: string;
    contentFile: string;
    image?: string;
  }
  
  export const packages: Package[] = [
    {
      id: 'gen-ai',
      title: 'Introduction to Gen AI',
      description: 'Learn the fundamentals of Generative AI and its applications.',
      price: '100000 INR',
      category: 'Gen AI',
      contentFile: 'gen-ai-intro.md',
    },
    {
      id: 'ui-development',
      title: 'Advanced React Development',
      description: 'Master React and build complex web applications.',
      price: '50000 INR',
      category: 'UI Development for Web and Mobile Apps',
      contentFile: 'ui-development.md',
    },
    {
      id: 'backend-system-design',
      title: 'Microservices Architecture',
      description: 'Design and implement scalable backend systems using microservices.',
      price: '75000 INR',
      category: 'Backend System Design',
      contentFile: 'backend-system-design.md',
      image: "backend.png"
    },
    {
      id: 'devops',
      title: 'DevOps Fundamentals',
      description: 'Learn essential DevOps practices and tools.',
      price: '40000 INR',
      category: 'DevOps',
      contentFile: 'devops.md',
      image: "devops.jpeg"
    },
  ];