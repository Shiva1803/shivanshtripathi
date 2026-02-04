import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const data = [
  { iteration: 0, error: 1 },
  { iteration: 100, error: 2 },
  { iteration: 500, error: 8 },
  { iteration: 1000, error: 25 },
  { iteration: 2000, error: 65 },
  { iteration: 5000, error: 180 },
  { iteration: 10000, error: 450 },
]

export function ErrorAmplificationChart() {
  return (
    <div className="my-12 bg-black/5 dark:bg-white/5 rounded-xl p-6 border border-black/10 dark:border-white/10">
      <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
        Figure 2 — Error Amplification Over Time
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Small hallucinations compound into systemic errors when scaled at high speed
      </p>
      <div className="h-80 w-full">
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="errorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" opacity={0.3} />
            <XAxis 
              dataKey="iteration" 
              label={{ value: 'Iterations / Time', position: 'insideBottom', offset: -5 }}
              stroke="#888"
            />
            <YAxis 
              label={{ value: 'Error Impact (Relative)', angle: -90, position: 'insideLeft' }}
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
            <Area 
              type="monotone" 
              dataKey="error" 
              stroke="#ef4444" 
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#errorGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
