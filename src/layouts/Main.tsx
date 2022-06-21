import { ReactNode } from "react";

function Main({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col justify-center h-screen">
      <section className="container max-w-3xl flex items-center flex-col">
        {children}
      </section>
    </main>
  );
}

export default Main;
