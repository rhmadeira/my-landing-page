import IntroSection from "./_components/intro-section";
import AboutSection from "./_components/about-section";
import FeatureSection from "./_components/feature-section";

export default function Home() {
  return (
    <main className="">
      <IntroSection />
      <AboutSection />
      <FeatureSection />
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
