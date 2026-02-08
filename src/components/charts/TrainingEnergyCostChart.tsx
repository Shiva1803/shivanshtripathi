import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const data = [
  { year: '2018', model: 'BERT', energy: 12 },
  { year: '2019', model: 'GPT-2', energy: 50 },
  { year: '2020', model: 'GPT-3', energy: 1287 },
  { year: '2022', model: 'PaLM', energy: 3000 },
  { year: '2023', model: 'GPT-4', energy: 12500 }
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#f9f7f2] dark:bg-[#1a1a1a] border border-[#d4cfc4] dark:border-[#2a2a2a] rounded p-3">
        <p className="text-xs font-bold text-[#2c2c2c] dark:text-[#e8e6e1]">{payload[0].payload.model}</p>
        <p className="text-xs text-[#6b6b6b] dark:text-[#9a9a9a]">Year: {payload[0].payload.year}</p>
        <p className="text-xs text-[#6b6b6b] dark:text-[#9a9a9a]">Energy: {payload[0].value.toLocaleString()} MWh</p>
      </div>
    )
  }
  return null
}

export const TrainingEnergyCostChart: React.FC = () => {
  return (
    <div className="my-12 bg-[#f9f7f2] dark:bg-[#1a1a1a] rounded-sm p-4 sm:p-8 border border-[#d4cfc4] dark:border-[#2a2a2a]">
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-serif mb-2 text-[#2c2c2c] dark:text-[#e8e6e1] tracking-tight">
          Training Energy Cost by Model (2018-2024)
        </h3>
        <p className="text-xs sm:text-sm text-[#6b6b6b] dark:text-[#9a9a9a] leading-relaxed font-light">
          Exponential growth in AI training energy consumption
        </p>
      </div>

      {/* Mobile Chart */}
      <ResponsiveContainer width="100%" height={300} className="sm:hidden">
        <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#d4cfc4" opacity={0.3} />
          <XAxis 
            dataKey="year" 
            stroke="#6b6b6b"
            style={{ fontSize: '10px', fontFamily: 'system-ui' }}
          />
          <YAxis 
            stroke="#6b6b6b"
            scale="log"
            domain={[10, 20000]}
            style={{ fontSize: '10px', fontFamily: 'system-ui' }}
            width={45}
            tickFormatter={(value) => value >= 1000 ? `${value/1000}k` : value}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="energy" 
            stroke="#dc143c" 
            strokeWidth={2.5}
            dot={{ fill: '#dc143c', r: 4 }}
            name="Energy (MWh)"
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Desktop Chart */}
      <ResponsiveContainer width="100%" height={400} className="hidden sm:block">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#d4cfc4" opacity={0.3} />
          <XAxis 
            dataKey="year" 
            stroke="#6b6b6b"
            style={{ fontSize: '12px', fontFamily: 'system-ui' }}
          />
          <YAxis 
            stroke="#6b6b6b"
            scale="log"
            domain={[10, 20000]}
            style={{ fontSize: '12px', fontFamily: 'system-ui' }}
            label={{ 
              value: 'Energy (MWh, log scale)', 
              angle: -90, 
              position: 'insideLeft',
              style: { fontSize: '12px', fill: '#6b6b6b' }
            }}
            tickFormatter={(value) => value >= 1000 ? `${value/1000}k` : value}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }}
            iconType="line"
          />
          <Line 
            type="monotone" 
            dataKey="energy" 
            stroke="#dc143c" 
            strokeWidth={3}
            dot={{ fill: '#dc143c', r: 5 }}
            name="Energy Consumption (MWh)"
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-6 pt-6 border-t border-[#d4cfc4] dark:border-[#2a2a2a]">
        <p className="text-xs text-[#6b6b6b] dark:text-[#9a9a9a] leading-relaxed font-light italic">
          Training energy costs have increased by over 1,000x in just five years. GPT-4's estimated training cost (10,000-15,000 MWh) could power approximately 1,000 American homes for an entire year. The logarithmic scale shows exponential growth that cannot continue indefinitely without major efficiency breakthroughs.
        </p>
        <p className="text-xs text-[#6b6b6b] dark:text-[#9a9a9a] leading-relaxed font-light mt-2">
          Source: Data compiled from "Energy and Policy Considerations for Deep Learning in NLP" (Strubell et al., 2019), OpenAI technical reports, and industry estimates from Patterson et al. (2021) "Carbon Emissions and Large Neural Network Training."
        </p>
      </div>
    </div>
  )
}
