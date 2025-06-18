import Link from 'next/link'
import { BookOpen, Target, TrendingUp, Users, ChevronRight, Code, Brain, Trophy, Clock } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">DSA Master</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/prerequisites" className="text-gray-600 hover:text-blue-600 transition-colors">
                Prerequisites
              </Link>
              <Link href="/patterns" className="text-gray-600 hover:text-blue-600 transition-colors">
                Patterns
              </Link>
              <Link href="/questions" className="text-gray-600 hover:text-blue-600 transition-colors">
                Questions
              </Link>
              <Link href="/roadmap" className="text-gray-600 hover:text-blue-600 transition-colors">
                Roadmap
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Data Structures</span>
            <br />& Algorithms
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your complete guide to cracking product-based company interviews. 
            Learn 49+ patterns, solve 500+ curated problems, and land your dream job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/questions" className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Start Learning
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/prerequisites" className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
              View Prerequisites
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: BookOpen, number: '500+', label: 'Curated Problems' },
            { icon: Target, number: '49+', label: 'Patterns to Master' },
            { icon: TrendingUp, number: '6', label: 'Data Structures' },
            { icon: Users, number: '100+', label: 'Top Companies' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <stat.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose DSA Master?</h2>
          <p className="text-xl text-gray-600">Everything you need to ace your technical interviews</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: 'Pattern-Based Learning',
              description: 'Master 49+ essential patterns that appear in 90% of interview questions. Learn once, apply everywhere.'
            },
            {
              icon: Trophy,
              title: 'Company-Focused',
              description: 'Questions from Google, Amazon, Microsoft, Facebook and 100+ top tech companies. Real interview experiences.'
            },
            {
              icon: Clock,
              title: 'Structured Timeline',
              description: '3-4 month roadmap with daily goals. From beginner to interview-ready in a systematic approach.'
            }
          ].map((feature, index) => (
            <div key={index} className="p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <feature.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">Your Learning Journey</h2>
            <p className="text-xl opacity-90">Follow our proven 4-phase approach</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { phase: 'Phase 1', title: 'Foundation', duration: '4 weeks', topics: ['Arrays', 'Strings', 'Two Pointers', 'Sliding Window'] },
              { phase: 'Phase 2', title: 'Data Structures', duration: '4 weeks', topics: ['Linked Lists', 'Stacks', 'Queues', 'Trees'] },
              { phase: 'Phase 3', title: 'Advanced', duration: '4 weeks', topics: ['Graphs', 'Dynamic Programming', 'Advanced Trees'] },
              { phase: 'Phase 4', title: 'Interview Prep', duration: '4 weeks', topics: ['Mock Interviews', 'Company Problems', 'System Design'] }
            ].map((phase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <div className="text-sm font-semibold text-blue-200 mb-2">{phase.phase}</div>
                <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                <div className="text-sm text-blue-200 mb-4">{phase.duration}</div>
                <ul className="space-y-1 text-sm">
                  {phase.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-200 rounded-full mr-2"></div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of successful candidates who landed their dream jobs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/prerequisites" className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Check Prerequisites
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/questions" className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
              Browse Questions
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold">DSA Master</span>
              </div>
              <p className="text-gray-400">Your complete guide to mastering Data Structures and Algorithms for technical interviews.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Learning</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/prerequisites" className="hover:text-white transition-colors">Prerequisites</Link></li>
                <li><Link href="/patterns" className="hover:text-white transition-colors">Patterns</Link></li>
                <li><Link href="/questions" className="hover:text-white transition-colors">Questions</Link></li>
                <li><Link href="/roadmap" className="hover:text-white transition-colors">Roadmap</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Topics</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/topics/arrays" className="hover:text-white transition-colors">Arrays</Link></li>
                <li><Link href="/topics/strings" className="hover:text-white transition-colors">Strings</Link></li>
                <li><Link href="/topics/trees" className="hover:text-white transition-colors">Trees</Link></li>
                <li><Link href="/topics/graphs" className="hover:text-white transition-colors">Graphs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/algorithms/sorting" className="hover:text-white transition-colors">Sorting</Link></li>
                <li><Link href="/algorithms/searching" className="hover:text-white transition-colors">Searching</Link></li>
                <li><Link href="/algorithms/graph-algorithms" className="hover:text-white transition-colors">Graph Algorithms</Link></li>
                <li><Link href="/algorithms/dynamic-programming" className="hover:text-white transition-colors">Dynamic Programming</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DSA Master. Built for aspiring software engineers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}