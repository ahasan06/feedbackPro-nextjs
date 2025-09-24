import { ReactNode } from "react";
import Loading from "./loading";
import { Suspense } from "react";

export default function UserLayout({
  children,
}: { children: ReactNode }) {
  return (
    <div className="container w-full max-w-screen-xl mx-auto py-10 px-10 xl:px-0" >
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </div>
  );
}
