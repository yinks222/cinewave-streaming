import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Vireon — Stream Movies & Series",
  description:
    "Vireon is a cinematic streaming platform for movies and TV series.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
