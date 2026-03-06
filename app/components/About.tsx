import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="mb-12 scroll-mt-16 md:mb-16 lg:mb-20 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Hi, I&apos;m <strong className="text-slate-200">Ahmed Raza Alvi</strong>, a Flutter / Mobile App Developer. I specialize in building Flutter mobile and web applications for Android and iOS using a single codebase. My journey in Flutter has made me proficient with <strong className="text-slate-200">Bloc</strong>, <strong className="text-slate-200">Provider</strong>, and <strong className="text-slate-200">GetX</strong> for efficient state management.
        </p>
        <p className="mb-4">
          I have hands-on experience with <strong className="text-slate-200">REST APIs</strong>, <strong className="text-slate-200">Firebase</strong> integration, authentication, Google and Facebook login, localization, cloud functions, SQLite (SQFLite), and real-time databases. I also work with <strong className="text-slate-200">RevenueCat</strong> for in-app subscriptions, <strong className="text-slate-200">Meta SDK</strong>, and <strong className="text-slate-200">CleverTap</strong> for analytics, user engagement, event tracking, and implementing light/dark mode themes.
        </p>
        <p className="mb-4">
          I can integrate <strong className="text-slate-200">push notifications</strong> to keep users engaged, create smooth animations, build custom widgets, and ensure your apps provide a seamless and enjoyable experience. I have also successfully launched several apps on both Android and iOS, available on the <strong className="text-slate-200">Google Play Store</strong>.
        </p>
        <p className="mb-4">
          Beyond building apps, I enjoy exploring new Flutter capabilities, experimenting with <strong className="text-slate-200">AI</strong> features, and contributing to <strong className="text-slate-200">open-source projects</strong> that solve complex technical challenges. My goal is to deliver high-quality apps that users love and clients can trust.
        </p>
        <div className="mt-8">
          <a
            className="inline-flex items-center leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
            href="https://drive.google.com/file/d/14xlbKdaP2_0UHp2n_JNxFdIwukZBKpey/preview"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            View Full Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ml-1 h-4 w-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
