"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="w-full bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <h1 className="text-xl font-bold">Task Manager</h1>
      {session && (
        <div className="flex items-center gap-4">
          <span>{session.user?.email}</span>
          <Button onClick={() => signOut()}>Sign Out</Button>
        </div>
      )}
    </header>
  );
}
