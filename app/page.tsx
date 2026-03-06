"use client";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("floatingButton", {
        calLink: "ahmad-raza-alvi/30min",
        config: { layout: "month_view" },
        buttonText: "Book a call",
        buttonColor: "#183340",
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <>
      <div className="group/spotlight relative">
        <div
          className="pointer-events-none absolute inset-0 z-30 transition duration-300"
          style={{
            background:
              "radial-gradient(800px at 578px 900px, rgba(29, 78, 216, 0.15), transparent 80%)",
          }}
        ></div>

        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Header />
            <main id="content" className="pt-24 lg:w-[52%] lg:py-12">
              <About />
              <Experience />
              <Projects />
              <Footer />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
