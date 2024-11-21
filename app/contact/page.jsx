"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { toast } from "sonner";
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
  const form = useRef();
  const [subject, setSubject] = useState(""); // State to store the selected subject
  const [loading, setLoading] = useState(false); // State to track email sending process

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Start the loading state

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false); // Stop the loading state
          e.target.reset();
          toast("Email sent successfully");
        },
        (error) => {
          setLoading(false); // Stop the loading state
          console.error("FAILED...", error.text);
          toast("Oops, Something went wrong");
        }
      );
  };

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
            <form
              className="flex flex-col gap-6 p-10 bg-zinc-900/40 backdrop-blur-sm"
              ref={form}
              onSubmit={sendEmail}
            >
              <h3 className="text-4xl text-teal-400">Let&apos;s have a talk</h3>
              <p className="text-zinc-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="First Name" type="text" name="first_name" />
                <Input placeholder="Last Name" type="text" name="last_name" />
                <Input placeholder="Email" type="email" name="user_email" />
                <Input
                  placeholder="Phone Number"
                  type="text"
                  name="user_phone"
                />
              </div>

              <Select
                onValueChange={(value) => setSubject(value)} // Update subject state on selection
              >
                <SelectTrigger className="h-full">
                  <SelectValue placeholder="Select a Topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Web Development">
                    Web Development
                  </SelectItem>
                  <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                  <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                  <SelectItem value="SEO">SEO</SelectItem>
                </SelectContent>
              </Select>

              {/* Hidden input to include subject in form submission */}
              <input type="hidden" name="subject" value={subject} />

              <Textarea
                className="h-[150px]"
                placeholder="Tell me what it's all about"
                type="text"
                name="message"
              />

              <Button
                size="md"
                className="max-w-40"
                disabled={loading} // Disable button when loading
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="size-14 xl:size-18 bg-zinc-900/30 backdrop-blur-sm text-teal-400 flex items-center justify-center">
                      <div>{item.icon}</div>
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
