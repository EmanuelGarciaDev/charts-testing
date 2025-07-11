import { useState, useEffect } from 'react'
import Link from 'next/link'

const chartTypes = [
  {
    id: 'line',
    name: 'Line Chart',
    description: 'Perfect for showing trends over time',
    color: 'bg-blue-500',
    href: '/charts/line'
  },
  {
    id: 'bar',
    name: 'Bar Chart',
    description: 'Great for comparing categories',
    color: 'bg-green-500',
    href: '/charts/bar'
  },
  {
    id: 'pie',
    name: 'Pie Chart',
    description: 'Ideal for showing proportions',
    color: 'bg-purple-500',
    href: '/charts/pie'
  },
  {
    id: 'area',
    name: 'Area Chart',
    description: 'Excellent for cumulative data',
    color: 'bg-orange-500',
    href: '/charts/area'
  },
  {
    id: 'scatter',
    name: 'Scatter Plot',
    description: 'Best for correlation analysis',
    color: 'bg-red-500',
    href: '/charts/scatter'
  },
  {
    id: 'radar',
    name: 'Radar Chart',
    description: 'Multi-dimensional comparisons',
    color: 'bg-indigo-500',
    href: '/charts/radar'
  }
]

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Simple CSS animations instead of anime.js for now
    const heroTitle = document.querySelector('.hero-title')
    const heroSubtitle = document.querySelector('.hero-subtitle')
    const chartCards = document.querySelectorAll('.chart-card')
    
    if (heroTitle) {
      setTimeout(() => heroTitle.classList.add('animate-slide-up'), 100)
    }
    if (heroSubtitle) {
      setTimeout(() => heroSubtitle.classList.add('animate-slide-up'), 300)
    }
    chartCards.forEach((card, index) => {
      setTimeout(() => card.classList.add('animate-slide-up'), 500 + index * 100)
    })
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="hero-title page-header opacity-0">
            📊 Charts Testing & Animation Showcase
          </h1>
          <p className="hero-subtitle page-subtitle opacity-0">
            Explore beautiful, animated charts with real-world data examples
          </p>
        </div>
      </header>

      {/* Chart Grid */}
      <main className="container mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chartTypes.map((chart) => (
            <Link key={chart.id} href={chart.href}>
              <div className="chart-card chart-container opacity-0 cursor-pointer group">
                <div className={`w-12 h-12 ${chart.color} rounded-lg mb-4 flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform duration-200`}>
                  📈
                </div>
                <h3 className="chart-title group-hover:text-blue-600 transition-colors">
                  {chart.name}
                </h3>
                <p className="chart-description">
                  {chart.description}
                </p>
                <div className="flex items-center text-sm text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-200">
                  Explore →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-12">✨ Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🎨
              </div>
              <h3 className="text-lg font-semibold mb-2">Beautiful Animations</h3>
              <p className="text-gray-600">Smooth, engaging animations powered by anime.js</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                📊
              </div>
              <h3 className="text-lg font-semibold mb-2">Comprehensive Charts</h3>
              <p className="text-gray-600">Every chart type with real-world data examples</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🎓
              </div>
              <h3 className="text-lg font-semibold mb-2">Educational</h3>
              <p className="text-gray-600">Learn when and how to use each chart type</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
