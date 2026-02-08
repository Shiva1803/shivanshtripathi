import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const AIAdoptionTimelineChart = () => {
  const data = [
    { year: '2020', adoption: 5 },
    { year: '2021', adoption: 10 },
    { year: '2022', adoption: 15 },
    { year: '2023', adoption: 45 },
    { year: '2024', adoption: 58 },
    { year: '2025', adoption: 67 }
  ]

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-300 dark:border-gray-600 rounded shadow-lg">
          <p className="font-semibold text-black dark:text-white">{payload[0].payload.year}</p>
          <p className="text-sm text-black dark:text-white">Adoption: {payload[0].value}%</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="my-8">
      {/* Desktop Chart */}
      <div className="hidden sm:block">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data} margin={{ top: 50, right: 30, left: 110, bottom: 40 }}>
            <defs>
              <linearGradient id="colorAdoption" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              dataKey="year" 
              tick={{ fill: '#6b7280', fontSize: 14 }}
              label={{ value: 'Year', position: 'insideBottom', offset: -10, fill: '#6b7280' }}
            />
            <YAxis 
              label={{ value: 'Developers Using AI Tools (%)', angle: -90, position: 'center', offset: -95, fill: '#6b7280' }}
              tick={{ fill: '#6b7280' }}
              domain={[0, 100]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="adoption" 
              stroke="#3b82f6" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorAdoption)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Mobile Chart */}
      <div className="block sm:hidden">
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={data} margin={{ top: 40, right: 10, left: 15, bottom: 50 }}>
            <defs>
              <linearGradient id="colorAdoptionMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              dataKey="year" 
              tick={{ fill: '#6b7280', fontSize: 11 }}
              label={{ value: 'Year', position: 'insideBottom', offset: -15, fill: '#6b7280', fontSize: 12 }}
            />
            <YAxis 
              tick={{ fill: '#6b7280', fontSize: 10 }}
              domain={[0, 100]}
              width={45}
              label={{ value: 'Adoption (%)', angle: -90, position: 'insideLeft', offset: 5, fill: '#6b7280', fontSize: 10 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="adoption" 
              stroke="#3b82f6" 
              strokeWidth={2.5}
              fillOpacity={1} 
              fill="url(#colorAdoptionMobile)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center italic">
        Developer AI Tool Adoption Timeline (2020-2025): Rapid acceleration from 5% to 67% in just five years. Source: JetBrains Developer Ecosystem Surveys (2020-2025)
      </p>
    </div>
  )
}

export default AIAdoptionTimelineChart
