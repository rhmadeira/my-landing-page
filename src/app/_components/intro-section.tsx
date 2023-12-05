import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ToggleTheme } from "./toggle-theme";

export default function IntroSection() {
  return (
    <section id="intro" className="space-y-6 py-8 md:py-12 lg:py-32 relative">
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/3 top-full md-left-1/2 md:top-1/2 -z-10 h-[16rem] w-[16rem] md:h-[54rem] md:w-[54rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset="1" stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
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
          Com foco em ReactJS, NextJS, React Native, NodeJS e .NET. Atualmente
          trabalhando no{" "}
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
  );
}
