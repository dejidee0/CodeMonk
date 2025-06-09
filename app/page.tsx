import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import FeaturedCourses from "@/components/FeaturedCourses";
import Hero from "@/components/Hero";
import InstructorsSection from "@/components/InstructorsSection";
import Testimonials from "@/components/Testimonials";
import WelcomeModal from "@/components/WelcomeModal";
import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <WelcomeModal />
      <Hero />
      <FeaturedCourses />
      <Testimonials />
      <InstructorsSection />
      <BlogSection />
      <CTASection />
    </div>
  );
};

export default Home;
