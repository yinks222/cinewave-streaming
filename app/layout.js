import "./globals.css";

export const metadata = {
  title: "CineWave — Stream Movies",
  description: "CineWave cinematic streaming interface"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
