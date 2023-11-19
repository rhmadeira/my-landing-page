import { cn } from "@/lib/utils";
import { ToggleTheme } from "./_components/toggle-theme";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      <section id="intro" className="space-y-6 py-8 md:py-12 lg:py-32 ">
        <div className="container max-w-[64rem] flex flex-col items-center text-center gap-4">
          <span className="rounded-2xl flex items-center bg-muted px-4 py-1 text-sm font-medium">
            Olá, bem vindo! eu sou <ToggleTheme />
          </span>
          <h1 className="font-heading text-4xl md:-6xl lg:text-7xl ">
            Rafael Madeira
            <br />
            Desenvolvedor <span className="text-primary">Full-Stack</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Desenvolvedor Full-Stack com foco em ReactJS, NextJS, React Native e
            NodeJS. Atualmente trabalhando no{" "}
            <a
              href="https://www.linkedin.com/company/grupo-gmill/mycompany/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              Grupo Gmill
            </a>
            .
          </p>
          <div className="space-x-4">
            <a
              href="#about"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "hover:bg-primary hover:text-white",
                })
              )}
            >
              Sobre mim
            </a>
            <a
              href="#projects"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "hover:bg-primary hover:text-white",
                })
              )}
            >
              Projetos
            </a>
          </div>
        </div>
      </section>
      <section id="about">
        <h1>
          Hi, I am <span className="text-primary">Rafael</span>
        </h1>
      </section>
      <section id="feature">
        <h1>
          Hi, I am <span className="text-primary">Rafael</span>
        </h1>
      </section>
      <section id="projects">
        <h1>
          Hi, I am <span className="text-primary">Rafael</span>
        </h1>
      </section>
    </main>
  );
}
