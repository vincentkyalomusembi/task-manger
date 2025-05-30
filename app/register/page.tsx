// app/register/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Register</h1>

        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input type="text" id="name" placeholder="John Doe" />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="you@example.com" />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="••••••••" />
        </div>

        <Button type="submit" className="w-full">
          Register
        </Button>
      </form>
    </div>
  );
}
