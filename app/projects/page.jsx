"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SoftwareProjects from "../../components/SoftwareProject";

import { motion } from "framer-motion";

export default function page() {
  return (
    // <Tabs className="flex flex-col xl:flex-row gap-16" defaultValue="about">
    //   <TabsList className="flex h-[100px]  w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
    //     <TabsTrigger value="about">About Me</TabsTrigger>
    //     <TabsTrigger value="experience">Experience</TabsTrigger>
    //     <TabsTrigger value="education">Education</TabsTrigger>
    //     <TabsTrigger value="skills">Skills</TabsTrigger>
    //   </TabsList>

    //   <TabsContent value="about" className="w-full text-center xl:text-left">
    //     Tab 1
    //   </TabsContent>
    //   <TabsContent value="experience" className="w-full">
    //     Tab 2
    //   </TabsContent>
    //   <TabsContent value="education" className="w-full">
    //     Tab 3
    //   </TabsContent>
    //   <TabsContent value="skills" className="w-full h-full">
    //     Tab 4
    //   </TabsContent>
    // </Tabs>
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
        delay: 1,
        ease: "easeIn",
      }}
    >
      <Tabs defaultValue="webProjects">
        <TabsList className="flex justify-center items-center flex-col xl:flex-row gap-6">
          <TabsTrigger value="webProjects">Web projects</TabsTrigger>
          <TabsTrigger value="brand">Branding & logos</TabsTrigger>
          <TabsTrigger value="ui">UI/UX projects</TabsTrigger>
          <TabsTrigger value="flyers">
            Illustrations, flyers & others
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="webProjects"
          className="w-full text-center xl:text-left"
        >
          <SoftwareProjects />
        </TabsContent>
        <TabsContent value="brand">Brand identities and logos</TabsContent>
        <TabsContent value="ui">UI/UX projects</TabsContent>
        <TabsContent value="flyers">Illustrations, flyers & others</TabsContent>
      </Tabs>
    </motion.section>
  );
}
