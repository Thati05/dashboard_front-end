import { LineChart } from "lucide-react"
import PieChart from "./PieChart"

interface GraphProps {
  percentile: number
  score:number
}

export default function Graph({ percentile, score }: GraphProps) {
  // Sample data points for the graph
  const points = [
    [0, 10],
    [10, 15],
    [20, 20],
    [25, 35],
    [30, 40],
    [40, 45],
    [50, 65],
    [60, 55],
    [70, 25],
    [80, 15],
    [90, 20],
    [95, 10],
    [100, 10],
  ]

  // Convert points to SVG path
  const createPath = () => {
    return points
      .map((point, i) => {
        const x = (point[0] / 100) * 600
        const y = 200 - (point[1] / 65) * 180
        return `${i === 0 ? "M" : "L"} ${x} ${y}`
      })
      .join(" ")
  }

  return (
    <section className="border rounded-lg p-6 bg-white shadow-sm flex mt-16 absolute max-md:relative max-md:mt-0 ">
      <div>

      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="font-bold text-xl mb-2">Comparison Graph</h2>
          <p className="text-sm text-gray-600 max-w-xl">
            <span className="font-bold">You scored {percentile}% percentile </span>
            which is lower than the average percentile 72% of all the engineers who took this assessment
          </p>
        </div>
        <div className="bg-gray-100 p-2 rounded-full">
          <LineChart className="w-5 h-5 text-gray-600" />
        </div>
      </div>

      <div className="relative mt-8">
        <svg viewBox="0 0 600 220" className="w-full h-[220px] stroke-[#6366f1] fill-none">
          {/* Graph line */}
          <path d={createPath()} className="stroke-2" />

          {/* Data points */}
          {points.map((point, i) => (
            <circle
              key={i}
              cx={(point[0] / 100) * 600}
              cy={200 - (point[1] / 65) * 180}
              r="4"
              className="fill-[#6366f1]"
            />
          ))}

          {/* X-axis */}
          <line x1="0" y1="200" x2="600" y2="200" className="stroke-gray-300" />

          {/* X-axis labels */}
          <text x="0" y="220" className="text-xs fill-gray-500">
            0
          </text>
          <text x="290" y="220" className="text-xs fill-gray-500">
            50
          </text>
          <text x="580" y="220" className="text-xs fill-gray-500">
            100
          </text>

        
         

          {/* Percentile indicator */}
          <line
            x1={(percentile / 100) * 600}
            y1="0"
            x2={(percentile / 100) * 600}
            y2="200"
            className="stroke-red-500 stroke-dasharray-2"
            
          />
          <circle
            cx={(percentile / 100) * 600}
            cy={200 - ((points.find((p) => p[0] >= percentile)?.[1] || 0) / 65) * 180}
            r="6"
            className="fill-red-500"
          />
        </svg>
      </div>
            </div>
      <PieChart score={score} totalQuestions={15}/>
    </section>
  )
}

