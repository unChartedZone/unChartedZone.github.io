import React from "react";

const Experience = () => {
  interface ExperienceItem {
    name: string;
    position: string;
    time: {
      from: string;
      to: string;
    };
    description: string[];
    skills: string[];
  }

  const experienceList: ExperienceItem[] = [
    {
      name: "Lawmatics",
      position: "Software Engineer",
      time: { from: "July 2025", to: "Present" },
      description: ["Contributed to improvement of Automations product."],
      skills: ["React", "TypeScript", "Ruby", "Rails", "PostgreSQL", "Docker"],
    },
    {
      name: "Chatmeter",
      position: "Software Engineer II",
      time: {
        from: "May 2021",
        to: "August 2024",
      },
      description: [
        "Led project to overhaul the survey creator tool, including integrating generative AI prompt to generate a survey, increasing user engagement by 30%.",
        "Led image optimizer project and reduced image upload failures among providers such as Google & Yelp by 60%.",
        "Reduced post failures by 80% by overhauling social media post publisher tool to create a more engaging and user-friendly experience.",
        "Optimized the post-queuing system to improve reliability and efficiency when publishing to multiple social media platforms, leveraging Scala and the Play framework.",
        "Reduced operation costs by 75% by developing an in-house solution for directory location pages with Astro.",
        "Migrated legacy AngularJS pages to functional React components, leveraging TypeScript for improved type safety, maintainability, and scalability.",
        "Led Agile stand-up meetings, facilitated team collaboration, and addressed blockers to ensure timely delivery of SaaS products.",
      ],
      skills: [
        "React",
        "Typescript",
        "Bootstrap",
        "SCSS",
        "Scala",
        "Play",
        "MongoDB",
        "AWS",
      ],
    },
    {
      name: "NAVFAC",
      position: "Software Engineer",
      time: {
        from: "April 2019",
        to: "May 2021",
      },
      description: [
        "Reverse-engineered legacy applications to modern full stack applications using Vue.js, Spring Boot, and PostgreSQL to reduce technical debt and increase maintainability.",
        "Developed 5 core RESTful microservice APIs using Java, Spring Boot, and PostgreSQL to enhance scalability.",
        "Built Jenkins CI/CD pipelines, automated the creation of Docker containers, performing security scans on dependencies, automating tests, and deploying to AKS within Azure.",
      ],
      skills: [
        "Vue.js",
        "Javascript",
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Azure",
        "Jenkins",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      name: "SDSU Research Foundation",
      position: "IT Support Specialist",
      time: {
        from: "April 2019",
        to: "May 2021",
      },
      description: [
        `Maintained organization Wordpress website with 5000 average visitors, ensuring security and relevance of content.`,
      ],
      skills: ["Wordpress"],
    },
  ];

  return (
    <section id="experience" className="experience__list container mx-auto">
      <h2 className="header-secondary text-center mb-2">Experience</h2>
      {experienceList.map((ex) => {
        return (
          <div className="experience" key={ex.name}>
            <p className="experience__time">
              {ex.time.from} - {ex.time.to}
            </p>
            <div className="experience__content">
              <h1 className="experience__title">
                <span>{ex.position}</span>
                <span className="middot">·</span>
                <span>{ex.name}</span>
              </h1>
              <ul className="experience__description-list">
                {ex.description.map((i) => (
                  <li key={i} className="experience__description-item">
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <ul className="experience__skill-list">
                {ex.skills.map((skill) => (
                  <li key={skill} className="experience__skill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Experience;
