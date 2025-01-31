"use client"

import { useEffect, useRef } from "react"
import Chart from "chart.js/auto"

interface PieChartProps {
  score: number
  totalQuestions: number
}

export default function PieChart({ score, totalQuestions }: PieChartProps) {
  const chartRef = useRef<HTMLCanvasElement | null>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy()
        }

        chartInstance.current = new Chart(ctx, {
          type: "pie",
          data: {
            labels: ["Correct", "Incorrect"],
            datasets: [
              {
                data: [score, totalQuestions - score],
                backgroundColor: ["#3b82f6", " #dbeafe "],
                borderColor: ["#3b82f6", " #dbeafe "],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "bottom",
              },
              title: {
                display: true,
                text: "Question Analysis",
                font: {
                  size: 16,
                  weight: "bold",
                },
              },
            },
          },
        })
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [score, totalQuestions])

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <canvas ref={chartRef} />
      <p className="mt-4 text-center text-sm text-gray-600">
        You scored <span className=" font-bold"> {score} out of {totalQuestions}</span> questions correctly.
      </p>
    </div>
  )
}

