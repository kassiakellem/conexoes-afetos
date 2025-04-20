import type { Metadata } from "next"
import ConnectionGame from "@/components/connection-game"

export const metadata: Metadata = {
  title: "Connection Cards | Get to Know Each Other",
  description: "An interactive card game to help people connect and get to know each other better",
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <ConnectionGame />
    </main>
  )
}
