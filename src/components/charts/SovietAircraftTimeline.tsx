import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts'

const data = [
  { year: 1947, speed: 1050, name: 'MiG-15', category: 'Fighter' },
  { year: 1953, speed: 1200, name: 'MiG-17', category: 'Fighter' },
  { year: 1959, speed: 2175, name: 'MiG-21', category: 'Fighter' },
  { year: 1964, speed: 3000, name: 'MiG-25', category: 'Interceptor' },
  { year: 1977, speed: 2500, name: 'MiG-29', category: 'Fighter' },
  { year: 1985, speed: 2500, name: 'Su-27', category: 'Fighter' },
  { year: 1952, speed: 925, name: 'Tu-95', category: 'Bomber' },
  { year: 1954, speed: 1050, name: 'Tu-16', category: 'Bomber' },
  { year: 1981, speed: 830, name: 'Su-25', category: 'Attack' },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-black/90 border border-white/20 rounded-lg p-3 text-white">
        <p className="font-bold text-sm">{data.name}</p>
        <p className="text-xs text-gray-300">{data.category}</p>
        <p className="text-xs mt-1">Year: {data.year}</p>
        <p className="text-xs">Max Speed: {data.speed} km/h</p>
      </div>
    )
  }
  return null
}

export function SovietAircraftTimeline() {
  const getColor = (category: string) => {
    switch (category) {
      case 'Fighter': return '#ef4444'
      case 'Interceptor': return '#f59e0b'
      case 'Bomber': return '#3b82f6'
      case 'Attack': return '#10b981'
      default: return '#6b7280'
    }
  }

  return (
    <div className="my-12 bg-black/5 dark:bg-white/5 rounded-xl p-6 border border-black/10 dark:border-white/10">
      <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
        Figure 1 — Soviet Aircraft Evolution (1947-1985)
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Maximum speed vs introduction year for major Soviet aircraft
      </p>
      <div className="h-64 md:h-96 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 10, left: 50, bottom: 40 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" opacity={0.3} />
            <XAxis 
              dataKey="year" 
              type="number"
              domain={[1945, 1990]}
              stroke="#888"
              tick={{ fontSize: 11, fill: '#888' }}
              label={{ 
                value: 'Year of Introduction', 
                position: 'insideBottom', 
                offset: -10,
                style: { fill: '#888', fontSize: 12 }
              }}
            />
            <YAxis 
              dataKey="speed"
              stroke="#888"
              tick={{ fontSize: 11, fill: '#888' }}
              label={{ 
                value: 'Max Speed (km/h)', 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle', fill: '#888', fontSize: 12 }
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Scatter data={data}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getColor(entry.category)} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-wrap gap-4 mt-4 justify-center text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
          <span className="text-gray-600 dark:text-gray-400">Fighter</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
          <span className="text-gray-600 dark:text-gray-400">Interceptor</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#3b82f6]"></div>
          <span className="text-gray-600 dark:text-gray-400">Bomber</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
          <span className="text-gray-600 dark:text-gray-400">Attack</span>
        </div>
      </div>
    </div>
  )
}
