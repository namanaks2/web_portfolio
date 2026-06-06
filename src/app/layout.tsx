import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://namangupta.dev"),
  title: "Naman Gupta | Developer · Data Science · Startups",
  description:
    "Personal portfolio of Naman Gupta — a B.Tech student, full-stack developer, aspiring data scientist, startup enthusiast, and UI/UX learner building innovative digital products.",
  keywords: [
    "Naman Gupta",
    "Developer",
    "Portfolio",
    "Data Science",
    "Web Development",
    "Startup",
    "UI/UX",
    "React",
    "Next.js",
    "B.Tech",
    "Student Developer",
  ],
  authors: [{ name: "Naman Gupta" }],
  creator: "Naman Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://namangupta.dev",
    title: "Naman Gupta — Developer & Startup Enthusiast",
    description:
      "Full-stack developer, aspiring data scientist, and startup enthusiast. Explore my projects, skills, and journey.",
    siteName: "Naman Gupta Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Naman Gupta Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naman Gupta — Developer & Startup Enthusiast",
    description:
      "Full-stack developer, aspiring data scientist, and startup enthusiast. Explore my projects, skills, and journey.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#f5f0e6" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Inline script to prevent FOUC — sets dark class before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
