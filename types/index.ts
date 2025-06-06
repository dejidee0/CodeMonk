export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPrice?: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  image: string;
  instructor: string;
  enrolledStudents: number;
  rating: number;
  slug: string;
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
