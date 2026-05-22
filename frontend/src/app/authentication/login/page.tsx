"use client";

import { GlobalBackground } from "@/components/landing/GlobalBackground";
import { LoginForm } from "@/components/authentication/LoginForm";

export default function CustomerLoginPage() {
  return (
    <>
      <title>Sign In | Happiness Coaching Academy</title>
      <meta
        name="description"
        content="Sign in to your Happiness Coaching Academy student and member portal."
      />

      <main className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 py-16">
        {/* Unified Warm Application Aurora Background */}
        <GlobalBackground />

        {/* Centered Credentials Form */}
        <div className="w-full flex items-center justify-center z-10">
          <LoginForm />
        </div>

        {/* Screen-reader heading */}
        <h1 className="sr-only">Sign In to HCA</h1>
      </main>
    </>
  );
}
