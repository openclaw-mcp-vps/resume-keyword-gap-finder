import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resume Keyword Gap Finder – Find Missing Keywords Instantly",
  description: "Compare your resume against any job description to discover missing keywords and get actionable suggestions. Land more interviews."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="000734c5-2abc-4af4-8543-f893d1e41636"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
