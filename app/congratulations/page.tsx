"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import confetti from "canvas-confetti"
import type React from "react" // Added import for React

export default function Congratulations() {
  const [showContent, setShowContent] = useState(false)
  const [finalAnswer, setFinalAnswer] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  useEffect(() => {
    const progress = localStorage.getItem("treasureHuntProgress")
    if (progress !== "3") {
      router.push("/")
    } else {
      setShowContent(true)
    }
  }, [router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (finalAnswer === "19") {
      localStorage.setItem("treasureHuntProgress", "4")
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
      setError("")
    } else {
      setError("Incorrect answer. Try again!")
    }
  }

  if (!showContent) {
    return null
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {localStorage.getItem("treasureHuntProgress") === "4" ? (
        <>
          <h1 className="text-6xl font-bold mb-8 text-white text-center">
            Happy 19th
            <br />
            Birthday
            <br />
            Anjalika!
          </h1>
          <div className="text-9xl font-bold animate-bounce">
            <span className="inline-block transform -rotate-12">A</span>
            <span className="inline-block mt-4 transform rotate-12">N</span>
          </div>
        </>
      ) : (
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4 text-white">Final Clue</h2>
          <p className="mb-4 text-white">
            The key to celebration is hidden in the day you came into this world. What's the magic number?
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={finalAnswer}
              onChange={(e) => setFinalAnswer(e.target.value)}
              placeholder="Enter your answer"
              className="w-full p-2 border border-gray-300 rounded text-black"
            />
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Submit Final Answer
            </button>
          </form>
          {error && <p className="text-red-300 mt-2">{error}</p>}
        </div>
      )}
    </main>
  )
}

