import * as React from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { Download } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Angular",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Three.js",
        "Vite",
        "Webpack",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Java",
        "Express",
        "Python",
        "Django",
        "MongoDB",
        "PostgreSQL",
        "MSSQL",
      ],
    },
    {
      category: "Design",
      items: ["Figma", "Balsamiq", "UI/UX Design", "Axure"],
    },
    {
      category: "Other",
      items: ["Git", "CI/CD", "AWS", "Azure"],
    },
  ];

  // Function to handle resume download
  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement("a");

    // Set the href to your resume file path
    link.href = "/Nilank_Sharma_Resume.pdf";

    // Set the download attribute with the desired filename
    link.download = "Nilank_Sharma_Resume.pdf";

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger the click event
    link.click();

    // Clean up: remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <div className="page-container pt-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 title-height">
        About Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
        <div className="md:col-span-3">
          <p className="text-lg mb-4">
            Hello! I'm <span className="text-gradient">Nilank Sharma</span> a
            passionate full stack developer with over 5 years of experience who
            loves turning complex problems into simple, scalable solutions. With
            experience across fintech, healthcare, and SaaS, I bring a versatile
            tech skill set backed by a Master's in Information Systems and
            hands-on experience in both frontend and backend development.
          </p>
          <p className="text-lg mb-4">
            I’ve contributed to large-scale digital transformations—like
            migrating 70K+ legacy contracts to a modern web platform at
            MassMutual—built internal tools that streamlined workflows, and
            developed reusable component libraries that accelerated product
            delivery. I enjoy working on systems that require thoughtful
            architecture and attention to user experience, and I bring a strong
            sense of ownership to every project I take on.
          </p>
          <p className="text-lg mb-6">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or enjoying outdoor activities
            to maintain a healthy work-life balance.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link to="/contact">Contact Me</Link>
            </Button>
            <Button asChild variant="outline" onClick={handleDownloadResume}>
              <a href="#">
                <Download size={18} />
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="h-full w-full overflow-hidden rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}developer.jpeg`}
              alt="Developer portrait"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-secondary/30 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {[
            {
              title: "Full Stack Developer",
              company: "MassMutual",
              period: "March 2022 - July 2025",
              description:
                "Led the successful migration of over 74,000 annuity contracts from a legacy .NET platform to a modern ReactJS-NodeJS architecture, empowering 60,000+ customers with seamless online access and transaction capabilities. Developed a scalable React component library leveraging HOCs, Custom Hooks, and Context APIs to accelerate feature delivery. Engineered robust API integrations with enhanced reliability through logging, error handling, and rate limiting. Integrated feature management using LaunchDarkly to increase deployment efficiency and reduce risk. Optimized system performance and cost through strategic caching mechanisms and real-time customer messaging tools.",
            },
            {
              title: "Software Engineer",
              company: "Parexel",
              period: "February 2020 - December 2021",
              description:
                "Automated ETL workflows to streamline data processing, reducing operational time by 20% and delivering a high-performing streaming data solution for compliance products. Developed a full-stack internal web application using Django REST Framework, React, and Bootstrap, enabling real-time data interaction through AJAX-based APIs. Improved cross-departmental efficiency by enhancing internal data access systems, cutting down manual lookups and boosting workflow productivity by up to 30%.",
            },
            {
              title: "Full Stack Developer Intern",
              company: "Atlca Solutions LLC",
              period: "August 2018 - December 2018",
              description:
                "Designed and implemented a full-stack architecture using Django 2.0, Angular v6, and MongoDB, tailored to client-specific requirements. Led the successful Beta release to 2,000 users, achieving 100% client satisfaction and receiving highly positive initial user feedback for functionality and performance.",
            },
            {
              title: "Web Developer",
              company: "WebCraft IT",
              period: "June 2015 - May 2017",
              description:
                "Developed a dynamic, user-friendly website that significantly boosted user engagement and contributed to a 30% increase in sales revenue. Actively participated in all phases of the Software Development Lifecycle across three projects, ensuring 100% on-time delivery and adherence to budget, while consistently earning top-tier customer satisfaction ratings for delivered solutions.",
            },
          ].map((job, index) => (
            <div
              key={index}
              className="border-l-4 border-primary pl-6 relative"
            >
              <div className="absolute -left-[11px] top-1.5 w-[18px] h-[18px] rounded-full bg-background border-4 border-primary"></div>
              <h3 className="text-xl font-bold">{job.title}</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-primary font-medium">{job.company}</span>
                <span className="text-sm text-muted-foreground">
                  {job.period}
                </span>
              </div>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-8">
          {[
            {
              degree: "Master of Information Systems",
              institution: "Northeastern University",
              period: "September 2017 - December 2019",
              description:
                "Specialized in Software Engineering and Web Technologies.",
            },
            {
              degree: "Bachelor of Engineering in Electronics & Communication",
              institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (R.G.P.V)",
              period: "August 2011 - June 2015",
              description:
                "Graduated with honors. Focused on software development and user interface design.",
            },
          ].map((edu, index) => (
            <div
              key={index}
              className="border-l-4 border-primary pl-6 relative"
            >
              <div className="absolute -left-[11px] top-1.5 w-[18px] h-[18px] rounded-full bg-background border-4 border-primary"></div>
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-primary font-medium">
                  {edu.institution}
                </span>
                <span className="text-sm text-muted-foreground">
                  {edu.period}
                </span>
              </div>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
