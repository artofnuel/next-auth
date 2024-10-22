import { SignIn } from "@clerk/nextjs";
import React from "react";

const LogIn = () => {
  return (
    <main className="w-full h-[calc(100vh-56px)] flex justify-center items-center">
      <SignIn />
    </main>
  );
};

export default LogIn;
