export const metadata = {
  title: "Protected Page",
  description: "Login system using T3",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className="bg-white">
          {children}
        </body>
      </html>
  );
}
