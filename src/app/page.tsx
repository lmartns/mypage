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
            <a href="https://twitter.com/yourusername" className="text-primary hover:text-blue-500">Twitter</a>
            <a href="https://github.com/yourusername" className="text-primary hover:text-primary-foreground">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" className="text-primary hover:text-primary-foreground">LinkedIn</a>
            <a href="https://instagram.com/yourusername" className="text-primary hover:text-primary-foreground">Instagram</a>
            </CardContent>
          </Card>
          <Card className="w-full h-auto shadow-none rounded-sm mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p>teste</p>
              <p>teste</p>
              <p>teste</p>
              <p>teste</p>
              <p>teste</p>
              <p>teste</p>
              <p>teste</p>
              <p>teste</p>
              <p>teste</p>
              <p>teste</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
