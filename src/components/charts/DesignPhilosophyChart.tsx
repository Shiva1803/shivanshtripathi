import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts'

const data = [
  { attribute: 'Robustness', soviet: 95, western: 70 },
  { attribute: 'Refinement', soviet: 60, western: 90 },
  { attribute: 'Simplicity', soviet: 85, western: 65 },
  { attribute: 'Performance', soviet: 90, western: 85 },
  { attribute: 'Maintainability', soviet: 80, western: 70 },
  { attribute: 'Comfort', soviet: 40, western: 85 },
]

export function DesignPhilosophyChart() {
  return (
    <div className="my-12 bg-black/5 dark:bg-white/5 rounded-xl p-6 border border-black/10 dark:border-white/10">
      <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
        Figure 2 — Design Philosophy Comparison
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Soviet vs Western aerospace design priorities (relative scale)
      </p>
      <div className="h-64 md:h-96 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid stroke="#444" opacity={0.3} />
            <PolarAngleAxis 
              dataKey="attribute" 
              tick={{ fill: '#888', fontSize: 11 }}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 100]}
              tick={{ fill: '#888', fontSize: 10 }}
            />
            <Radar 
              name="Soviet Design" 
              dataKey="soviet" 
              stroke="#ef4444" 
              fill="#ef4444" 
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Radar 
              name="Western Design" 
              dataKey="western" 
              stroke="#3b82f6" 
              fill="#3b82f6" 
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Legend 
              wrapperStyle={{ fontSize: '13px' }}
              iconType="line"
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-center text-gray-600 dark:text-gray-400 mt-2 italic">
        Soviet design prioritized robustness and simplicity; Western design emphasized refinement and comfort
      </p>
    </div>
  )
}
