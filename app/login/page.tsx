//  "use client" makes this a Client Component (needed for useState, signIn, etc.)
"use client";

//  Import React and NextAuth hooks + UI components from ShadCN
import { useState } from "react";
import { signIn } from "next-auth/react"; // For signing in users
import { useRouter } from "next/navigation"; // For redirecting after login
import { Input } from "@/components/ui/input"; // ShadCN styled input
import { Button } from "@/components/ui/button"; // ShadCN styled button
import { Label } from "@/components/ui/label"; // ShadCN label
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Card layout

export default function LoginPage() {
  const router = useRouter(); // Used for redirection
  const [email, setEmail] = useState(""); // Tracks the email input
  const [password, setPassword] = useState(""); // Tracks the password input
  const [error, setError] = useState(""); // Error message (e.g., invalid login)
  const [loading, setLoading] = useState(false); // Tracks loading state during login

  //  Handle login form submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setLoading(true); // Start loading
    setError(""); // Clear old error

    //  Call NextAuth's signIn with "credentials" provider
    const result = await signIn("credentials", {
      redirect: false, // We'll handle redirect manually
      email,
      password,
    });

    setLoading(false); // Stop loading

    //  If login succeeded
    if (result?.ok) {
      router.push("/dashboard"); // Go to the dashboard
    } else {
      //  Show error if login failed
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/*  Centered card containing the login form */}
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle> {/* Title at the top */}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            {/*  Email field */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
                required
                placeholder="admin@example.com"
              />
            </div>

            {/*  Password field */}
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
                required
                placeholder="••••••••"
              />
            </div>

            {/*  Show error message if login fails */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Login button (disabled when loading) */}
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Signing in..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
