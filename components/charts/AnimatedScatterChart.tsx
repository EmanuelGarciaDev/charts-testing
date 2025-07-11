import React from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ZAxis } from 'recharts'

interface ChartData {
  [key: string]: any
}

interface AnimatedScatterChartProps {
  data: ChartData[]
  title: string
  description: string
  xDataKey: string
  yDataKey: string
  zDataKey?: string // For bubble size
  xLabel?: string
  yLabel?: string
  color?: string
  showTrendLine?: boolean
}

function AnimatedScatterChart({
  data,
  title,
  description,
  xDataKey,
  yDataKey,
  zDataKey,
  xLabel,
  yLabel,
  color = '#3b82f6',
  showTrendLine = false
}: AnimatedScatterChartProps) {
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-900">
              {xLabel || xDataKey}: {data[xDataKey]}
            </p>
            <p className="text-sm font-medium text-gray-900">
              {yLabel || yDataKey}: {data[yDataKey]}
            </p>
            {zDataKey && (
              <p className="text-sm font-medium text-gray-900">
                {zDataKey}: {data[zDataKey]}
              </p>
            )}
            {data.name && (
              <p className="text-sm text-gray-600 border-t pt-2">
                {data.name}
              </p>
            )}
          </div>
        </div>
      )
    }
    return null
  }

  // Calculate correlation coefficient if trend line is requested
  const calculateCorrelation = () => {
    if (!showTrendLine || data.length < 2) return null
    
    const n = data.length
    const sumX = data.reduce((sum, point) => sum + point[xDataKey], 0)
    const sumY = data.reduce((sum, point) => sum + point[yDataKey], 0)
    const sumXY = data.reduce((sum, point) => sum + point[xDataKey] * point[yDataKey], 0)
    const sumXX = data.reduce((sum, point) => sum + point[xDataKey] * point[xDataKey], 0)
    const sumYY = data.reduce((sum, point) => sum + point[yDataKey] * point[yDataKey], 0)
    
    const numerator = n * sumXY - sumX * sumY
    const denominator = Math.sqrt((n * sumXX - sumX * sumX) * (n * sumYY - sumY * sumY))
    
    return denominator === 0 ? 0 : numerator / denominator
  }

  const correlation = calculateCorrelation()
  
  const getCorrelationStrength = (r: number) => {
    const abs = Math.abs(r)
    if (abs >= 0.7) return { strength: 'Strong', color: 'text-green-600' }
    if (abs >= 0.3) return { strength: 'Moderate', color: 'text-yellow-600' }
    return { strength: 'Weak', color: 'text-red-600' }
  }

  return (
    <div className="chart-container animate-fade-in">
      <h3 className="chart-title">{title}</h3>
      <p className="chart-description">{description}</p>
      
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 40 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              type="number"
              dataKey={xDataKey}
              name={xLabel || xDataKey}
              stroke="#6b7280"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              label={{ value: xLabel || xDataKey, position: 'insideBottom', offset: -10 }}
            />
            <YAxis 
              type="number"
              dataKey={yDataKey}
              name={yLabel || yDataKey}
              stroke="#6b7280"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              label={{ value: yLabel || yDataKey, angle: -90, position: 'insideLeft' }}
            />
            {zDataKey && <ZAxis type="number" dataKey={zDataKey} range={[50, 400]} />}
            <Tooltip content={<CustomTooltip />} />
            
            <Scatter 
              name="Data Points" 
              data={data} 
              fill={color}
              fillOpacity={0.7}
              stroke={color}
              strokeWidth={2}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Correlation Analysis */}
      {showTrendLine && correlation !== null && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <h4 className="text-sm font-semibold text-blue-900 mb-2">📊 Correlation Analysis</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-blue-700">Correlation Coefficient:</span>
              <div className="font-medium text-blue-900">{correlation.toFixed(3)}</div>
            </div>
            <div>
              <span className="text-blue-700">Strength:</span>
              <div className={`font-medium ${getCorrelationStrength(correlation).color}`}>
                {getCorrelationStrength(correlation).strength}
              </div>
            </div>
            <div>
              <span className="text-blue-700">Direction:</span>
              <div className="font-medium text-blue-900">
                {correlation > 0 ? 'Positive' : correlation < 0 ? 'Negative' : 'No correlation'}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">💡 When to use Scatter Plots:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Identifying relationships between two continuous variables</li>
          <li>• Detecting outliers and anomalies in data</li>
          <li>• Showing correlation strength and direction</li>
          <li>• Comparing data points across different groups</li>
          <li>• Analyzing distribution patterns and clusters</li>
        </ul>
      </div>
    </div>
  )
}

export default AnimatedScatterChart
