import type { Metadata } from "next"
import ConnectionGame from "@/components/connection-game"

export const metadata: Metadata = {
  title: "Conexões&Afetos",
  description: "Um jogo de cartas interativo para ajudar as pessoas a se conhecerem melhor.",
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <ConnectionGame />
    </main>
  )
}
