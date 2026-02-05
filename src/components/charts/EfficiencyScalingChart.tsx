import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts'

const data = [
  { scale: '1', scaleValue: 1, biological: 95, artificial: 20 },
  { scale: '10', scaleValue: 10, biological: 88, artificial: 35 },
  { scale: '100', scaleValue: 100, biological: 75, artificial: 55 },
  { scale: '1K', scaleValue: 1000, biological: 60, artificial: 70 },
  { scale: '10K', scaleValue: 10000, biological: 45, artificial: 80 },
  { scale: '100K', scaleValue: 100000, biological: 30, artificial: 85 },
]

export function EfficiencyScalingChart() {
  return (
    <div className="my-12 bg-black/5 dark:bg-white/5 rounded-xl p-6 border border-black/10 dark:border-white/10">
      <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
        Figure 2 — Energy Efficiency vs Scale
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        How biological and artificial systems scale with size (efficiency relative to baseline)
      </p>
      <div className="h-64 md:h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 10, left: 40, bottom: 30 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" opacity={0.3} />
            <XAxis 
              dataKey="scale"
              stroke="#888"
              tick={{ fontSize: 11, fill: '#888' }}
            />
            <YAxis 
              label={{ 
                value: 'Efficiency (%)', 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle', fill: '#888', fontSize: 12 }
              }}
              stroke="#888"
              tick={{ fontSize: 11, fill: '#888' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(0,0,0,0.9)', 
                border: '1px solid #444',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Legend 
              verticalAlign="bottom"
              height={40}
              wrapperStyle={{ paddingTop: '15px', fontSize: '13px' }}
              iconType="line"
            />
            <Line 
              type="monotone" 
              dataKey="biological" 
              stroke="#10b981" 
              strokeWidth={3}
              name="Biological Systems"
              dot={{ fill: '#10b981', r: 5 }}
            />
            <Line 
              type="monotone" 
              dataKey="artificial" 
              stroke="#ef4444" 
              strokeWidth={3}
              name="Artificial Systems"
              dot={{ fill: '#ef4444', r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-center text-gray-600 dark:text-gray-400 mt-2">
        System Scale (units)
      </p>
    </div>
  )
}
