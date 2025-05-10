import * as React from "react";
import { Button } from "../components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Financial Transactions",
      type: "Web Application",
      description:
        "A web app for tracking and analyzing financial transactions. Enable users to manage their finances effectively. Enable users to do transactions.",
      technologies: ["React", "Node.js", "Express.js", "Vertica", "Jenkins"],
      image: "bg-primary/20",
    },
    {
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
      title: "Portfolio Website",
      type: "Website",
      description:
        "A modern, responsive portfolio website for a creative professional.",
      technologies: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
      image: "bg-primary/30",
    },
    {
      title: "YelpCamp",
      type: "Web Application",
      description:
        "YelpCamp is a full-stack web app built with Node.js, Express.js, and MongoDB.It lets users register, create campgrounds, and add reviews and comments.The project supports complete CRUD operations and was developed as part of my Web Development Bootcamp learning.",
      technologies: ["HTML", "CSS", "Express.js", "Node.js", "MongoDB"],
      image: "bg-primary/40",
    },
    {
      title: "Periodic Table",
      type: "Web Application",
      description:
        "Periodic Table App – A responsive React app with interactive UI, search, filter, and hover tooltips for chemical elements.Built using component-based architecture to display element details by group and period.",
      technologies: ["React", "Create-React-App", "Bootstrap"],
      image: "bg-primary/20",
    },
    {
      title: "University Financial Web Application ",
      type: "Web Application",
      description:
        "Developed a secure, cloud-deployed financial management system using Java EE, Spring Security, and Hibernate ORM. The app was deployed on AWS Elastic Beanstalk, enabling on-demand scalability and robust performance..",
      technologies: ["J2EE", "Spring Security", "Hibernate", "jQuery", "AWS"],
      image: "bg-primary/30",
    },
    {
      title: "Chat Messsenger",
      type: "API",
      description:
        "A RESTful API for a chat application, built with Java and Spring Boot. It supports user authentication, real-time messaging, and message history.",
      technologies: [
        "Java 8",
        "Spring Boot",
        "Maven",
        "Jersey",
        "JAX-RS",
        "JPA",
      ],
      image: "bg-primary/40",
    },
  ];

  return (
    <div className="page-container pt-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-2 title-height">
        My Projects
      </h1>
      <p className="text-lg text-muted-foreground mb-12">
        A collection of my work and personal projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden bg-card shadow-md hover:shadow-lg transition-all group"
          >
            <div
              className={`h-48 ${project.image} flex items-center justify-center`}
            >
              <span className="text-2xl text-primary-foreground font-bold">
                {project.title.split(" ")[0]}
              </span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <span className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground">
                  {project.type}
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-secondary px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* <div className="flex justify-between items-center">
                <Button size="sm" variant="outline">
                  View Details
                </Button>
                <Button size="sm" variant="link" className="text-primary">
                  Live Demo ↗
                </Button>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Want to start a project together?
        </h2>
        <p className="text-muted-foreground mb-6">
          I'm always open to discussing new projects and creative ideas.
        </p>
        <Button asChild size="lg">
          <a href="/contact">Get in Touch</a>
        </Button>
      </div>
    </div>
  );
};

export default Projects;
