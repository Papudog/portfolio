import { PropsWithChildren } from "react";

export default function Main({ children }: PropsWithChildren): React.JSX.Element {
  return (
    <main className="lg:w-full lg:py-16 max-lg:mt-8 min-h-screen">
      {children}
    </main>
  )
}