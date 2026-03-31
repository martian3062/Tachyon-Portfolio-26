import "./globals.css";
import ARProvider from "../ar/ARProvider.jsx";
import ARCursor from "../ar/ARCursor.jsx";
import ARPreviewBubble from "../ar/ARPreviewBubble.jsx";

export const metadata = {
  title: "Portfolio Hub",
  description: "Portfolio Hub - Next.js Migration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ARProvider defaultEnabled={true}>
          {children}
          {/* ONLY DOT CURSOR + CAMERA HUD */}
          <ARCursor />
          <ARPreviewBubble />
        </ARProvider>
      </body>
    </html>
  );
}
