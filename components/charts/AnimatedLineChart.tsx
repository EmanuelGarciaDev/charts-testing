import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'

interface ChartData {
  [key: string]: any
}

interface AnimatedLineChartProps {
  data: ChartData[]
  title: string
  description: string
  dataKey: string
  xAxisKey: string
  color?: string
  showArea?: boolean
}

function AnimatedLineChart({
  data,
  title,
  description,
  dataKey,
  xAxisKey,
  color = '#3b82f6',
  showArea = false
}: AnimatedLineChartProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-sm font-medium text-gray-900">{`${label}`}</p>
          <p className="text-sm text-gray-600">
            <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: color }}></span>
            {`${dataKey}: ${payload[0].value}`}
          </p>
        </div>
      )
    }
    return null
  }

  const ChartComponent = showArea ? AreaChart : LineChart

  return (
    <div className="chart-container animate-fade-in">
      <h3 className="chart-title">{title}</h3>
      <p className="chart-description">{description}</p>
      
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ChartComponent data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
            
            {showArea ? (
              <Area
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                fill={color}
                fillOpacity={0.1}
                strokeWidth={3}
                dot={{ fill: color, strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: color }}
              />
            ) : (
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={3}
                dot={{ fill: color, strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: color }}
              />
            )}
          </ChartComponent>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">💡 When to use this chart:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Showing trends and changes over time</li>
          <li>• Comparing multiple data series</li>
          <li>• Highlighting patterns in continuous data</li>
          <li>• Forecasting and trend analysis</li>
        </ul>
      </div>
    </div>
  )
}

export default AnimatedLineChart
