import React from 'react'
import Link from 'next/link'
import AnimatedBarChart from '../../components/charts/AnimatedBarChart'
import { salesData } from '../../data/sampleData'

export default function BarChartPage() {
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
          <h1 className="page-header">Bar Chart Examples</h1>
          <p className="page-subtitle">
            Perfect for comparing categories, showing rankings, and displaying discrete data values
          </p>
        </div>

        <div className="space-y-8">
          {/* Sales vs Target Chart */}
          <AnimatedBarChart
            data={salesData}
            title="📊 Sales vs Target by Region"
            description="Compare actual sales performance against targets across different geographical regions"
            dataKeys={['sales', 'target']}
            xAxisKey="region"
            colors={['#3b82f6', '#10b981']}
          />

          {/* Sales Only Chart */}
          <AnimatedBarChart
            data={salesData}
            title="🌍 Regional Sales Performance"
            description="Simple comparison of sales figures across different regions"
            dataKeys={['sales']}
            xAxisKey="region"
            colors={['#8b5cf6']}
          />
        </div>

        {/* Best Practices Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 Bar Chart Best Practices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3">✅ Do</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Start Y-axis at zero for accurate comparison
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Use consistent spacing between bars
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Order categories logically (alphabetical, by value, etc.)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Keep bar widths proportional
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Use distinct colors for different series
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-red-700 mb-3">❌ Don't</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Use 3D effects that distort perception
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Make bars too narrow or too wide
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Use too many categories (&gt;10-12)
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Start Y-axis at non-zero unless justified
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Use similar colors for different data series
                </li>
              </ul>
            </div>
          </div>

          {/* Chart Variations */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Bar Chart Variations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Vertical Bars</h4>
                <p className="text-sm text-blue-700">Best for comparing categories with short labels</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">Horizontal Bars</h4>
                <p className="text-sm text-green-700">Better for long category names or many categories</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-900 mb-2">Stacked Bars</h4>
                <p className="text-sm text-purple-700">Show part-to-whole relationships within categories</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation to other charts */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Explore Other Chart Types</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/charts/line" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-2xl mb-2">📈</div>
                <div className="text-sm font-medium">Line Chart</div>
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
                <div className="text-2xl mb-2">📊</div>
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
