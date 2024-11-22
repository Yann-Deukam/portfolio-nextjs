"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SoftwareProjects from "../../components/SoftwareProject";
import BrandProjects from "../../components/BrandProjects";
import UIProjects from "../../components/UIProjects";
import Illustrations from "../../components/Illustrations";

import { motion } from "framer-motion";

export default function page() {
  return (
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
        <TabsContent value="brand" className="w-full text-center xl:text-left">
          <BrandProjects />
        </TabsContent>
        <TabsContent value="ui" className="w-full text-center xl:text-left">
          <UIProjects />
        </TabsContent>
        <TabsContent value="flyers" className="w-full text-center xl:text-left">
          <Illustrations />
        </TabsContent>
      </Tabs>
    </motion.section>
  );
}
