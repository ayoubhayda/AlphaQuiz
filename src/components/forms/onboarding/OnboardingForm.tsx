"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assets/public/logo.png";
import { Card, CardContent } from "@/components/ui/card";
import UserCompleteForm from "./userCompleteForm";

const OnboardingForm = () => {
  
  return (
    <>
      <div className="flex items-center gap-4 mb-10">
        <Image src={logo} alt="logo" width={50} height={50} />
        <h1 className="text-4xl font-bold">
          Alpha<span className="text-primary">Quiz</span>
        </h1>
      </div>

      <Card className="w-full max-w-lg">
        <CardContent>
          <UserCompleteForm />
        </CardContent>
      </Card>
    </>
  );
};

export default OnboardingForm;
