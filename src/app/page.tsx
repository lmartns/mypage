"use client";

import React from "react";
import Header from "@/components/custom/header";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/custom/footer";
import ProjectCard from "@/components/custom/card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const Home: React.FC = () => {
  const projects: Project[] = [
    {
      title: "#Finance API",
      description:
        "Finance Api é um projeto desenvolvido em CSharp, utilizando Dotnet que consiste em uma API para um sistema financeiro.",
      technologies: ["C#", "Dotnet", "EntityFramework", "SQLServer"],
      link: "https://github.com/lmartns/FinanceApi",
    },
    {
      title: "#Java Bank",
      description:
        "Este projeto simula algumas operações de um banco, onde você pode realizar três operações principais: depósito, saque e visualização da quantia que está na conta.",
      technologies: ["Java", "Lombok"],
      link: "https://github.com/lmartns/Java-Bank",
    },
    {
      title: "#API Restful de Pizzaria",
      description:
        "API Restful de uma pizzaria desenvolvida em Node.js, utilizando o banco de dados MySQL para armazenar dados persistentes.",
      technologies: ["JavaScript", "Node.js", "Express", "MySQL"],
      link: "https://github.com/lmartns/API-RESTful",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="content-wrapper">
          <Avatar>
            <AvatarImage
              className="w-20 h-20 rounded-full mb-3"
              src="https://github.com/lmartns.png"
            />
          </Avatar>
          <h1 className="text-center text-3xl font-bold">Welcome to my page</h1>
          <Card className="w-full h-auto shadow-none rounded border-gray-900 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">Links</CardTitle>
            </CardHeader>
            <CardContent className="flex space-x-6">
              <a
                href="https://github.com/lmartns"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/leonardomartinsdeveloper/"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://leomartins.substack.com/"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Substack
              </a>
            </CardContent>
          </Card>
          <Card className="w-full h-auto shadow-none rounded border-gray-900 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">Projects</CardTitle>
            </CardHeader>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
              />
            ))}
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
