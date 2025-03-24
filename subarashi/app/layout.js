import localFont from "next/font/local";
import { Red_Hat_Display } from "next/font/google";
import { Be_Vietnam_Pro } from "next/font/google";
import { Gorditas } from "next/font/google";
export const metadata = {
  title:
    "Subarashi real estate | Luxury Real Estate Brokers, and Investment Managers",
  description: "Providing tailored service to real estate investors",
  keywords: ["Subarashi real estate", "Luxury real estate"],
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

const Gordita = localFont({
  src: [
    // Regular weights
    {
      path: "../public/fonts/Gordita-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Gordita-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    // Light weights
    {
      path: "../public/fonts/Gordita-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Gordita-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    // Medium weights
    {
      path: "../public/fonts/Gordita-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Gordita-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    // Bold weights
    {
      path: "../public/fonts/Gordita-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Gordita-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    // Black weights
    {
      path: "../public/fonts/Gordita-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Gordita-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-gordita",
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-red-hat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-be-vietnam-pro",
  weight: ["300", "400", "500", "600", "700"],
  // Include italic if needed
  style: ["normal"],
});

const gorditas = Be_Vietnam_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-be-vietnam-pro",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          overflowX: "hidden", // Add this to prevent horizontal scroll
        }}
      >
        {children}
      </body>
    </html>
  );
}
