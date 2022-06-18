import { ReactNode } from "react";

interface MainLayoutProperties {
  children: ReactNode;
}

function Main({ children }: MainLayoutProperties) {
  return (
    <main className="flex flex-col justify-center h-screen">
      <section className="container max-w-3xl">{children}</section>
    </main>
  );
}

export default Main;
