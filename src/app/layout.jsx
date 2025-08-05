import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bella Vista - Fine Dining Restaurant",
  description:
    "Experience exceptional cuisine in an elegant atmosphere. Fresh ingredients, masterful preparation, unforgettable dining.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
