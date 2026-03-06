import React from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Lead Mobile App Developer | Classic Programmers",
      description:
        "As Lead Mobile App Developer I manage end to end delivery of cross platform applications guiding the team in architecture decisions clean code practices and scalable solutions. I design and implement advanced features such as AI integrations, payment gateways, real time chat and push notifications. I mentor junior developers conduct code reviews and ensure apps meet high standards of performance, security and user experience. My role also involves collaborating with clients translating business needs into technical solutions and successfully deploying apps on both iOS and Android platforms.",
      skills: [
        "Flutter",
        "AI & ML Features",
        "Bloc Architecture",
        "GetX",
        "Firebase Integration",
        "Push Notifications",
        "Payments Integration",
        "Real time Features",
        "Code Reviews",
      ],
      duration: "12/2024 - Present",
      url: "https://classicprogrammers.com/",
    },
    {
      title: "Flutter Developer | Swati Technologies",
      description:
        "Developed D-iD Admin, a comprehensive user and data management system for managing user and corporate data across multiple panels and roles. Utilized the BLoC pattern for efficient state management, ensuring smooth and consistent updates across modules. Integrated with D-iDConnect for seamless user and corporate data management. Features include user, corporate, department, and industry panels with role-based access control to manage permissions securely and efficiently.",
      skills: [
        "Flutter",
        "RestFul API",
        "Bloc Architecture",
        "MVVM",
        "Figma",
        "Asana"
      ],
      duration: "11/2023 - 11/2024",
      url: "https://www.swatitech.com/",
    },
    {
      title: "Associate Flutter Developer | Tanbits",
      description:
        "Developed the Wij.Land Web Module, a comprehensive system for managing farmers' farms and the Admin panel. Implemented features like CRUD operations for farm data, Maps integration for visualizing farms, WebView graphs, dual-language localization (Dutch & English), and handling multiple events, projects, and files for each project. Utilized PostgreSQL for efficient database management and ensured smooth performance across all modules using Flutter and Dart.",
      skills: [
        "Flutter",
        "Dart",
        "PostgreSQL",
        "Swagger",
        "Jira"
      ],
      duration: "01/2022 - 01/2023",
      url: "https://tanbits.com/",
    },
    {
      title: "Flutter Developer Intern · Devex IT Enterprises",
      description:
        "Completed an internship at Devex IT Enterprises, where I gained hands-on experience building mobile applications with Flutter for both Android and iOS. Worked on implementing MVVM and clean code architecture, integrated social logins with Google and Apple, and collaborated with designers using Figma to translate UI/UX designs into functional Flutter apps. Conducted code reviews and explored best practices to maintain code quality and improve the development workflow.",
      skills: ["Flutter", "Firebase", "Figma", "Clean Architecture", "Mobile App Development"],
      duration: "09/2021 - 01/2022",
      url: "https://devex-it.com/",
    },

  ];
  return (
    <section
      id="experience"
      className="mb-12 scroll-mt-16 md:mb-16 lg:mb-20 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold text-slate-100">
          Experience
        </h2>
        <ol className="group/list">
          {experiences.map((experience) => (
            <li className="mb-8" key={experience.title}>
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="2024 to Present"
                >
                  {experience.duration}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href={experience.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${experience.title} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {experience.title}
                          <span className="inline-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    {experience.description}
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {experience.skills.map((skill) => (
                      <li className="mr-1.5 mt-2" key={skill}>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}