import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

interface ChartData {
  [key: string]: any
}

interface AnimatedAreaChartProps {
  data: ChartData[]
  title: string
  description: string
  dataKeys: string[]
  xAxisKey: string
  colors?: string[]
  stacked?: boolean
}

function AnimatedAreaChart({
  data,
  title,
  description,
  dataKeys,
  xAxisKey,
  colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
  stacked = false
}: AnimatedAreaChartProps) {
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-sm font-medium text-gray-900 mb-2">{`${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm text-gray-600">
              <span 
                className="inline-block w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: entry.color }}
              ></span>
              {`${entry.dataKey}: ${entry.value.toLocaleString()}`}
            </p>
          ))}
          {stacked && payload.length > 1 && (
            <div className="border-t border-gray-200 mt-2 pt-2">
              <p className="text-sm font-medium text-gray-700">
                Total: {payload.reduce((sum: number, entry: any) => sum + entry.value, 0).toLocaleString()}
              </p>
            </div>
          )}
        </div>
      )
    }
    return null
  }

  return (
    <div className="chart-container animate-fade-in">
      <h3 className="chart-title">{title}</h3>
      <p className="chart-description">{description}</p>
      
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey={xAxisKey} 
              stroke="#6b7280"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#6b7280"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            
            {dataKeys.map((key, index) => (
              <Area
                key={key}
                type="monotone"
                dataKey={key}
                stackId={stacked ? "1" : undefined}
                stroke={colors[index % colors.length]}
                fill={colors[index % colors.length]}
                fillOpacity={stacked ? 0.8 : 0.1}
                strokeWidth={2}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">💡 When to use Area Charts:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Showing trends over time with emphasis on magnitude</li>
          <li>• Displaying cumulative totals (especially stacked areas)</li>
          <li>• Comparing multiple data series with part-to-whole relationships</li>
          <li>• Highlighting the volume or quantity under the trend line</li>
          <li>• When you want to show both individual and total values</li>
        </ul>
      </div>
    </div>
  )
}

export default AnimatedAreaChart
