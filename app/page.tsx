import { GithubIcon, Header1 } from "@components";
import { siteConfig } from "@config/site";

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <Header1>Bildur's Bilder</Header1>
      </div>

      <div className="flex gap-6 flex-col">
        <Link
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.images}
        >
          Se Bilder
        </Link>

        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  );
}
