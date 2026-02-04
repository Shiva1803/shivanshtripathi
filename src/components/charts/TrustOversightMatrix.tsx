export function TrustOversightMatrix() {
  const matrix = [
    { oversight: 'High', autonomy: 'Low', risk: 10, color: 'bg-green-500' },
    { oversight: 'High', autonomy: 'Medium', risk: 25, color: 'bg-green-400' },
    { oversight: 'High', autonomy: 'High', risk: 45, color: 'bg-yellow-400' },
    { oversight: 'Medium', autonomy: 'Low', risk: 30, color: 'bg-green-400' },
    { oversight: 'Medium', autonomy: 'Medium', risk: 50, color: 'bg-yellow-500' },
    { oversight: 'Medium', autonomy: 'High', risk: 75, color: 'bg-orange-500' },
    { oversight: 'Low', autonomy: 'Low', risk: 55, color: 'bg-yellow-500' },
    { oversight: 'Low', autonomy: 'Medium', risk: 80, color: 'bg-red-500' },
    { oversight: 'Low', autonomy: 'High', risk: 95, color: 'bg-red-600' },
  ]

  const autonomyLevels = ['Low', 'Medium', 'High']

  return (
    <div className="my-12 bg-black/5 dark:bg-white/5 rounded-xl p-6 border border-black/10 dark:border-white/10">
      <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
        Figure 3 — Trust vs Oversight Matrix
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        Risk level varies with human oversight and system autonomy
      </p>
      
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          {/* Y-axis label */}
          <div className="flex items-start mb-2">
            <div className="w-32 flex items-center justify-center">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 transform -rotate-0">
                Human Oversight →
              </span>
            </div>
          </div>
          
          {/* Matrix */}
          <div className="flex">
            {/* Y-axis */}
            <div className="flex flex-col justify-around pr-4">
              <div className="h-24 flex items-center justify-end text-sm font-medium text-gray-700 dark:text-gray-300">
                High
              </div>
              <div className="h-24 flex items-center justify-end text-sm font-medium text-gray-700 dark:text-gray-300">
                Medium
              </div>
              <div className="h-24 flex items-center justify-end text-sm font-medium text-gray-700 dark:text-gray-300">
                Low
              </div>
            </div>
            
            {/* Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-3 gap-2">
                {matrix.map((cell, idx) => (
                  <div
                    key={idx}
                    className={`${cell.color} h-24 rounded-lg flex flex-col items-center justify-center text-white font-bold shadow-lg transition-transform hover:scale-105`}
                  >
                    <div className="text-2xl">{cell.risk}%</div>
                    <div className="text-xs mt-1">Risk</div>
                  </div>
                ))}
              </div>
              
              {/* X-axis */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                {autonomyLevels.map((level) => (
                  <div key={level} className="text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    {level}
                  </div>
                ))}
              </div>
              <div className="text-center mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                ← System Autonomy
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="mt-6 flex items-center justify-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-gray-700 dark:text-gray-300">Low Risk</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span className="text-gray-700 dark:text-gray-300">Medium Risk</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-gray-700 dark:text-gray-300">High Risk</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
