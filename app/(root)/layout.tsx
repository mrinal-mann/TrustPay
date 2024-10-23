import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Mrinal", lastName: "Manna" };
  return (
    <html lang="en">
      <body>
        <main className="flex h-screen w-full font-inter">
          <Sidebar user={loggedIn} />
          {children}
        </main>
      </body>
    </html>
  );
}
