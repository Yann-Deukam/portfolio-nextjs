"use client";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Phone, MapPin, MailOpen } from "lucide-react";

import { motion } from "framer-motion";

const info = [
  {
    icon: <Phone />,
    title: "Phone",
    text: "+237 697 443 443",
  },
  {
    icon: <MapPin />,
    title: "Address",
    text: "Douala, Cameroon",
  },
  {
    icon: <MailOpen />,
    title: "Email",
    text: "yanndeukam@gmail.com",
  },
];

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 1, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-zinc-900/40 backdrop-blur-sm ">
              <h3 className="text-4xl text-teal-400">Let&apos;s have a talk</h3>
              <p className="text-zinc-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="firsstname" type="firsstname" />
                <Input placeholder="lastname" type="lastname" />
                <Input placeholder="email" type="email" />
                <Input placeholder="phone number" type="phone" />
              </div>

              <Select>
                <SelectTrigger className="h-full">
                  <SelectValue placeholder="Select a Topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Web development</SelectItem>
                  <SelectItem value="dark">Graphic DEsign</SelectItem>
                  <SelectItem value="system">UI/UX design</SelectItem>
                  <SelectItem value="plo">SEO</SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[150px] "
                placeholder="tell me what it's all about"
                type="message"
              />

              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="size-14 xl:size-18 bg-zinc-900/30 backdrop-blur-sm text-teal-400 flex items-center justify-center">
                      <div>{item.icon} </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <p className="text-xl">{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
