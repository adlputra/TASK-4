// src/components/RecentWork.tsx
import { FC } from "react";
import { ArrowUpRight } from "lucide-react";

type Project = {
  name: string;
  services: string[];
  link: string;
};

const projects: Project[] = [
  {
    name: "Decodable.co",
    services: ["Brand Design", "Webflow Development", "Web Design"],
    link: "#",
  },
  {
    name: "Gofirefly.io",
    services: ["Brand Design", "Webflow Development", "Web Design"],
    link: "#",
  },
  {
    name: "Blinkops.com",
    services: ["Brand Design", "Webflow Development", "Web Design"],
    link: "#",
  },
  {
    name: "Withkanvas.com",
    services: ["Brand Design", "Webflow Development", "Web Design"],
    link: "#",
  },
];

const RecentWork: FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <h2 className="text-2xl font-semibold mb-10">Recent Work</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b pb-6"
          >
            <div>
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="text-gray-600 text-sm mt-1">
                {project.services.join(" – ")}
              </p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-900 hover:text-white transition"
            >
              <ArrowUpRight />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentWork;
