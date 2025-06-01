 Task Manager Frontend

A task management web application built using **Next.js 15**, **TypeScript**, **Redux**, and **NextAuth**. The app supports user authentication, protected routes, task listing, adding, and deleting tasks with client-side state management.


✨ Features

- 🔐 User authentication with NextAuth (Credentials Provider)
- 🧭 Protected dashboard and middleware-based access control
- 🗂 Task listing with Redux state management
- ➕ Add and ❌ delete tasks
- ⚡ TanStack Query (React Query) for data fetching
- 🧪 Fully client-side app with mock authentication logic
- 🎨 Styled using Tailwind CSS & ShadCN UI components

---

🧰 Technologies Used

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Google Fonts – Geist](https://vercel.com/font)

---

 🚀 Getting Started


# Clone the repository
git clone https://github.com/vincentkyalomusembi/task-manger.git
cd task-manager-frontend

# Install dependencies
npm install

# Start the development server
npm run dev

Test Credentials

Email: admin@example.com
Password: admin

🔐 Login Page
![image](https://github.com/user-attachments/assets/7708b14e-ad73-41f0-baa4-5c62ec8b44e1)

📝 Register Page
![image](https://github.com/user-attachments/assets/b98429c3-8c0e-48ec-8c59-bec2fbb5b341)
📋 Dashboard with Tasks
![image](https://github.com/user-attachments/assets/ae7603ec-6a11-4470-8079-b8a95915414c)

🗂 Folder Structure

task-manager/
├── app/
│   ├── login/               # Login page
│   ├── register/            # Register page
│   ├── dashboard/           # Protected dashboard
│   └── layout.tsx           # Root layout
├── components/              # Shared UI components
├── lib/
│   ├── store.ts             # Redux store config
│   └── redux/               # Redux slices (e.g., taskSlice)
├── public/
│   └── screenshots/         # Screenshots for README
├── middleware.ts            # Auth middleware
├── styles/
│   └── globals.css          # Global styles
└── README.md

✅ Step-by-Step Implementation
Step 1: Authentication Pages

    Created /login and /register pages using ShadCN components

    Connected forms to NextAuth using signIn()

Step 2: NextAuth Frontend Setup

    Installed next-auth

    Created app/api/auth/[...nextauth]/route.ts

    Used Credentials Provider with mock logic

Step 3: Layout & Navigation

    Added Header component

    Created root layout with SessionProvider, QueryProvider

Step 4: Protected Routes

    Implemented middleware.ts to protect /dashboard

    Verified sessions using getToken()

Step 5: Task Dashboard UI

    Created TaskList and AddTaskDialog components

    Used TanStack Query for loading tasks

    Tasks are mock-loaded from a local endpoint (no backend)

Step 6: Redux Integration

    Created taskSlice.ts under lib/redux/

    Set up store.ts inside lib/

    Wrapped app with <ReduxProvider> and added actions
👤 Author

    Your Name — https://github.com/vincentkyalomusembi

    Meru University of Science and Technology
⚖ License

This project is open-source and free to use.
