import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const VerificationTimeChart = () => {
  const data = [
    { pages: 5, aiTime: 0.5, verificationTime: 3 },
    { pages: 10, aiTime: 1, verificationTime: 6 },
    { pages: 20, aiTime: 1.5, verificationTime: 12 },
    { pages: 30, aiTime: 2, verificationTime: 18 },
    { pages: 50, aiTime: 2, verificationTime: 25 },
    { pages: 100, aiTime: 3, verificationTime: 40 }
  ]

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-300 dark:border-gray-600 rounded shadow-lg">
          <p className="font-semibold text-black dark:text-white">{payload[0].payload.pages} pages</p>
          <p className="text-sm text-blue-600">AI Time: {payload[0].payload.aiTime}s</p>
          <p className="text-sm text-red-600">Verification: {payload[0].payload.verificationTime} min</p>
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
          <LineChart data={data} margin={{ top: 50, right: 80, left: 80, bottom: 40 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              dataKey="pages" 
              tick={{ fill: '#6b7280', fontSize: 12 }}
              label={{ value: 'Document Complexity (pages)', position: 'insideBottom', offset: -10, fill: '#6b7280' }}
            />
            <YAxis 
              yAxisId="left"
              tick={{ fill: '#6b7280', fontSize: 12 }}
              label={{ value: 'AI Generation Time (seconds)', angle: -90, position: 'center', offset: -15, fill: '#3b82f6' }}
              domain={[0, 5]}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              tick={{ fill: '#6b7280', fontSize: 12 }}
              label={{ value: 'Human Verification Time (minutes)', angle: 90, position: 'center', offset: -15, fill: '#ef4444' }}
              domain={[0, 50]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="top"
              height={36}
              wrapperStyle={{ paddingBottom: '20px' }}
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="aiTime" 
              stroke="#3b82f6" 
              strokeWidth={3}
              name="AI Generation Time (seconds)"
              dot={{ fill: '#3b82f6', r: 5 }}
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="verificationTime" 
              stroke="#ef4444" 
              strokeWidth={3}
              name="Human Verification Time (minutes)"
              dot={{ fill: '#ef4444', r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Mobile Chart */}
      <div className="block sm:hidden">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data} margin={{ top: 40, right: 20, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              dataKey="pages" 
              tick={{ fill: '#6b7280', fontSize: 10 }}
              label={{ value: 'Pages', position: 'insideBottom', offset: -15, fill: '#6b7280', fontSize: 11 }}
            />
            <YAxis 
              yAxisId="left"
              tick={{ fill: '#6b7280', fontSize: 10 }}
              width={35}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              tick={{ fill: '#6b7280', fontSize: 10 }}
              width={35}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="bottom"
              height={50}
              wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }}
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="aiTime" 
              stroke="#3b82f6" 
              strokeWidth={2.5}
              name="AI Time (s)"
              dot={{ fill: '#3b82f6', r: 4 }}
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="verificationTime" 
              stroke="#ef4444" 
              strokeWidth={2.5}
              name="Verification (min)"
              dot={{ fill: '#ef4444', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center italic">
        The Mach 5 Gap: AI generates summaries in seconds (blue line stays flat), but human verification time grows exponentially (red line climbs steeply). Source: Microsoft Copilot and Stanford Medical AI Research
      </p>
    </div>
  )
}

export default VerificationTimeChart
