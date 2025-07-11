import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

interface ChartData {
  name: string
  value: number
  color?: string
}

interface AnimatedPieChartProps {
  data: ChartData[]
  title: string
  description: string
  colors?: string[]
  showPercentage?: boolean
}

function AnimatedPieChart({
  data,
  title,
  description,
  colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'],
  showPercentage = true
}: AnimatedPieChartProps) {
  
  const total = data.reduce((sum, entry) => sum + entry.value, 0)

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      const percentage = ((data.value / total) * 100).toFixed(1)
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-sm font-medium text-gray-900">{data.name}</p>
          <p className="text-sm text-gray-600">
            <span 
              className="inline-block w-3 h-3 rounded-full mr-2" 
              style={{ backgroundColor: data.color || colors[payload[0].index % colors.length] }}
            ></span>
            Value: {data.value}
          </p>
          {showPercentage && (
            <p className="text-sm text-gray-600">Percentage: {percentage}%</p>
          )}
        </div>
      )
    }
    return null
  }

  const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    if (!showPercentage || percent < 0.05) return null // Don't show labels for slices smaller than 5%
    
    const RADIAN = Math.PI / 180
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize={12}
        fontWeight="600"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <div className="chart-container animate-fade-in">
      <h3 className="chart-title">{title}</h3>
      <p className="chart-description">{description}</p>
      
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={CustomLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color || colors[index % colors.length]} 
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value, entry) => (
                <span style={{ color: entry.color }}>{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Data Summary */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div 
              className="w-4 h-4 rounded-full mr-3" 
              style={{ backgroundColor: item.color || colors[index % colors.length] }}
            ></div>
            <div>
              <div className="text-sm font-medium text-gray-900">{item.name}</div>
              <div className="text-xs text-gray-600">
                {item.value} ({((item.value / total) * 100).toFixed(1)}%)
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">💡 When to use this chart:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Showing part-to-whole relationships</li>
          <li>• Displaying proportions and percentages</li>
          <li>• Comparing relative sizes of categories</li>
          <li>• When you have 5-7 categories or fewer</li>
        </ul>
      </div>
    </div>
  )
}

export default AnimatedPieChart
