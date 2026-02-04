import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const data = [
  { name: 'Human Brain', energy: 20 },
  { name: 'Ant Colony', energy: 0.05 },
  { name: 'GPT-3 Train', energy: 1287000 },
  { name: 'GPT-4 Infer', energy: 350 },
  { name: 'Data Center', energy: 5000000 },
]

export function EnergyComparisonChart() {
  return (
    <div className="my-12 bg-black/5 dark:bg-white/5 rounded-xl p-6 border border-black/10 dark:border-white/10">
      <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
        Figure 1 — Energy Consumption Comparison
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Power consumption across biological and artificial intelligence systems (logarithmic scale)
      </p>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 70, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" opacity={0.3} />
            <XAxis 
              dataKey="name" 
              stroke="#888"
              interval={0}
              tick={{ fontSize: 11, fill: '#888' }}
            />
            <YAxis 
              scale="log"
              domain={[0.01, 10000000]}
              label={{ 
                value: 'Power (Watts, log scale)', 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle', fill: '#888' }
              }}
              stroke="#888"
              tick={{ fontSize: 11, fill: '#888' }}
              tickFormatter={(value) => {
                if (value >= 1000000) return `${(value / 1000000)}M`
                if (value >= 1000) return `${(value / 1000)}K`
                if (value >= 1) return value
                return value
              }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(0,0,0,0.9)', 
                border: '1px solid #444',
                borderRadius: '8px',
                color: '#fff'
              }}
              formatter={(value: number) => {
                if (value >= 1000000) return [`${(value / 1000000).toFixed(1)} MW`, 'Power']
                if (value >= 1000) return [`${(value / 1000).toFixed(0)} KW`, 'Power']
                return [`${value} W`, 'Power']
              }}
            />
            <Bar 
              dataKey="energy" 
              fill="#3b82f6"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
