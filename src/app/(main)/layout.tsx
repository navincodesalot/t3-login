import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "Protected Page",
  description: "Login system using T3"
};

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      <div id="navbar" className="absolute top-0 right-0 p-4">
        <Navbar/>
      </div>
      {children}
    </div>
  );
}