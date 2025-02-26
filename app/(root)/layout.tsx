'use client';

import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loggedInUser, setLoggedInUser] = useState<any | null>(null);

  useEffect(() => {
    // Simulating getting logged-in user data (replace with actual logic if necessary)
    const user = { firstName: "Haroun", userId: 1 };
    setLoggedInUser(user);
  }, []);

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedInUser} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.png" width={50} height={50} alt="menu icon" />
          <div>
            <MobileNav user={loggedInUser} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
