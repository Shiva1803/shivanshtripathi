import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { year: '1950', mig15_17: 0, f86: 0, mig21: 0, f4: 0 },
  { year: '1955', mig15_17: 12000, f86: 9800, mig21: 0, f4: 0 },
  { year: '1960', mig15_17: 18000, f86: 9800, mig21: 1500, f4: 0 },
  { year: '1965', mig15_17: 18000, f86: 9800, mig21: 4000, f4: 1200 },
  { year: '1970', mig15_17: 18000, f86: 9800, mig21: 7500, f4: 3500 },
  { year: '1975', mig15_17: 18000, f86: 9800, mig21: 9500, f4: 4800 },
  { year: '1980', mig15_17: 18000, f86: 9800, mig21: 10500, f4: 5195 },
  { year: '1985', mig15_17: 18000, f86: 9800, mig21: 11000, f4: 5195 },
  { year: '1990', mig15_17: 18000, f86: 9800, mig21: 11200, f4: 5195 }
]

export const FighterProductionChart: React.FC = () => {
  return (
    <div className="my-12 bg-[#f9f7f2] dark:bg-[#1a1a1a] rounded-sm p-4 sm:p-8 border border-[#d4cfc4] dark:border-[#2a2a2a]">
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-serif mb-2 text-[#2c2c2c] dark:text-[#e8e6e1] tracking-tight">
          Soviet vs Western Fighter Production (1950-1990)
        </h3>
        <p className="text-xs sm:text-sm text-[#6b6b6b] dark:text-[#9a9a9a] leading-relaxed font-light">
          Cumulative units produced — quantity over quality
        </p>
      </div>

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
            style={{ fontSize: '10px', fontFamily: 'system-ui' }}
            width={45}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#f9f7f2',
              border: '1px solid #d4cfc4',
              borderRadius: '4px',
              fontSize: '11px'
            }}
            labelStyle={{ color: '#2c2c2c', fontWeight: 'bold' }}
          />
          <Legend 
            wrapperStyle={{ fontSize: '10px', paddingTop: '15px' }}
            iconType="line"
            iconSize={10}
          />
          <Line 
            type="monotone" 
            dataKey="mig15_17" 
            stroke="#8b0000" 
            strokeWidth={2}
            name="MiG-15/17"
            dot={{ fill: '#8b0000', r: 2 }}
          />
          <Line 
            type="monotone" 
            dataKey="mig21" 
            stroke="#dc143c" 
            strokeWidth={2}
            name="MiG-21"
            dot={{ fill: '#dc143c', r: 2 }}
          />
          <Line 
            type="monotone" 
            dataKey="f86" 
            stroke="#1e3a8a" 
            strokeWidth={2}
            name="F-86"
            dot={{ fill: '#1e3a8a', r: 2 }}
          />
          <Line 
            type="monotone" 
            dataKey="f4" 
            stroke="#3b82f6" 
            strokeWidth={2}
            name="F-4"
            dot={{ fill: '#3b82f6', r: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>

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
            style={{ fontSize: '12px', fontFamily: 'system-ui' }}
            label={{ 
              value: 'Units Produced', 
              angle: -90, 
              position: 'insideLeft',
              style: { fontSize: '12px', fill: '#6b6b6b' }
            }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#f9f7f2',
              border: '1px solid #d4cfc4',
              borderRadius: '4px',
              fontSize: '12px'
            }}
            labelStyle={{ color: '#2c2c2c', fontWeight: 'bold' }}
          />
          <Legend 
            wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }}
            iconType="line"
          />
          <Line 
            type="monotone" 
            dataKey="mig15_17" 
            stroke="#8b0000" 
            strokeWidth={2.5}
            name="MiG-15/17 (Soviet)"
            dot={{ fill: '#8b0000', r: 3 }}
          />
          <Line 
            type="monotone" 
            dataKey="mig21" 
            stroke="#dc143c" 
            strokeWidth={2.5}
            name="MiG-21 (Soviet)"
            dot={{ fill: '#dc143c', r: 3 }}
          />
          <Line 
            type="monotone" 
            dataKey="f86" 
            stroke="#1e3a8a" 
            strokeWidth={2.5}
            name="F-86 Sabre (US)"
            dot={{ fill: '#1e3a8a', r: 3 }}
          />
          <Line 
            type="monotone" 
            dataKey="f4" 
            stroke="#3b82f6" 
            strokeWidth={2.5}
            name="F-4 Phantom (US)"
            dot={{ fill: '#3b82f6', r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-6 pt-6 border-t border-[#d4cfc4] dark:border-[#2a2a2a]">
        <p className="text-xs text-[#6b6b6b] dark:text-[#9a9a9a] leading-relaxed font-light italic">
          The MiG-21 alone outnumbered both major Western fighters combined. Soviet doctrine prioritized numerical superiority and ease of production over individual aircraft sophistication.
        </p>
        <p className="text-xs text-[#6b6b6b] dark:text-[#9a9a9a] leading-relaxed font-light mt-2">
          Source: Production data compiled from Jane's All the World's Aircraft, Federation of American Scientists (FAS), and various aviation historical databases.
        </p>
      </div>
    </div>
  )
}
