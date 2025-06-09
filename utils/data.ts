import { Testimonial, Instructor, BlogPost } from "../types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Joshua Akinlade",
    role: "Frontend Developer",
    company: "CodewithMonk",
    content:
      "The React Developer Bootcamp completely transformed my career. I went from struggling with basic concepts to confidently building complex applications in just 8 weeks.",
    image: "/student1.jpg",
    rating: 5,
  },
  {
    id: "2",
    name: "Paul Adegbenro",
    role: "Data Scientist",
    company: "FindPeace Developer",
    content:
      "The Python for Data Science course provided me with all the skills I needed to transition into a new role. The instructor was incredibly knowledgeable and supportive.",
    image: "/student2.jpg",
    rating: 5,
  },
  {
    id: "3",
    name: "Timothy Williams",
    role: "Full-Stack Developer",
    company: "CodewithMonk",
    content:
      "After completing the Full-Stack JavaScript Masterclass, I was able to build and deploy complete web applications. The course was challenging but incredibly rewarding.",
    image: "/student3.jpg",
    rating: 4,
  },
];

export const instructors: Instructor[] = [
  {
    id: "1",
    name: "Aboderin Daniel",
    role: "Senior React Developer",
    bio: "Daniel has over 10 years of experience in web development and has worked with companies like Jay Dermont Technologies and CodewithMonk. He specializes in React and modern JavaScript frameworks.",
    image: "/teach1.jpg",
    expertise: ["React", "JavaScript", "TypeScript", "Redux"],
    socialLinks: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "2",
    name: "Okechukwu Kingsley",
    role: "FullStack Software Developer",
    bio: "Kingsley has a degree in Computer Science and specializes in machine learning and data analysis. He has developed numerous software solutions and worked on innovative AI projects.",
    image: "/kingsley.jpg",
    expertise: ["Python", "Javascript", "AI"],
    socialLinks: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "3",
    name: "Adedeji Michael",
    role: "Full-Stack Developer",
    bio: "Michael is a seasoned Software Architect with expertise in JavaScript, Node.js, and MongoDB. He has built numerous production-ready applications and mentored dozens of developers.",
    image: "/founder.jpg",
    expertise: ["JavaScript", "C#", "Express", "MongoDB"],
    socialLinks: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development in Nigeria 2025",
    excerpt:
      "Explore the upcoming trends and technologies that will shape the Nigerian web development landscape in the coming years.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.",
    author: "Emeka Okonkwo",
    date: "2023-04-15",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    slug: "future-web-development-nigeria-2025",
    category: "Web Development",
  },
  {
    id: "2",
    title: "Getting Started with Machine Learning: A Beginner's Guide",
    excerpt:
      "Learn the fundamentals of machine learning and how to implement your first ML model with Python in the Nigerian context.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.",
    author: "Funmi Adebayo",
    date: "2023-03-22",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
    slug: "getting-started-machine-learning-nigeria",
    category: "Data Science",
  },
  {
    id: "3",
    title: "10 Essential UI/UX Principles Every Nigerian Developer Should Know",
    excerpt:
      "Discover the key design principles that can help Nigerian developers create more user-friendly and culturally relevant applications.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.",
    author: "Kemi Adebayo",
    date: "2023-02-10",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg",
    slug: "essential-uiux-principles-nigerian-developers",
    category: "Design",
  },
];
