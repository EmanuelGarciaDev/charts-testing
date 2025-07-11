import React from 'react'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend, Tooltip } from 'recharts'

interface ChartData {
  [key: string]: any
}

interface AnimatedRadarChartProps {
  data: ChartData[]
  title: string
  description: string
  dataKeys: string[]
  colors?: string[]
  maxValue?: number
  showDots?: boolean
}

function AnimatedRadarChart({
  data,
  title,
  description,
  dataKeys,
  colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
  maxValue,
  showDots = true
}: AnimatedRadarChartProps) {
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-sm font-medium text-gray-900 mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm text-gray-600">
              <span 
                className="inline-block w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: entry.color }}
              ></span>
              {`${entry.dataKey}: ${entry.value}${maxValue ? `/${maxValue}` : ''}`}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="chart-container animate-fade-in">
      <h3 className="chart-title">{title}</h3>
      <p className="chart-description">{description}</p>
      
      <div className="h-96 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} margin={{ top: 20, right: 80, bottom: 20, left: 80 }}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fontSize: 12, fill: '#6b7280' }}
              className="text-sm"
            />
            <PolarRadiusAxis 
              angle={0}
              domain={[0, maxValue || 'dataMax']}
              tick={{ fontSize: 10, fill: '#9ca3af' }}
              tickCount={maxValue ? 6 : undefined}
            />
            <Tooltip content={<CustomTooltip />} />
            
            {dataKeys.map((key, index) => (
              <Radar
                key={key}
                name={key}
                dataKey={key}
                stroke={colors[index % colors.length]}
                fill={colors[index % colors.length]}
                fillOpacity={0.1}
                strokeWidth={2}
                dot={showDots ? { fill: colors[index % colors.length], strokeWidth: 2, r: 4 } : false}
              />
            ))}
            
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value) => <span className="text-sm">{value}</span>}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">💡 When to use Radar Charts:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Comparing multiple quantitative variables for one or more subjects</li>
          <li>• Showing performance across different dimensions or criteria</li>
          <li>• Identifying strengths and weaknesses in multi-dimensional data</li>
          <li>• Displaying symmetric data where all variables have similar scales</li>
          <li>• Creating performance profiles or skill assessments</li>
        </ul>
      </div>
    </div>
  )
}

export default AnimatedRadarChart
