import React from 'react'
import Link from 'next/link'
import AnimatedAreaChart from '../../components/charts/AnimatedAreaChart'
import { trafficData } from '../../data/sampleData'

// Revenue growth data for stacked area chart
const revenueData = [
  { quarter: 'Q1 2023', product: 2400, services: 1800, subscriptions: 1200 },
  { quarter: 'Q2 2023', product: 2800, services: 2100, subscriptions: 1500 },
  { quarter: 'Q3 2023', product: 3200, services: 2400, subscriptions: 1800 },
  { quarter: 'Q4 2023', product: 3600, services: 2700, subscriptions: 2100 },
  { quarter: 'Q1 2024', product: 4000, services: 3000, subscriptions: 2400 },
  { quarter: 'Q2 2024', product: 4200, services: 3200, subscriptions: 2600 },
]

// CPU usage over time
const performanceData = [
  { time: '00:00', cpu: 20, memory: 45, network: 10 },
  { time: '02:00', cpu: 25, memory: 48, network: 15 },
  { time: '04:00', cpu: 18, memory: 42, network: 8 },
  { time: '06:00', cpu: 35, memory: 55, network: 25 },
  { time: '08:00', cpu: 70, memory: 75, network: 60 },
  { time: '10:00', cpu: 85, memory: 82, network: 70 },
  { time: '12:00', cpu: 90, memory: 88, network: 75 },
  { time: '14:00', cpu: 75, memory: 80, network: 65 },
  { time: '16:00', cpu: 80, memory: 85, network: 70 },
  { time: '18:00', cpu: 60, memory: 70, network: 50 },
  { time: '20:00', cpu: 40, memory: 60, network: 30 },
  { time: '22:00', cpu: 30, memory: 50, network: 20 },
]

export default function AreaChartPage() {
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
          <h1 className="page-header">Area Chart Examples</h1>
          <p className="page-subtitle">
            Perfect for showing trends with magnitude emphasis, cumulative totals, and part-to-whole relationships over time
          </p>
        </div>

        <div className="space-y-12">
          {/* Simple Area Chart - Website Traffic */}
          <AnimatedAreaChart
            data={trafficData}
            title="🌐 Website Traffic by Device Type"
            description="Track website visitors across desktop, mobile, and tablet devices to understand user behavior patterns"
            dataKeys={['desktop', 'mobile', 'tablet']}
            xAxisKey="month"
            colors={['#3b82f6', '#10b981', '#f59e0b']}
          />

          {/* Stacked Area Chart - Revenue Growth */}
          <AnimatedAreaChart
            data={revenueData}
            title="💰 Revenue Growth by Category (Stacked)"
            description="Visualize total revenue growth while showing the contribution of each business segment over time"
            dataKeys={['product', 'services', 'subscriptions']}
            xAxisKey="quarter"
            colors={['#8b5cf6', '#06b6d4', '#f97316']}
            stacked={true}
          />

          {/* System Performance Chart */}
          <AnimatedAreaChart
            data={performanceData}
            title="⚡ System Performance Monitoring"
            description="Monitor server performance metrics throughout the day to identify peak usage times and bottlenecks"
            dataKeys={['cpu', 'memory', 'network']}
            xAxisKey="time"
            colors={['#ef4444', '#f59e0b', '#10b981']}
          />
        </div>

        {/* Comprehensive Guide Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 Area Chart Complete Guide</h2>
          
          {/* When to Use */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">🎯 When to Use Area Charts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">📈 Simple Area Charts</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Emphasizing magnitude of change over time</li>
                  <li>• Showing single metric trends with visual impact</li>
                  <li>• When the area under the curve has meaning</li>
                  <li>• Highlighting cumulative values or totals</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-900 mb-2">📊 Stacked Area Charts</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Showing part-to-whole relationships over time</li>
                  <li>• Comparing multiple categories and their total</li>
                  <li>• Visualizing composition changes over time</li>
                  <li>• When both individual and total values matter</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Real-World Use Cases */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">🌍 Real-World Use Cases</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">💼 Business</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Revenue by product line</li>
                  <li>• Customer acquisition channels</li>
                  <li>• Budget allocation over time</li>
                  <li>• Sales performance tracking</li>
                </ul>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-medium text-orange-900 mb-2">🔧 Technical</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• System resource usage</li>
                  <li>• Network traffic analysis</li>
                  <li>• Application performance metrics</li>
                  <li>• Database query volumes</li>
                </ul>
              </div>
              <div className="p-4 bg-cyan-50 rounded-lg">
                <h4 className="font-medium text-cyan-900 mb-2">📊 Analytics</h4>
                <ul className="text-sm text-cyan-700 space-y-1">
                  <li>• Website traffic sources</li>
                  <li>• User engagement metrics</li>
                  <li>• Content consumption patterns</li>
                  <li>• Social media reach</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3">✅ Best Practices</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Use different opacities to show overlapping areas
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Start Y-axis at zero to avoid misleading visuals
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Order stacked areas logically (largest to smallest)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Use distinct colors with good contrast
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Include tooltips showing exact values
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Limit to 5-7 areas maximum for readability
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-red-700 mb-3">❌ Common Mistakes</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Using area charts for non-continuous data
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Stacking negative and positive values together
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Making areas too transparent to read
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Using similar colors for adjacent areas
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Overloading with too many data series
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Not explaining what the area represents
                </li>
              </ul>
            </div>
          </div>

          {/* Chart Variations */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🔄 Area Chart Variations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-2xl mb-2">📈</div>
                <h4 className="font-medium text-gray-900 mb-1">Simple Area</h4>
                <p className="text-xs text-gray-600">Single metric over time</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-2xl mb-2">📊</div>
                <h4 className="font-medium text-gray-900 mb-1">Stacked Area</h4>
                <p className="text-xs text-gray-600">Multiple categories, cumulative</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-2xl mb-2">🔄</div>
                <h4 className="font-medium text-gray-900 mb-1">100% Stacked</h4>
                <p className="text-xs text-gray-600">Proportional representation</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-2xl mb-2">🌊</div>
                <h4 className="font-medium text-gray-900 mb-1">Stream Graph</h4>
                <p className="text-xs text-gray-600">Flowing, organic appearance</p>
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
