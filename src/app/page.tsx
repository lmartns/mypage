"use client";

import React from "react";
import Header from "@/components/custom/header";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="content-wrapper pt-10">
        <Avatar>
          <AvatarImage
            className="w-20 h-20 rounded-full mb-3"
            src="https://github.com/lmartns.png"
          />
        </Avatar>
        <h1 className="text-center text-3xl font-bold">
          Welcome to my portfolio
        </h1>
        <Card className=" w-full h-auto rounded-sm mt-6">
          <CardHeader>
            <CardTitle className="text-2xl">Links</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-around">
            <p>teste</p>
            <p>teste</p>
            <p>teste</p>
          </CardContent>
        </Card>
        <Card className=" w-full h-auto rounded-sm mt-6">
          <CardHeader>
            <CardTitle className="text-2xl">Projects</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Home;
