import { cn } from "@/lib/utils";
import { ToggleTheme } from "./_components/toggle-theme";
import { buttonVariants } from "@/components/ui/button";
import IntroSection from "./_components/intro-section";
import AboutSection from "./_components/about-section";

export default function Home() {
  return (
    <main className="">
      <IntroSection />
      <AboutSection />
      {/* <section id="feature">
        <h1>
          Hi, I am <span className="text-primary">Rafael</span>
        </h1>
      </section>
      <section id="projects">
        <h1>
          Hi, I am <span className="text-primary">Rafael</span>
        </h1>
      </section> */}
    </main>
  );
}
