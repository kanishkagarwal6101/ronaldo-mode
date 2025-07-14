import React from "react";
import { GalleryVerticalEnd } from "lucide-react";
import { Player } from "@lottiefiles/react-lottie-player";
import "../index.css";
import { SignUpForm } from "@/components/signup-form";

export default function SignUp() {
  return (
    <div className="grid font-quote min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a
            href="#"
            className="flex text-white items-center gap-2 font-medium"
          >
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <Player
                autoplay
                loop
                src="/Cr7.json"
                style={{ width: "60px", height: "60px" }}
              />
            </div>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignUpForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/auth2rm.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
