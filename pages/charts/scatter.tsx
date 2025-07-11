import React from 'react'
import Link from 'next/link'
import AnimatedScatterChart from '../../components/charts/AnimatedScatterChart'
import { scatterData, studentData, housePriceData, salesPerformanceData } from '../../data/sampleData'

export default function ScatterChartPage() {
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
          <h1 className="page-header">Scatter Plot Examples</h1>
          <p className="page-subtitle">
            Perfect for exploring relationships between variables, identifying correlations, and discovering patterns in data
          </p>
        </div>

        <div className="space-y-12">
          {/* Student Performance Analysis */}
          <AnimatedScatterChart
            data={studentData}
            title="📚 Student Performance: Study Hours vs Test Scores"
            description="Analyze the relationship between study time and academic performance to identify learning patterns"
            xDataKey="studyHours"
            yDataKey="testScore"
            xLabel="Study Hours per Day"
            yLabel="Test Score (%)"
            color="#3b82f6"
            showTrendLine={true}
          />

          {/* Real Estate Analysis */}
          <AnimatedScatterChart
            data={housePriceData}
            title="🏠 Real Estate: House Size vs Price"
            description="Explore the correlation between property size and market value to understand pricing trends"
            xDataKey="size"
            yDataKey="price"
            xLabel="House Size (sq ft)"
            yLabel="Price ($)"
            color="#10b981"
            showTrendLine={true}
          />

          {/* Health Data Analysis */}
          <AnimatedScatterChart
            data={scatterData}
            title="⚕️ Health Analytics: Height vs Weight Distribution"
            description="Examine the relationship between height and weight in population health studies"
            xDataKey="height"
            yDataKey="weight"
            zDataKey="age"
            xLabel="Height (cm)"
            yLabel="Weight (kg)"
            color="#8b5cf6"
            showTrendLine={true}
          />

          {/* Sales Performance (Bubble Chart) */}
          <AnimatedScatterChart
            data={salesPerformanceData}
            title="💼 Sales Team Performance: Experience vs Revenue"
            description="Analyze sales performance metrics with experience level and deal volume (bubble size represents number of deals)"
            xDataKey="experience"
            yDataKey="sales"
            zDataKey="deals"
            xLabel="Years of Experience"
            yLabel="Annual Sales ($)"
            color="#f59e0b"
            showTrendLine={true}
          />
        </div>

        {/* Comprehensive Guide Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 Scatter Plot Complete Guide</h2>
          
          {/* Understanding Scatter Plots */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">🎯 Understanding Scatter Plots</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">📊 What They Show</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Relationship between two continuous variables</li>
                  <li>• Strength and direction of correlation</li>
                  <li>• Distribution patterns and clusters</li>
                  <li>• Outliers and anomalies in data</li>
                  <li>• Trends and patterns across data points</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">🔍 What to Look For</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Linear or non-linear relationships</li>
                  <li>• Positive or negative correlations</li>
                  <li>• Tight clusters or scattered points</li>
                  <li>• Data points far from the main pattern</li>
                  <li>• Different groups or segments</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Correlation Interpretation */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">📈 Correlation Interpretation Guide</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <h4 className="font-medium text-red-900 mb-2">Strong Correlation</h4>
                <p className="text-sm text-red-700 mb-2">|r| ≥ 0.7</p>
                <ul className="text-xs text-red-600 space-y-1">
                  <li>• Clear linear relationship</li>
                  <li>• Points closely follow trend line</li>
                  <li>• Reliable predictive value</li>
                  <li>• Strong association between variables</li>
                </ul>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-medium text-yellow-900 mb-2">Moderate Correlation</h4>
                <p className="text-sm text-yellow-700 mb-2">0.3 ≤ |r| &lt; 0.7</p>
                <ul className="text-xs text-yellow-600 space-y-1">
                  <li>• Noticeable but not perfect relationship</li>
                  <li>• Some scatter around trend line</li>
                  <li>• Moderate predictive value</li>
                  <li>• Other factors may influence relationship</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Weak/No Correlation</h4>
                <p className="text-sm text-gray-700 mb-2">|r| &lt; 0.3</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Little to no linear relationship</li>
                  <li>• Points widely scattered</li>
                  <li>• Poor predictive value</li>
                  <li>• Variables may be independent</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Real-World Applications */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">🌍 Real-World Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-900 mb-2">🔬 Scientific Research</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Drug dosage vs effectiveness</li>
                  <li>• Temperature vs chemical reaction rate</li>
                  <li>• Pressure vs volume relationships</li>
                  <li>• Clinical trial outcomes</li>
                </ul>
              </div>
              <div className="p-4 bg-cyan-50 rounded-lg">
                <h4 className="font-medium text-cyan-900 mb-2">💰 Finance</h4>
                <ul className="text-sm text-cyan-700 space-y-1">
                  <li>• Risk vs return analysis</li>
                  <li>• Credit score vs loan default</li>
                  <li>• Market cap vs stock price</li>
                  <li>• Economic indicators correlation</li>
                </ul>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-medium text-orange-900 mb-2">📊 Marketing</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Ad spend vs conversion rate</li>
                  <li>• Price vs demand elasticity</li>
                  <li>• Customer satisfaction vs retention</li>
                  <li>• Engagement vs sales correlation</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">🎓 Education</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Study time vs test scores</li>
                  <li>• Attendance vs academic performance</li>
                  <li>• Class size vs learning outcomes</li>
                  <li>• Teaching method effectiveness</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Best Practices vs Common Mistakes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3">✅ Best Practices</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Choose appropriate scales for both axes
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Include correlation coefficients when relevant
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Use consistent point sizes unless representing a third variable
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Label axes clearly with units
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Highlight outliers and explain their significance
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Use different colors/shapes for different groups
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-red-700 mb-3">❌ Common Mistakes</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Assuming correlation implies causation
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Using scatter plots for categorical data
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Overcrowding with too many data points
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Inappropriate axis scaling that distorts relationships
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Ignoring outliers without investigation
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Using 3D effects that obscure data relationships
                </li>
              </ul>
            </div>
          </div>

          {/* Advanced Techniques */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🚀 Advanced Scatter Plot Techniques</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-2xl mb-2">🫧</div>
                <h4 className="font-medium text-gray-900 mb-1">Bubble Charts</h4>
                <p className="text-xs text-gray-600">Use bubble size for third variable</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-2xl mb-2">🌈</div>
                <h4 className="font-medium text-gray-900 mb-1">Color Mapping</h4>
                <p className="text-xs text-gray-600">Color points by categorical variable</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-2xl mb-2">📊</div>
                <h4 className="font-medium text-gray-900 mb-1">Regression Lines</h4>
                <p className="text-xs text-gray-600">Add trend lines and confidence intervals</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-medium text-gray-900 mb-1">Density Plots</h4>
                <p className="text-xs text-gray-600">Show concentration with contours</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-2xl mb-2">📐</div>
                <h4 className="font-medium text-gray-900 mb-1">Matrix Plots</h4>
                <p className="text-xs text-gray-600">Multiple variable relationships</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-2xl mb-2">🔍</div>
                <h4 className="font-medium text-gray-900 mb-1">Interactive Zoom</h4>
                <p className="text-xs text-gray-600">Drill down into data clusters</p>
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
            <Link href="/charts/area" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-2xl mb-2">📈</div>
                <div className="text-sm font-medium">Area Chart</div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
