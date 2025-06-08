export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  price: number;
  originalPrice?: number;
  instructor: string;
  instructorBio: string;
  rating: number;
  studentsEnrolled: number;
  image: string;
  skills: string[];
  prerequisites: string[];
  curriculum: {
    module: string;
    lessons: string[];
  }[];
  whatYouWillLearn: string[];
  features: string[];
  certificate: boolean;
  support: string;
  access: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  slug: string;
  category: string;
}
