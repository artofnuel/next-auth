import React from "react";
import { SignUp } from "@clerk/nextjs";

const Register = () => {
  return (
    <main className="w-full h-[calc(100vh-56px)] flex justify-center items-center">
      <SignUp />
    </main>
  );
};

export default Register;
