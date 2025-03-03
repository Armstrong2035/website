import localFont from "next/font/local";
import { Red_Hat_Display } from "next/font/google";
export const metadata = {
  title: "Subarashi",
  description: "The official website for Subarashi",
};

const degular = localFont({
  src: [
    {
      path: "../public/fonts/jugular.otf", // Regular
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/jugular2.otf", // Light
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/jugular3.otf", // Semibold
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/jugular4.otf", // Bold
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-degular",
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-red-hat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          width: "100%", // Changed from 100vw to 100%
          overflowX: "hidden", // Add this to prevent horizontal scroll
        }}
      >
        {children}
      </body>
    </html>
  );
}
