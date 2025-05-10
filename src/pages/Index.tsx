import * as React from "react";
import { Button } from "../components/ui/button";
import { HeroScene } from "../components/HeroScene";
import { Link } from "react-router";
import { Download, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../components/ui/hover-card";

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    featured: false,
    about: false,
    cta: false,
  });

  // Function to handle resume download
  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement("a");

    // Set the href to your resume file path
    link.href = `${import.meta.env.BASE_URL}Nilank_Sharma_Resume.pdf`;

    // Set the download attribute with the desired filename
    link.download = "Nilank_Sharma_Resume.pdf";

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger the click event
    link.click();

    // Clean up: remove the link from the document
    document.body.removeChild(link);
  };

  const projects = [
    {
      id: 1,
      title: "Financial Transactions",
      type: "Web Application",
      description:
        "A web app for tracking and analyzing financial transactions. Enable users to manage their finances effectively. Enable users to do transactions.",
      technologies: ["React", "Node.js", "Express.js", "Vertica", "Jenkins"],
      image: "bg-primary/20",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      type: "Website",
      description:
        " A full-stack e-commerce platform with user authentication, product management, and payment processing.",
      technologies: [
        "Java,",
        "Spring-Security,",
        "Hibernate",
        "Maven,",
        "Oracle",
      ],
      image: "bg-primary/20",
    },
    {
      id: 3,
      title: "Portfolio Website",
      type: "Website",
      description:
        "A modern, responsive portfolio website for a creative professional.",
      technologies: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
      image: "bg-primary/30",
    },
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <section
        id="hero"
        className="min-h-screen pt-20 flex flex-col justify-center"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div
              className={`order-2 md:order-1 ${
                isVisible.hero ? "animate-stagger-1" : "opacity-0"
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-gradient">Full-Stack</span> Developer
                <br />& Designer
              </h1>
              <p className="text-lg md:text-xl mb-6 text-muted-foreground">
                Ardent & Apt developer who loves turning complex problems into
                simple, scalable solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="hover-lift hover-glow">
                  <Link to="/projects">View Projects</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleDownloadResume}
                  className="flex gap-2 items-center hover-lift"
                >
                  <Download size={18} />
                  Download Resume
                </Button>
              </div>
            </div>
            <div
              className={`order-1 md:order-2 ${
                isVisible.hero ? "animate-stagger-2" : "opacity-0"
              }`}
            >
              <HeroScene />
            </div>
          </div>
        </div>
      </section>

      <section
        id="featured"
        className="section bg-secondary/5 py-24 backdrop-blur-sm"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <h2
            className={`section-title ${
              isVisible.featured ? "animate-stagger-1" : "opacity-0"
            }`}
          >
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project cards */}
            {projects.map((project) => (
              <div
                key={project.id}
                className={`bg-card rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group border border-border/50 ${
                  isVisible.featured ? "animate-stagger-2" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.1 * project.id}s` }}
              >
                <div className="h-48 bg-primary/5"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button
                        variant="link"
                        className="p-0 text-primary group-hover:underline"
                      >
                        <Link
                          to={`/projects`}
                          className="flex items-center gap-1"
                        >
                          View Project{" "}
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">
                          Project Details
                        </h4>
                        <p className="text-sm">
                          Click to explore this project in depth, including
                          technologies used and development process.
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`mt-12 text-center ${
              isVisible.featured ? "animate-stagger-3" : "opacity-0"
            }`}
          >
            <Button asChild size="lg" className="hover-lift hover-glow">
              <Link to="/projects">See All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              className={`rounded-lg overflow-hidden border-gradient ${
                isVisible.about ? "animate-stagger-1" : "opacity-0"
              }`}
            >
              <img
                src={`${import.meta.env.BASE_URL}developer.jpeg`}
                alt="Developer portrait"
                className="w-full h-96 object-cover"
              />
            </div>
            <div
              className={`${
                isVisible.about ? "animate-stagger-2" : "opacity-0"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <p className="text-lg mb-4 text-muted-foreground">
                I'm a passionate full-stack developer and designer with
                expertise in creating modern, responsive web applications. With
                a focus on clean code and beautiful design, I bring ideas to
                life in the digital space.
              </p>
              <Button asChild className="hover-lift hover-glow">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="section bg-primary text-primary-foreground">
        <div
          className={`container max-w-6xl mx-auto px-4 text-center ${
            isVisible.cta ? "animate-stagger-1" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start your project?
          </h2>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Let's collaborate to bring your vision to life with stunning design
            and powerful functionality.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent border-white hover:bg-white/10 hover-lift"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
