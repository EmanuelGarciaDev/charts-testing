import React from 'react'
import Link from 'next/link'
import AnimatedRadarChart from '../../components/charts/AnimatedRadarChart'
import { skillsData, productComparisonData, employeeSkillsData, financialMetricsData } from '../../data/sampleData'

export default function RadarChartPage() {
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
          <h1 className="page-header">Radar Chart Examples</h1>
          <p className="page-subtitle">
            Perfect for multi-dimensional comparisons, performance profiles, and showing strengths/weaknesses across multiple criteria
          </p>
        </div>

        <div className="space-y-12">
          {/* Skills Assessment */}
          <AnimatedRadarChart
            data={skillsData}
            title="💻 Developer Skills Assessment"
            description="Compare programming language proficiency across different technologies for skill gap analysis"
            dataKeys={['A', 'B']}
            colors={['#3b82f6', '#10b981']}
            maxValue={150}
          />

          {/* Product Comparison */}
          <AnimatedRadarChart
            data={productComparisonData}
            title="📱 Product Feature Comparison"
            description="Evaluate and compare product features across multiple dimensions to guide decision-making"
            dataKeys={['Product A', 'Product B', 'Product C']}
            colors={['#8b5cf6', '#f59e0b', '#ef4444']}
            maxValue={100}
          />

          {/* Employee Performance */}
          <AnimatedRadarChart
            data={employeeSkillsData}
            title="👥 Employee Performance Review"
            description="Assess employee competencies across key performance areas for development planning"
            dataKeys={['John Doe', 'Jane Smith', 'Mike Johnson']}
            colors={['#06b6d4', '#10b981', '#f97316']}
            maxValue={100}
          />

          {/* Financial Analysis */}
          <AnimatedRadarChart
            data={financialMetricsData}
            title="📊 Financial Performance Analysis"
            description="Compare company financial health across multiple metrics versus industry benchmarks"
            dataKeys={['Company A', 'Company B', 'Industry Avg']}
            colors={['#3b82f6', '#ef4444', '#6b7280']}
            maxValue={100}
          />
        </div>

        {/* Comprehensive Guide Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 Radar Chart Complete Guide</h2>
          
          {/* Understanding Radar Charts */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">🎯 Understanding Radar Charts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">📊 Structure & Components</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• <strong>Spokes:</strong> Each variable/dimension radiating from center</li>
                  <li>• <strong>Scales:</strong> Concentric circles showing value ranges</li>
                  <li>• <strong>Data Points:</strong> Connected to form polygon shapes</li>
                  <li>• <strong>Center:</strong> Represents zero or minimum value</li>
                  <li>• <strong>Outer Edge:</strong> Maximum value for each dimension</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">🔍 What They Reveal</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• <strong>Shape Pattern:</strong> Overall performance profile</li>
                  <li>• <strong>Area Size:</strong> Total performance magnitude</li>
                  <li>• <strong>Balance:</strong> Even vs uneven skill distribution</li>
                  <li>• <strong>Gaps:</strong> Areas needing improvement</li>
                  <li>• <strong>Strengths:</strong> Dimensions with high scores</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Real-World Applications */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">🌍 Real-World Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-900 mb-2">🏢 Business Strategy</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Competitor analysis across multiple factors</li>
                  <li>• SWOT analysis visualization</li>
                  <li>• Market positioning assessment</li>
                  <li>• Brand attribute comparison</li>
                  <li>• Strategic capability evaluation</li>
                </ul>
              </div>
              <div className="p-4 bg-cyan-50 rounded-lg">
                <h4 className="font-medium text-cyan-900 mb-2">👥 Human Resources</h4>
                <ul className="text-sm text-cyan-700 space-y-1">
                  <li>• Employee performance reviews</li>
                  <li>• Skill gap analysis</li>
                  <li>• Team competency mapping</li>
                  <li>• Leadership assessment</li>
                  <li>• Training needs identification</li>
                </ul>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-medium text-orange-900 mb-2">📈 Quality Assessment</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Product feature comparison</li>
                  <li>• Service quality metrics</li>
                  <li>• Customer satisfaction dimensions</li>
                  <li>• Process improvement tracking</li>
                  <li>• Vendor evaluation criteria</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">🎓 Education</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Student skill assessment</li>
                  <li>• Curriculum effectiveness</li>
                  <li>• Learning outcome measurement</li>
                  <li>• Program comparison</li>
                  <li>• Academic performance profiling</li>
                </ul>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-medium text-red-900 mb-2">💰 Finance</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Financial health assessment</li>
                  <li>• Investment portfolio analysis</li>
                  <li>• Risk profile comparison</li>
                  <li>• Performance benchmarking</li>
                  <li>• Credit rating factors</li>
                </ul>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-medium text-yellow-900 mb-2">🔬 Research</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Survey data visualization</li>
                  <li>• Multi-variable comparisons</li>
                  <li>• Experimental results</li>
                  <li>• Behavioral pattern analysis</li>
                  <li>• Treatment effectiveness</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Design Guidelines */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">🎨 Design Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">📏 Scale Considerations</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Use consistent scales across all dimensions</li>
                  <li>• Start from zero to avoid distorted comparisons</li>
                  <li>• Consider log scales for wide value ranges</li>
                  <li>• Normalize different units to same scale</li>
                  <li>• Label scale increments clearly</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">🎯 Variable Selection</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Limit to 5-8 variables for readability</li>
                  <li>• Choose independent, meaningful dimensions</li>
                  <li>• Ensure variables have similar importance</li>
                  <li>• Order variables logically around the circle</li>
                  <li>• Use clear, descriptive variable names</li>
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
                  Keep the number of variables manageable (5-8)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Use consistent scales across all dimensions
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Choose distinct colors for multiple data series
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Include a legend and clear axis labels
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Order variables logically (grouped by theme)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Provide context and explanation for interpretation
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-red-700 mb-3">❌ Common Mistakes</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Using too many variables (creates visual clutter)
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Inconsistent scales across different dimensions
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Similar colors making comparisons difficult
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Random ordering of variables around the circle
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Not starting scales from zero (distorts shapes)
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Assuming larger area always means better performance
                </li>
              </ul>
            </div>
          </div>

          {/* Interpretation Guide */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">📖 How to Read Radar Charts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-900 mb-2">🔍 Shape Analysis</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• <strong>Circular:</strong> Balanced performance</li>
                  <li>• <strong>Spiky:</strong> Uneven, specialized strengths</li>
                  <li>• <strong>Flat:</strong> Consistently low performance</li>
                  <li>• <strong>Distorted:</strong> Mixed performance levels</li>
                </ul>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-medium text-orange-900 mb-2">📏 Size Comparison</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• <strong>Larger Area:</strong> Higher overall performance</li>
                  <li>• <strong>Smaller Area:</strong> Room for improvement</li>
                  <li>• <strong>Overlapping:</strong> Similar performance levels</li>
                  <li>• <strong>Distance from Center:</strong> Individual dimension strength</li>
                </ul>
              </div>
              <div className="p-4 bg-cyan-50 rounded-lg">
                <h4 className="font-medium text-cyan-900 mb-2">🎯 Strategic Insights</h4>
                <ul className="text-sm text-cyan-700 space-y-1">
                  <li>• <strong>Gaps:</strong> Areas for development</li>
                  <li>• <strong>Strengths:</strong> Competitive advantages</li>
                  <li>• <strong>Balance:</strong> Risk vs opportunity</li>
                  <li>• <strong>Patterns:</strong> Performance trends</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Alternative Visualizations */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🔄 Alternative Visualizations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-2xl mb-2">📊</div>
                <h4 className="font-medium text-gray-900 mb-1">Parallel Coordinates</h4>
                <p className="text-xs text-gray-600">Multiple variables on parallel axes</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-medium text-gray-900 mb-1">Star Plot</h4>
                <p className="text-xs text-gray-600">Similar to radar but with rays</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-2xl mb-2">📈</div>
                <h4 className="font-medium text-gray-900 mb-1">Multi-axis Chart</h4>
                <p className="text-xs text-gray-600">Multiple Y-axes on single plot</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-2xl mb-2">🔥</div>
                <h4 className="font-medium text-gray-900 mb-1">Heatmap Matrix</h4>
                <p className="text-xs text-gray-600">Grid-based comparison</p>
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
