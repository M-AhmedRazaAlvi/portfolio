"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Profile from "@/public/images/profile.jpeg";
import { useState, useEffect } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const icons = [
    {
      title: "Github",
      href: "https://github.com/M-AhmedRazaAlvi",
      icon: faGithub,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/ahmed-raza-alvi-51847020b",
      icon: faLinkedin,
    },
    {
      title: "WhatsApp",
      href: "https://api.whatsapp.com/send?phone=923034069202",
      icon: faWhatsapp,
    },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const updateActiveSection = () => {
      // Offset from top of viewport to trigger section change
      const offset = 150;
      
      let currentSection = "";
      
      // Check each section from bottom to top to find the one we're currently in
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        const rect = section.getBoundingClientRect();
        
        // If section top is above or at our offset point, this is the active section
        if (rect.top <= offset) {
          currentSection = section.id;
          break;
        }
      }
      
      // If we're at the very top, default to first section
      if (!currentSection && sections.length > 0) {
        currentSection = (sections[0] as HTMLElement).id;
      }
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    // Set initial active section
    updateActiveSection();
    
    // Throttle scroll events for performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-12 lg:overflow-y-auto">
      <div>
        <Image
          className="box-content rounded-3xl border-3 border-gray-50 pb-2 object-cover aspect-square w-full max-w-[220px] sm:max-w-[220px] lg:max-w-[220px]"
          src={Profile}
          width={280}
          height={280}
          alt="Profile"
        />
        <h1 className="mt-1 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl lg:text-4xl">
          <Link href="/">Ahmed Raza Alvi</Link>
        </h1>
        <h2 className="mt-1 font-medium tracking-tight text-slate-200" style={{ fontSize: '22px' }}>
          Flutter Developer
        </h2>
        <p className="mt-3 max-w-xs leading-normal text-sm">
          Code. Build. Deploy. Iterate. Optimize. Repeat.
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-4 w-max">
            {["about", "experience", "projects"].map((section) => {
              const barClass =
                activeSection === section
                  ? "nav-indicator mr-4 h-px bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none w-16 bg-white"
                  : "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ";
              const TitleClass =
                activeSection === section
                  ? "text-white nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                  : "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200";
              return (
                <li key={section}>
                  <a
                    className="group flex items-center py-3 active "
                    href={`#${section}`}
                  >
                    <span className={barClass}></span>
                    <span className={TitleClass}>
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <ul className="mt-12 flex items-center" aria-label="Social media">
          {icons.map((icon) => (
            <li className="mr-5 shrink-0 text-xs" key={icon.title}>
              <a
                className="block hover:text-slate-200"
                href={icon.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${icon.title} (opens in a new tab)`}
                title={icon.title}
              >
                <span className="sr-only">{icon.title}</span>
                <FontAwesomeIcon className="h-6 w-6" icon={icon.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
