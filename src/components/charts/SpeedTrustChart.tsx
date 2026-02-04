import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const data = [
  { speed: 0, trust: 98, label: 'Human Speed' },
  { speed: 1, trust: 95, label: 'Mach 1' },
  { speed: 2, trust: 88, label: 'Mach 2' },
  { speed: 3, trust: 75, label: 'Mach 3' },
  { speed: 4, trust: 58, label: 'Mach 4' },
  { speed: 5, trust: 35, label: 'Mach 5' },
]

export function SpeedTrustChart() {
  return (
    <div className="my-12 bg-black/5 dark:bg-white/5 rounded-xl p-6 border border-black/10 dark:border-white/10">
      <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
        Figure 1 — Trust vs Decision Speed
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Trust decreases as decision speed exceeds human verification capacity
      </p>
      <div className="h-80 w-full">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" opacity={0.3} />
            <XAxis 
              dataKey="speed" 
              label={{ value: 'Decision Speed (Mach)', position: 'insideBottom', offset: -5 }}
              stroke="#888"
            />
            <YAxis 
              label={{ value: 'Human Verifiability (%)', angle: -90, position: 'insideLeft' }}
              stroke="#888"
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(0,0,0,0.8)', 
                border: '1px solid #444',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="trust" 
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={{ fill: '#3b82f6', r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
