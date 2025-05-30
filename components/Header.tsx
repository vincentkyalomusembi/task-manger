"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="w-full bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <Link href="/dashboard" className="text-xl font-bold text-gray-800">
        Task Manager
      </Link>
      {session?.user && (
        <Button variant="outline" onClick={() => signOut({ callbackUrl: "/login" })}>
          Sign Out
        </Button>
      )}
    </header>
  );
}
