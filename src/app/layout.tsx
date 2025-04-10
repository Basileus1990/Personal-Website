// app/layout.tsx (Root Layout)
import './globals.css'; // Make sure you have this CSS file or remove the import

// Optional: Add metadata here if you like
export const metadata = {
  title: 'My Portfolio',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Root layout does NOT receive dynamic params like 'lang' directly
  // It MUST contain <html> and <body> tags
  return (
    <html>
      <body>
        {children} {/* This is where app/[lang]/layout.tsx will be rendered */}
      </body>
    </html>
  );
}