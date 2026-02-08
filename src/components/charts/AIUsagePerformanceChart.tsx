import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

const AIUsagePerformanceChart = () => {
  // Heavy AI Use cluster: Fast completion, Low comprehension
  const heavyAIData = [
    { time: 25, comprehension: 35, category: 'Heavy AI Use' },
    { time: 26, comprehension: 38, category: 'Heavy AI Use' },
    { time: 27, comprehension: 40, category: 'Heavy AI Use' },
    { time: 28, comprehension: 42, category: 'Heavy AI Use' },
    { time: 29, comprehension: 37, category: 'Heavy AI Use' },
    { time: 30, comprehension: 45, category: 'Heavy AI Use' },
  ]

  // Balanced AI Use cluster: Medium completion, High comprehension
  const balancedAIData = [
    { time: 30, comprehension: 65, category: 'Balanced AI Use' },
    { time: 31, comprehension: 68, category: 'Balanced AI Use' },
    { time: 32, comprehension: 67, category: 'Balanced AI Use' },
    { time: 33, comprehension: 70, category: 'Balanced AI Use' },
    { time: 34, comprehension: 66, category: 'Balanced AI Use' },
    { time: 35, comprehension: 69, category: 'Balanced AI Use' },
  ]

  // No AI cluster: Slower completion, High comprehension
  const noAIData = [
    { time: 35, comprehension: 65, category: 'No AI' },
    { time: 36, comprehension: 67, category: 'No AI' },
    { time: 37, comprehension: 68, category: 'No AI' },
    { time: 38, comprehension: 66, category: 'No AI' },
    { time: 39, comprehension: 70, category: 'No AI' },
    { time: 40, comprehension: 67, category: 'No AI' },
  ]

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-300 dark:border-gray-600 rounded shadow-lg">
          <p className="font-semibold text-black dark:text-white">{payload[0].payload.category}</p>
          <p className="text-sm text-black dark:text-white">Time: {payload[0].payload.time} min</p>
          <p className="text-sm text-black dark:text-white">Comprehension: {payload[0].payload.comprehension}%</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="my-8">
      {/* Desktop Chart */}
      <div className="hidden sm:block">
        <ResponsiveContainer width="100%" height={450}>
          <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              type="number"
              dataKey="time"
              name="Time"
              unit=" min"
              domain={[20, 45]}
              tick={{ fill: '#6b7280', fontSize: 12 }}
              label={{ value: 'Task Completion Time (minutes)', position: 'insideBottom', offset: -10, fill: '#6b7280' }}
            />
            <YAxis 
              type="number"
              dataKey="comprehension"
              name="Comprehension"
              unit="%"
              domain={[0, 100]}
              tick={{ fill: '#6b7280', fontSize: 12 }}
              label={{ value: 'Comprehension Score (%)', angle: -90, position: 'insideLeft', fill: '#6b7280' }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
            <Legend 
              verticalAlign="top" 
              height={36}
              wrapperStyle={{ paddingBottom: '20px' }}
              iconType="circle"
            />
            <Scatter name="Heavy AI Use" data={heavyAIData} fill="#ef4444" />
            <Scatter name="Balanced AI Use" data={balancedAIData} fill="#10b981" />
            <Scatter name="No AI" data={noAIData} fill="#3b82f6" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Mobile Chart */}
      <div className="block sm:hidden">
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart margin={{ top: 20, right: 10, left: 5, bottom: 70 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              type="number"
              dataKey="time"
              name="Time"
              unit=" min"
              domain={[20, 45]}
              tick={{ fill: '#6b7280', fontSize: 10 }}
              label={{ value: 'Time (min)', position: 'insideBottom', offset: -15, fill: '#6b7280', fontSize: 11 }}
            />
            <YAxis 
              type="number"
              dataKey="comprehension"
              name="Comprehension"
              unit="%"
              domain={[0, 100]}
              tick={{ fill: '#6b7280', fontSize: 10 }}
              width={40}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
            <Legend 
              verticalAlign="top" 
              height={36}
              wrapperStyle={{ paddingBottom: '10px', fontSize: '11px' }}
              iconType="circle"
            />
            <Scatter name="Heavy AI" data={heavyAIData} fill="#ef4444" />
            <Scatter name="Balanced AI" data={balancedAIData} fill="#10b981" />
            <Scatter name="No AI" data={noAIData} fill="#3b82f6" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center italic">
        The AI Coding Trade-off: Heavy AI use (red) delivers speed but poor comprehension. Balanced AI use (green) achieves both reasonable speed and strong learning. Going faster doesn't mean learning better. Source: Anthropic Research, January 2026
      </p>
    </div>
  )
}

export default AIUsagePerformanceChart
