import React from "react";

export default function Projects() {
  return (
    <>
      <section
        id="projects"
        className="mb-12 scroll-mt-16 md:mb-16 lg:mb-20 lg:scroll-mt-24"
        aria-label="Selected projects"
      >
        <div className="mt-12">
          <a
            className="inline-flex items-center leading-tight font-semibold text-slate-200 group"
            aria-label="View Full Project Archive"
            href="https://drive.google.com/drive/u/1/folders/1OBDgdrVYCXuXxvQYxFG4ovHhtflh0UGE"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Project{" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  Videos
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none group-hover:text-teal-300"
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
      </section>
    </>
  );
}