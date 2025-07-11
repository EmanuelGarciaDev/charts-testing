import React from 'react'
import Link from 'next/link'
import AnimatedPieChart from '../../components/charts/AnimatedPieChart'
import { marketShareData } from '../../data/sampleData'

// Additional sample data for budget allocation
const budgetData = [
  { name: 'Marketing', value: 300, color: '#3b82f6' },
  { name: 'Development', value: 450, color: '#10b981' },
  { name: 'Sales', value: 200, color: '#f59e0b' },
  { name: 'Support', value: 150, color: '#ef4444' },
  { name: 'Operations', value: 100, color: '#8b5cf6' },
]

export default function PieChartPage() {
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
          <h1 className="page-header">Pie Chart Examples</h1>
          <p className="page-subtitle">
            Perfect for showing proportions, percentages, and part-to-whole relationships
          </p>
        </div>

        <div className="space-y-8">
          {/* Market Share Chart */}
          <AnimatedPieChart
            data={marketShareData}
            title="🏢 Market Share Distribution"
            description="Compare market share percentages across different companies in the industry"
          />

          {/* Budget Allocation Chart */}
          <AnimatedPieChart
            data={budgetData}
            title="💰 Budget Allocation by Department"
            description="Visualize how the annual budget is distributed across different departments"
          />
        </div>

        {/* Best Practices Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 Pie Chart Best Practices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3">✅ Do</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Limit to 5-7 categories maximum
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Start largest slice at 12 o'clock
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Use distinct, contrasting colors
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Include percentages in labels
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Group small categories as "Others"
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-red-700 mb-3">❌ Don't</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Use 3D effects or tilted perspectives
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Include too many small slices
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Use similar colors for adjacent slices
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Explode multiple slices simultaneously
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Use for time series data
                </li>
              </ul>
            </div>
          </div>

          {/* Alternative Charts */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🔄 Consider These Alternatives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Donut Chart</h4>
                <p className="text-sm text-blue-700">Same as pie chart but with center space for additional information</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">Horizontal Bar Chart</h4>
                <p className="text-sm text-green-700">Better for comparing exact values when precision matters</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-900 mb-2">Treemap</h4>
                <p className="text-sm text-purple-700">Good for hierarchical data with many categories</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-medium text-orange-900 mb-2">Waffle Chart</h4>
                <p className="text-sm text-orange-700">Easier to read percentages, especially for small values</p>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-200">
            <h4 className="font-medium text-red-900 mb-2">⚠️ Common Mistakes to Avoid</h4>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• Using pie charts when the data doesn't add up to 100%</li>
              <li>• Including negative values (pie charts can't display negative data)</li>
              <li>• Making slices too small to read (less than 5% of total)</li>
              <li>• Using pie charts for data that changes over time</li>
            </ul>
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
            <Link href="/charts/bar" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-2xl mb-2">📊</div>
                <div className="text-sm font-medium">Bar Chart</div>
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
