import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const data = [
  { system: 'NVIDIA H100', efficiency: 1.4e12, type: 'Digital', fullName: 'NVIDIA H100 GPU' },
  { system: 'Intel Loihi 2', efficiency: 1.4e15, type: 'Neuromorphic', fullName: 'Intel Loihi 2 (Neuromorphic)' },
  { system: 'Ant Colony', efficiency: 2.5e13, type: 'Biological', fullName: 'Ant Colony (40,000 ants)' },
  { system: 'Human Brain', efficiency: 5e13, type: 'Biological', fullName: 'Human Brain' }
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const value = payload[0].value
    const formatted = value >= 1e12 ? `${(value / 1e12).toFixed(1)}×10¹²` : value.toExponential(1)
    return (
      <div className="bg-[#f9f7f2] dark:bg-[#1a1a1a] border border-[#d4cfc4] dark:border-[#2a2a2a] rounded p-3">
        <p className="text-xs font-bold text-[#2c2c2c] dark:text-[#e8e6e1]">{payload[0].payload.fullName}</p>
        <p className="text-xs text-[#6b6b6b] dark:text-[#9a9a9a]">Efficiency: {formatted} ops/watt</p>
      </div>
    )
  }
  return null
}

const getColor = (type: string) => {
  switch (type) {
    case 'Biological':
      return '#22c55e'
    case 'Neuromorphic':
      return '#3b82f6'
    case 'Digital':
      return '#dc143c'
    default:
      return '#6b6b6b'
  }
}

export const EnergyEfficiencyChart: React.FC = () => {
  return (
    <div className="my-12 bg-[#f9f7f2] dark:bg-[#1a1a1a] rounded-sm p-4 sm:p-8 border border-[#d4cfc4] dark:border-[#2a2a2a]">
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-serif mb-2 text-[#2c2c2c] dark:text-[#e8e6e1] tracking-tight">
          Energy Efficiency: Operations per Watt
        </h3>
        <p className="text-xs sm:text-sm text-[#6b6b6b] dark:text-[#9a9a9a] leading-relaxed font-light">
          Biological systems vastly outperform digital computing
        </p>
      </div>

      {/* Mobile Chart */}
      <ResponsiveContainer width="100%" height={350} className="sm:hidden">
        <BarChart 
          data={data} 
          margin={{ top: 5, right: 10, left: 0, bottom: 80 }}
          layout="horizontal"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#d4cfc4" opacity={0.3} />
          <XAxis 
            dataKey="system" 
            stroke="#6b6b6b"
            angle={-45}
            textAnchor="end"
            interval={0}
            height={60}
            tick={{ dy: 20 }}
            style={{ fontSize: '10px', fontFamily: 'system-ui' }}
          />
          <YAxis 
            stroke="#6b6b6b"
            scale="log"
            domain={[1e12, 1e16]}
            style={{ fontSize: '9px', fontFamily: 'system-ui' }}
            width={50}
            tickFormatter={(value) => {
              const exp = Math.log10(value)
              return `10^${Math.round(exp)}`
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="efficiency" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={getColor(entry.type)} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Desktop Chart */}
      <ResponsiveContainer width="100%" height={400} className="hidden sm:block">
        <BarChart 
          data={data} 
          margin={{ top: 5, right: 30, left: 20, bottom: 70 }}
          layout="horizontal"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#d4cfc4" opacity={0.3} />
          <XAxis 
            dataKey="system" 
            stroke="#6b6b6b"
            angle={-45}
            textAnchor="end"
            interval={0}
            height={60}
            tick={{ dy: 20 }}
            style={{ fontSize: '12px', fontFamily: 'system-ui' }}
          />
          <YAxis 
            stroke="#6b6b6b"
            scale="log"
            domain={[1e12, 1e16]}
            style={{ fontSize: '12px', fontFamily: 'system-ui' }}
            label={{ 
              value: 'Operations per Watt (log scale)', 
              angle: -90, 
              position: 'insideLeft',
              style: { fontSize: '12px', fill: '#6b6b6b' }
            }}
            tickFormatter={(value) => {
              const exp = Math.log10(value)
              return `10^${Math.round(exp)}`
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="efficiency" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={getColor(entry.type)} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 flex flex-wrap gap-3 sm:gap-4 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#22c55e] rounded"></div>
          <span className="text-xs text-[#6b6b6b] dark:text-[#9a9a9a]">Biological</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#3b82f6] rounded"></div>
          <span className="text-xs text-[#6b6b6b] dark:text-[#9a9a9a]">Neuromorphic</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#dc143c] rounded"></div>
          <span className="text-xs text-[#6b6b6b] dark:text-[#9a9a9a]">Digital</span>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-[#d4cfc4] dark:border-[#2a2a2a]">
        <p className="text-xs text-[#6b6b6b] dark:text-[#9a9a9a] leading-relaxed font-light italic">
          The human brain achieves roughly 35x better energy efficiency than the most advanced GPUs. Intel's Loihi 2 neuromorphic chip demonstrates that brain-inspired architectures can achieve 1,000x improvements for specific tasks. Even a simple ant colony, when measured collectively, outperforms conventional digital computing in operations per watt.
        </p>
        <p className="text-xs text-[#6b6b6b] dark:text-[#9a9a9a] leading-relaxed font-light mt-2">
          Source: Brain efficiency from Laughlin & Sejnowski (2003) "Communication in Neuronal Networks," GPU benchmarks from NVIDIA technical specifications, neuromorphic data from Davies et al. (2021) "Advancing Neuromorphic Computing with Loihi," ant colony estimates from Gordon (2010) "Ant Encounters."
        </p>
      </div>
    </div>
  )
}
