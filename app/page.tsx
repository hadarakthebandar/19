import { promises as fs } from "fs"
import path from "path"
import TreasureHunt from "@/components/TreasureHunt"

export default async function Home() {
  const jsonDirectory = path.join(process.cwd(), "public")
  const fileContents = await fs.readFile(jsonDirectory + "/treasure-hunt-data.json", "utf8")
  const treasureHuntData = JSON.parse(fileContents)

  // Remove only the last item (final hint) from the data passed to TreasureHunt
  const visibleQuestions = treasureHuntData.slice(0, -1)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Treasure Hunt</h1>
      <TreasureHunt data={visibleQuestions} />
    </main>
  )
}

