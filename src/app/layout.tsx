import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "@/app/globals.css";
import BackgroundPattern from "@/app/components/BackgroundPattern";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor Challenge | IP Address Tracker",
  description: "Find the Geolocation of an IP Address or Domain Name",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <main className="relative">
          <div className="absolute top-0 -z-50 w-full min-w-[18rem]">
            <div className="relative flex h-80 sm:h-[17.15rem] md:h-[17.65rem] lg:h-[17.75rem]">
              <BackgroundPattern />
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
