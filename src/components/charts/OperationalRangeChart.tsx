import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const data = [
  { aircraft: 'MiG-21', fullName: 'MiG-21', range: 370, type: 'Soviet' },
  { aircraft: 'MiG-23', fullName: 'MiG-23', range: 600, type: 'Soviet' },
  { aircraft: 'F-14', fullName: 'F-14 Tomcat', range: 870, type: 'Western' },
  { aircraft: 'F-4', fullName: 'F-4 Phantom', range: 680, type: 'Western' },
  { aircraft: 'Su-27', fullName: 'Su-27 Flanker', range: 1500, type: 'Soviet' },
  { aircraft: 'F-15', fullName: 'F-15 Eagle', range: 1900, type: 'Western' }
]

export const OperationalRangeChart: React.FC = () => {
  return (
    <div className="my-12 bg-[#f9f7f2] dark:bg-[#1a1a1a] rounded-sm p-4 sm:p-8 border border-[#d4cfc4] dark:border-[#2a2a2a]">
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-serif mb-2 text-[#2c2c2c] dark:text-[#e8e6e1] tracking-tight">
          Operational Range Comparison: Soviet vs Western Fighters
        </h3>
        <p className="text-xs sm:text-sm text-[#6b6b6b] dark:text-[#9a9a9a] leading-relaxed font-light">
          Combat radius in kilometers — doctrine reflected in design
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
            dataKey="aircraft" 
            stroke="#6b6b6b"
            angle={-45}
            textAnchor="end"
            interval={0}
            height={60}
            tick={{ dy: 15 }}
            style={{ fontSize: '10px', fontFamily: 'system-ui' }}
          />
          <YAxis 
            stroke="#6b6b6b"
            style={{ fontSize: '10px', fontFamily: 'system-ui' }}
            width={40}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#f9f7f2',
              border: '1px solid #d4cfc4',
              borderRadius: '4px',
              fontSize: '11px'
            }}
            labelStyle={{ color: '#2c2c2c', fontWeight: 'bold' }}
            formatter={(value: number, name: string, props: any) => [`${value} km`, props.payload.fullName]}
          />
          <Bar dataKey="range" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.type === 'Soviet' ? '#dc143c' : '#3b82f6'} 
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
            dataKey="aircraft" 
            stroke="#6b6b6b"
            angle={-45}
            textAnchor="end"
            interval={0}
            height={60}
            tick={{ dy: 15 }}
            style={{ fontSize: '12px', fontFamily: 'system-ui' }}
          />
          <YAxis 
            stroke="#6b6b6b"
            style={{ fontSize: '12px', fontFamily: 'system-ui' }}
            label={{ 
              value: 'Combat Radius (km)', 
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
            formatter={(value: number, name: string, props: any) => [`${value} km`, props.payload.fullName]}
          />
          <Bar dataKey="range" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.type === 'Soviet' ? '#dc143c' : '#3b82f6'} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 flex gap-4 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#dc143c] rounded"></div>
          <span className="text-xs text-[#6b6b6b] dark:text-[#9a9a9a]">Soviet Aircraft</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#3b82f6] rounded"></div>
          <span className="text-xs text-[#6b6b6b] dark:text-[#9a9a9a]">Western Aircraft</span>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-[#d4cfc4] dark:border-[#2a2a2a]">
        <p className="text-xs text-[#6b6b6b] dark:text-[#9a9a9a] leading-relaxed font-light italic">
          Soviet fighters were designed for point defense and short-range interception, while Western aircraft emphasized deep-strike capability and extended operational range. The F-15's range is more than five times that of the MiG-21, reflecting fundamentally different strategic doctrines.
        </p>
        <p className="text-xs text-[#6b6b6b] dark:text-[#9a9a9a] leading-relaxed font-light mt-2">
          Source: Combat radius data from Jane's Fighting Aircraft, GlobalSecurity.org, and official military specifications.
        </p>
      </div>
    </div>
  )
}
