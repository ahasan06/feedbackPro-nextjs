import { ReactNode } from "react";

export default function UserLayout({
  children,
}: { children: ReactNode }) {
  return (
    <div className="container w-full max-w-screen-xl mx-auto py-10 px-10 xl:px-0" >
      {children}
    </div>
  );
}
