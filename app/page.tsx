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
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-pink-100">
      {/* Birthday-themed background and container */}
      <div className="bg-white p-8 rounded-lg shadow-lg text-center border-4 border-yellow-300">
        {/* Birthday title with balloons */}
        <h1 className="text-6xl font-bold mb-8 text-pink-600 relative">
          🎉 Treasure Hunt Birthday Party! 🎉
          <span className="absolute -top-12 left-0 right-0 flex justify-center">
            <span className="text-4xl">🎈</span>
            <span className="text-4xl mx-4">🎈</span>
            <span className="text-4xl">🎈</span>
          </span>
        </h1>

        {/* Treasure Hunt component */}
        <div className="bg-pink-50 p-6 rounded-lg border-2 border-pink-200">
          <TreasureHunt data={visibleQuestions} />
        </div>

        {/* Birthday cake image at the bottom */}
        <div className="mt-8">
          <img 
            src="/birthday-cake.png" 
            alt="Birthday Cake" 
            className="w-32 h-32 mx-auto"
          />
        </div>
      </div>
    </main>
  )
}