import React, { experimental_taintObjectReference } from "react";

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
      name: "Chatmeter",
      position: "Software Engineer II",
      time: {
        from: "May 2019",
        to: "Present",
      },
      description: [
        `Assumed ownership of image editor to crop images to specifications
        using the Canvas API, improved user experience by reducing image
        failures among providers such as Google`,
        `Improved a social media post editor to make posts to different social
        media providers using React and the Scala/Play framework, reduced post
        failures by 80% `,
        `Integrated SurveyJS as a custom survey creator into the dashboard and
        customized it for different use cases`,
        `Developed an in-house solution for directory location pages with Astro
        that reduced operation costs by 80%`,
      ],
      skills: ["React", "Scala", "Play", "Bootstrap", "MongoDB", "AWS"],
    },
    {
      name: "NAVFAC",
      position: "Full Stack Developer",
      time: {
        from: "April 2019",
        to: "May 2021",
      },
      description: [
        `Migrated legacy applications to Vue.js and Spring Boot to reduce technical debt and increase maintainability`,
        `Worked on multiple microservices to improve scalability using Java/Spring`,
        `Built Jenkins CI/CD pipelines, automated the creation of Docker containers, performing security scans on dependencies, automating tests, and deploying to cloud solutions within Azure`,
        `Integrated authentication micro service leveraging the power of JWT, OAuth, and SAML for seamless and secure auth flows.`,
      ],
      skills: [
        "Vue.js",
        "Javascript",
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Azure",
        "Jenkins",
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
        `Maintained Wordpress site, ensuring security and relevance of content`,
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
