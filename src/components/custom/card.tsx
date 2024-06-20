// components/ProjectCard.tsx

import React from "react";
import { CardContent } from "../ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  link,
}) => {
  return (
    <CardContent>
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <h3 className="text-xl font-semibold">
            <a
              href={link}
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          </h3>
        </div>
        <p className="mb-2">
          <span className="font-semibold">Descrição:</span> {description}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Tecnologias:</span>{" "}
          {technologies.join(", ")}
        </p>
      </div>
      <hr className=" border-gray-900" />
    </CardContent>
  );
};

export default ProjectCard;
