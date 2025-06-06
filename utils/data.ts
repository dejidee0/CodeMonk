import { Course, Testimonial, Instructor, BlogPost } from "../types";

export const courses: Course[] = [
  {
    id: "1",
    title: "Complete React Developer Bootcamp",
    description:
      "Master React.js and modern frontend development with hands-on projects and industry best practices.",
    price: 199.99,
    discountPrice: 149.99,
    duration: "8 weeks",
    level: "Intermediate",
    category: "Web Development",
    image:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
    instructor: "John Doe",
    enrolledStudents: 1250,
    rating: 4.8,
    slug: "complete-react-developer-bootcamp",
  },
  {
    id: "2",
    title: "Python for Data Science and ML",
    description:
      "Learn Python programming from scratch and apply it to data science, machine learning, and AI projects.",
    price: 229.99,
    discountPrice: 179.99,
    duration: "10 weeks",
    level: "Beginner",
    category: "Data Science",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
    instructor: "Jane Smith",
    enrolledStudents: 980,
    rating: 4.7,
    slug: "python-data-science-ml",
  },
  {
    id: "3",
    title: "Full-Stack JavaScript Masterclass",
    description:
      "Build modern web applications with JavaScript, Node.js, Express, and MongoDB from start to finish.",
    price: 249.99,
    discountPrice: 199.99,
    duration: "12 weeks",
    level: "Advanced",
    category: "Web Development",
    image: "https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg",
    instructor: "Michael Johnson",
    enrolledStudents: 750,
    rating: 4.9,
    slug: "full-stack-javascript-masterclass",
  },
  {
    id: "4",
    title: "UI/UX Design Fundamentals",
    description:
      "Learn the principles of user interface and user experience design to create intuitive digital products.",
    price: 179.99,
    discountPrice: 139.99,
    duration: "6 weeks",
    level: "Beginner",
    category: "Design",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    instructor: "Sarah Williams",
    enrolledStudents: 620,
    rating: 4.6,
    slug: "uiux-design-fundamentals",
  },
  {
    id: "5",
    title: "DevOps and Cloud Computing",
    description:
      "Master DevOps principles and cloud services with AWS, Docker, and Kubernetes for modern deployments.",
    price: 299.99,
    discountPrice: 249.99,
    duration: "10 weeks",
    level: "Advanced",
    category: "DevOps",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
    instructor: "David Brown",
    enrolledStudents: 430,
    rating: 4.8,
    slug: "devops-cloud-computing",
  },
  {
    id: "6",
    title: "Mobile App Development with React Native",
    description:
      "Build cross-platform mobile applications for iOS and Android using React Native and JavaScript.",
    price: 219.99,
    discountPrice: 169.99,
    duration: "8 weeks",
    level: "Intermediate",
    category: "Mobile Development",
    image: "https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg",
    instructor: "Jessica Lee",
    enrolledStudents: 580,
    rating: 4.7,
    slug: "mobile-app-react-native",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Frontend Developer",
    company: "TechCorp",
    content:
      "The React Developer Bootcamp completely transformed my career. I went from struggling with basic concepts to confidently building complex applications in just 8 weeks.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: 5,
  },
  {
    id: "2",
    name: "Samantha Williams",
    role: "Data Scientist",
    company: "DataInsights",
    content:
      "The Python for Data Science course provided me with all the skills I needed to transition into a new role. The instructor was incredibly knowledgeable and supportive.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    rating: 5,
  },
  {
    id: "3",
    name: "Raj Patel",
    role: "Full-Stack Developer",
    company: "WebSolutions",
    content:
      "After completing the Full-Stack JavaScript Masterclass, I was able to build and deploy complete web applications. The course was challenging but incredibly rewarding.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    rating: 4,
  },
];

export const instructors: Instructor[] = [
  {
    id: "1",
    name: "John Doe",
    role: "Senior React Developer",
    bio: "John has over 10 years of experience in web development and has worked with companies like Google and Facebook. He specializes in React and modern JavaScript frameworks.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    expertise: ["React", "JavaScript", "TypeScript", "Redux"],
    socialLinks: {
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
    },
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Data Science Expert",
    bio: "Jane has a PhD in Computer Science and specializes in machine learning and data analysis. She has published numerous research papers and worked on innovative AI projects.",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
    expertise: ["Python", "Machine Learning", "Data Analysis", "AI"],
    socialLinks: {
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  {
    id: "3",
    name: "Michael Johnson",
    role: "Full-Stack Developer",
    bio: "Michael is a seasoned full-stack developer with expertise in JavaScript, Node.js, and MongoDB. He has built numerous production-ready applications and mentored dozens of developers.",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    expertise: ["JavaScript", "Node.js", "Express", "MongoDB"],
    socialLinks: {
      twitter: "https://twitter.com/michaeljohnson",
      linkedin: "https://linkedin.com/in/michaeljohnson",
      github: "https://github.com/michaeljohnson",
    },
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development in 2025",
    excerpt:
      "Explore the upcoming trends and technologies that will shape the web development landscape in the coming years.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.",
    author: "John Doe",
    date: "2023-04-15",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    slug: "future-web-development-2025",
    category: "Web Development",
  },
  {
    id: "2",
    title: "Getting Started with Machine Learning: A Beginner's Guide",
    excerpt:
      "Learn the fundamentals of machine learning and how to implement your first ML model with Python.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.",
    author: "Jane Smith",
    date: "2023-03-22",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
    slug: "getting-started-machine-learning",
    category: "Data Science",
  },
  {
    id: "3",
    title: "10 Essential UI/UX Principles Every Developer Should Know",
    excerpt:
      "Discover the key design principles that can help developers create more user-friendly and visually appealing applications.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.",
    author: "Sarah Williams",
    date: "2023-02-10",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg",
    slug: "essential-uiux-principles-developers",
    category: "Design",
  },
];
