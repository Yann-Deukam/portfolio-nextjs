"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 4,
    text: "Years of experience",
  },
  {
    num: 26,
    text: "Apps ompleted",
  },
  {
    num: 4,
    text: "Technologies mastered",
  },
  {
    num: 30,
    text: "Satisfied clients",
  },
];

export default function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
        {stats.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-1 gap-4  items-center justify-center xl:justify-start bg-zinc-950/20 py-3 backdrop-blur-sm border border-white/10 px-5"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold "
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug`}
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
