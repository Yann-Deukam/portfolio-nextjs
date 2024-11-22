"use client";

import { Icon } from "lucide-react";
import { FaHtml5, FaCss3, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiAdobeillustrator,
  SiJavascript,
  SiTypescript,
  SiAdobephotoshop,
  SiGoogleanalytics,
  SiExpress,
  SiFlutter,
  SiFirebase,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "I am a young man dedicated to innovation and creativity. I am passionate about creating solutions that make a difference. I like learning new things, discover and try new experiences",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Yann Donald",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+237) 697 443 248",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Cameroonian",
    },
    {
      fieldName: "Email",
      fieldValue: "yanndeukam@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English , French",
    },
    {
      fieldName: "Hobby",
      fieldValue: "Tennis, Piano, Music, Drawing",
    },
  ],
};

const experience = {
  icon: Icon.Briefcase,
  title: "My experience",
  description:
    "I made sure to participate in bootcamps, internships and benevolent projects in my free time to both sharpen my skills and pursue perfection",
  items: [
    {
      company: "Ajel Corporation - Decode",
      position: "Frontend developer, Graphic designer",
      duration: "June 2024 - October 2024",
    },
    {
      company: "CODEES",
      position: "Developer, Graphic designer, UI/UX Designer",
      duration: "2020 - November 2024",
    },
    {
      company: "Art Jewelry",
      position: "Graphic Designer and System Administrator",
      duration: "2023 - 2024",
    },
    {
      company: "GLOBAL ASSET CAMEROON Ltd.",
      position: "Full Stack developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "Group CFORR",
      position: "Brand identity Designer",
      duration: "Summer 2023",
    },
    {
      company: "Benevolent Projects, participation",
      position: "UI/UX Designer",
      duration: "2023 - 2024",
    },
  ],
};

const education = {
  icon: Icon.GraduationCap,
  title: "My Education",
  description:
    "From my first year in Highschool to my last year in college, I really learned a lot of things and got to realized I wanted to be a tech guy",
  items: [
    {
      institution: "CoT - University of Buea",
      degree: "Bachelor of Technology in Software Engineering",
      duration: "2022 - 2024",
    },
    {
      institution: "Institut Universitaire de la Côte",
      degree: "Higher National Diploma in Software Engineering",
      duration: "2020 - 2022",
    },
    {
      institution: "G.B.H.S Bafoussam",
      degree: "GCE Advanced Level in Science",
      duration: "2019 - 2020",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "From Web development to Graphic design and UI/UX design, I have a wide range of skills I put at your disposal",
  skillset: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },

    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiMongodb />,
      name: "Mongodb",
    },
    {
      icon: <SiExpress />,
      name: "Express",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },

    {
      icon: <SiAdobeillustrator />,
      name: "Adobe Illustrator",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "Adobe Photoshop",
    },
    {
      icon: <SiGoogleanalytics />,
      name: "Google Analytics",
    },
  ],
};

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 1, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs className="flex flex-col xl:flex-row gap-16" defaultValue="about">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-8">
                <h3 className="text-4xl font-bold">{about.title} </h3>
                <p className="max-w-[600px] text-zinc-200 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-zinc-400">{item.fieldName}:</span>
                        <span className="">{item.fieldValue} </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-zinc-200 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-zinc-900/30 backdrop-blur-sm h-[184px] py-6 px-10 rounded-lg flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-teal-500">
                            {item.duration}{" "}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="size-2 rounded-full bg-teal-400"></span>
                            <p className="text-zinc-300">{item.company} </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-zinc-200 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-zinc-900/30 backdrop-blur-sm h-[184px] py-6 px-10 rounded-lg flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-teal-500">
                            {item.duration}{" "}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="size-2 rounded-full bg-teal-400"></span>
                            <p className="text-zinc-300">{item.institution} </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-8 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title} </h3>
                  <p className="max-w-[600px] text-zinc-200 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {skills.skillset.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-zinc-200"
                        >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-zinc-900/30 backdrop-blur-sm rounded-lg flex items-center justify-center group">
                                <div className="text-6xl group-hover:text-teal-400 transition-all duration-150  ">
                                  {item.icon}{" "}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>{item.name}</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
