import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/public/logo.png";
import LoginForm from "@/components/forms/LoginForm";

const page = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center">
          <Image src={logo} alt="logo" width={40} height={40} className="size-10" />
          <h1 className="text-2xl font-bold">
            Alpha<span className="text-primary">Quiz</span>
          </h1>
        </Link>

        {/* Login Form */}
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
