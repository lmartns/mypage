"use client";
import React from "react";
import Header from "@/components/custom/header";
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
      title: "Finance API",
      description:
        "Finance Api é um projeto desenvolvido em CSharp, utilizando Dotnet que consiste em uma API para um sistema financeiro.",
      technologies: ["C#", "Dotnet", "EntityFramework", "SQLServer"],
      link: "https://github.com/lmartns/FinanceApi",
    },
    {
      title: "Java Bank",
      description:
        "Este projeto simula algumas operações de um banco, onde você pode realizar três operações principais: depósito, saque e visualização da quantia que está na conta.",
      technologies: ["Java", "Lombok"],
      link: "https://github.com/lmartns/Java-Bank",
    },
    {
      title: "API Restful de Pizzaria",
      description:
        "API Restful de uma pizzaria desenvolvida em Node.js, utilizando o banco de dados MySQL para armazenar dados persistentes.",
      technologies: ["JavaScript", "Node.js", "Express", "MySQL"],
      link: "https://github.com/lmartns/API-RESTful",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen text-white">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="content-wrapper">
          <div className="text-left mb-8">
            <h1 className="text-2xl font-bold mb-3">Welcome to my page</h1>
            <h2 className="text-sm text-gray-400">Software Developer |</h2>
          </div>
          <h2 className="text-xl mt-6">Projects</h2>
          {projects.map((project, index) => (
            <Card
              key={index}
              className="w-full max-w-4xl shadow-lg rounded-xl border-gray-800 bg-[#242424] mt-6"
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{project.description}</p>
                <p className="text-sm">
                  Technologies: {project.technologies.join(", ")}
                </p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
