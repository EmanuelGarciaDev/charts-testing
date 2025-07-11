import React from 'react'
import Link from 'next/link'
import AnimatedLineChart from '../../components/charts/AnimatedLineChart'
import { stockData } from '../../data/sampleData'

export default function LineChartPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Charts Gallery
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="page-header">Line Chart Examples</h1>
          <p className="page-subtitle">
            Perfect for showing trends, changes over time, and continuous data patterns
          </p>
        </div>

        <div className="space-y-8">
          {/* Stock Price Chart */}
          <AnimatedLineChart
            data={stockData}
            title="📈 Stock Price Trends"
            description="Track stock price movements over time to identify trends and patterns"
            dataKey="price"
            xAxisKey="date"
            color="#3b82f6"
          />

          {/* Volume Chart */}
          <AnimatedLineChart
            data={stockData}
            title="📊 Trading Volume"
            description="Monitor trading volume to understand market activity and investor sentiment"
            dataKey="volume"
            xAxisKey="date"
            color="#10b981"
          />

          {/* Area Chart Variation */}
          <AnimatedLineChart
            data={stockData}
            title="📉 Price Trend (Area Chart)"
            description="Same data as line chart but with filled area to emphasize the trend magnitude"
            dataKey="price"
            xAxisKey="date"
            color="#8b5cf6"
            showArea={true}
          />
        </div>

        {/* Best Practices Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 Line Chart Best Practices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3">✅ Do</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Use for time-series data
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Show trends and patterns clearly
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Keep lines distinguishable with colors
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Start Y-axis at zero when appropriate
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Use consistent time intervals
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-red-700 mb-3">❌ Don't</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Use for categorical data
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Overload with too many lines
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Use similar colors for different series
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Manipulate scale to exaggerate trends
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Skip data points without indication
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation to other charts */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Explore Other Chart Types</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/charts/bar" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-2xl mb-2">📊</div>
                <div className="text-sm font-medium">Bar Chart</div>
              </div>
            </Link>
            <Link href="/charts/pie" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-2xl mb-2">🥧</div>
                <div className="text-sm font-medium">Pie Chart</div>
              </div>
            </Link>
            <Link href="/charts/area" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-2xl mb-2">📈</div>
                <div className="text-sm font-medium">Area Chart</div>
              </div>
            </Link>
            <Link href="/charts/scatter" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-2xl mb-2">🔵</div>
                <div className="text-sm font-medium">Scatter Plot</div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
