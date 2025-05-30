// Import core NextAuth function and credentials provider
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Create handler with configuration
const handler = NextAuth({
  providers: [
    // Define credentials-based login
    CredentialsProvider({
      name: "Credentials", // name of provider
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Mock authentication logic (this would call your backend API in production)
        const user = {
          id: "1",
          name: "Test User",
          email: credentials?.email,
        };

        // Allow login only for a hardcoded test user
        if (
          credentials?.email === "admin@example.com" &&
          credentials?.password === "admin"
        ) {
          return user;
        }

        // If credentials don’t match, return null
        return null;
      },
    }),
  ],

  // Use JWT for sessions (simpler for APIs and mobile)
  session: {
    strategy: "jwt",
  },

  // Where to redirect if signIn is needed
  pages: {
    signIn: "/login",
  },
});

// Export handler for Next.js API (supports both GET and POST)
export { handler as GET, handler as POST };
