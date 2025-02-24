export const metadata = {
  title: "Subarashi",
  description: "The official website for Subarashi",
};

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
