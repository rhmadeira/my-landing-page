import Image from "next/image";
import Link from "next/link";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/components/social-icons";
interface SocialLinkProps {
  Icon: any;
  href: string;
}
function SocialLink({ Icon, ...props }: SocialLinkProps) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}
export default function AboutSection() {
  return (
    <section
      id="about"
      className="container flex flex-col md:max-w-[64rem] md:py-16 lg:py-24 "
    >
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]">
        <div className="lg:pl-20 flex justify-center">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src="/avatar.jpg"
              alt="Rafael Madeira"
              width={800}
              height={800}
              quality="95"
              priority={true}
              className="aspect-square rotate-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2 text-center md:text-start">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl">
            @rafaelMadeira{" "}
          </h1>
          <p className="mt-6 text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            repudiandae blanditiis ipsum sint culpa totam nulla quam voluptate
            assumenda, voluptatum nam provident non tempore maiores sapiente ex
            error possimus maxime.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-6"></div>
        </div>
      </div>
    </section>
  );
}
