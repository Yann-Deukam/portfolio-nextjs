import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/* TEXT*/}
        <div className="text-center xl:text-left">
          <span className="text-xl">Software Engineer</span>
          <h1 className="h1 mb-6">
            Hi, My name is <br />
            <span className="text-indigo-500">Yann Donald</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-zinc-50/70">
            I produce high performance and efficient digital products with a
            seemless user exoerience
          </p>

          {/* DOWNLOAD CV */}
          <div className="flex flex-col gap-8 xl:flex-row items-center">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              <span>Download CV</span>
              <ArrowDownToLine />
            </Button>

            {/* SOCIALS */}
            <div className="mb-8 xl:mb-0">
              <Socials
                containerStyles="flex gap-6"
                iconStyles=" hover:text-indigo-500 transition-all duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        {/* PHOTO*/}
        <div>
          <Photo />
        </div>
      </div>
      <Stats />
    </section>
  );
}
