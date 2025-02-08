"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface TreasureHuntItem {
  questionNumber: number
  hint: string
  answer: string
}

export default function TreasureHunt({ data }: { data: TreasureHuntItem[] }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answer, setAnswer] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  useEffect(() => {
    const savedProgress = localStorage.getItem("treasureHuntProgress")
    if (savedProgress) {
      setCurrentQuestion(Number.parseInt(savedProgress, 10))
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (answer.toLowerCase() === data[currentQuestion].answer) {
      const nextQuestion = currentQuestion + 1
      if (nextQuestion === data.length) {
        localStorage.setItem("treasureHuntProgress", nextQuestion.toString())
        router.push("/congratulations")
      } else {
        setCurrentQuestion(nextQuestion)
        localStorage.setItem("treasureHuntProgress", nextQuestion.toString())
        setAnswer("")
        setError("")
      }
    } else {
      setError("Incorrect answer. Try again!")
    }
  }

  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Clue #{data[currentQuestion].questionNumber}</h2>
      <p className="mb-4">{data[currentQuestion].hint}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter your answer"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit Answer
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  )
}

