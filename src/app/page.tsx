"use client";

import React from "react";
import Header from "@/components/custom/header";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/custom/footer";

const Home = () => {
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
          <Card className="w-full h-auto shadow-none rounded-sm mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">Links</CardTitle>
            </CardHeader>
            <CardContent className="flex space-x-6">
              <a
                href="https://github.com/lmartns"
                className="text-primary hover:underline"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/leonardomartinsdeveloper/"
                className="text-primary hover:underline"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                href="https://leomartins.substack.com/"
                className="text-primary hover:underline"
                target="_blank"
              >
                Substack
              </a>
            </CardContent>
          </Card>
          <Card className="w-full h-auto shadow-none rounded-sm mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">
                  <a
                    href="https://github.com/lmartns/toy-story"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Projeto Toy Story
                  </a>
                </h3>
                <p>
                  Descrição: Este projeto consiste em uma loja de brinquedo
                  feita em Java.
                </p>
                <p>Tecnologias: Java, Spring, Hibernate</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">
                  <a
                    href="https://github.com/lmartns/star-wars"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Projeto Star Wars
                  </a>
                </h3>
                <p>
                  - Descrição: Este projeto é um banco de dados de personagens
                  do universo Star Wars.
                </p>
                <p>- Tecnologias: Node.js, Express, MongoDB</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">
                  <a
                    href="https://github.com/lmartns/avengers"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Projeto Avengers
                  </a>
                </h3>
                <p>
                  Descrição: Este projeto é um aplicativo para gerenciar times
                  de super-heróis.
                </p>
                <p>Tecnologias: React, Redux, Firebase</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
