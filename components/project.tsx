import { projectsData } from "@/lib/data";
import Image from "next/image";
import React from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  return (
    <section className="relative bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden  sm:mb-8">
      <div className="max-w-[50%]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-700 leading-relax ">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 rounded-full">
          {tags.map((tag, index) => (
            <li
              className="px-3 py-1 bg-black/[0.7] text-white uppercase tracking-wider rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>

        <Image
          className="absolute top-8 -right-40 max-w-[28.25rem]"
          src={imageUrl}
          alt="Project I am working on"
        />
      </div>
    </section>
  );
}
