import Link from 'next/link'
import { ArrowLeft, BookOpen, Code, Calculator, TrendingUp, ChevronRight, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card'
import { Button } from '@/app/components/ui/button'

export default function PrerequisitesPage() {
  const prerequisites = [
    {
      category: "Programming Fundamentals",
      icon: Code,
      color: "blue",
      items: [
        {
          title: "Programming Language Mastery",
          description: "Strong command of at least one language (C++, Java, or Python recommended)",
          topics: ["Basic syntax and data types", "Control structures (loops, conditionals)", "Functions and recursion", "Object-oriented programming concepts"],
          importance: "Critical"
        },
        {
          title: "Complexity Analysis",
          description: "Understanding time and space complexity using Big O notation",
          topics: ["Big O, Omega, and Theta notations", "Best, average, and worst-case analysis", "Space-time tradeoffs", "Amortized analysis"],
          importance: "Critical"
        }
      ]
    },
    {
      category: "Mathematical Concepts",
      icon: Calculator,
      color: "green",
      items: [
        {
          title: "Essential Mathematics",
          description: "Core mathematical concepts used in algorithmic problem solving",
          topics: ["Arithmetic and algebra", "Logarithms and exponentials", "Modular arithmetic", "Basic probability and combinatorics"],
          importance: "Important"
        },
        {
          title: "Discrete Mathematics",
          description: "Mathematical structures and concepts for computer science",
          topics: ["Set theory", "Graph theory basics", "Logic and proofs", "Number theory fundamentals"],
          importance: "Helpful"
        }
      ]
    }
  ]

  const algorithms = [
    {
      category: "Sorting Algorithms",
      description: "Fundamental sorting techniques you must know",
      algorithms: [
        { name: "Bubble Sort", complexity: "O(n²)", type: "Basic" },
        { name: "Selection Sort", complexity: "O(n²)", type: "Basic" },
        { name: "Insertion Sort", complexity: "O(n²)", type: "Basic" },
        { name: "Merge Sort", complexity: "O(n log n)", type: "Advanced" },
        { name: "Quick Sort", complexity: "O(n log n)", type: "Advanced" },
        { name: "Heap Sort", complexity: "O(n log n)", type: "Advanced" }
      ],
      link: "/algorithms/sorting"
    },
    {
      category: "Searching Algorithms",
      description: "Essential search techniques and their applications",
      algorithms: [
        { name: "Linear Search", complexity: "O(n)", type: "Basic" },
        { name: "Binary Search", complexity: "O(log n)", type: "Advanced" },
        { name: "Ternary Search", complexity: "O(log n)", type: "Advanced" },
        { name: "Exponential Search", complexity: "O(log n)", type: "Advanced" }
      ],
      link: "/algorithms/searching"
    },
    {
      category: "Graph Algorithms",
      description: "Core graph traversal and shortest path algorithms",
      algorithms: [
        { name: "Breadth-First Search (BFS)", complexity: "O(V + E)", type: "Basic" },
        { name: "Depth-First Search (DFS)", complexity: "O(V + E)", type: "Basic" },
        { name: "Dijkstra's Algorithm", complexity: "O(V²)", type: "Advanced" },
        { name: "Floyd-Warshall", complexity: "O(V³)", type: "Advanced" }
      ],
      link: "/algorithms/graph-algorithms"
    },
    {
      category: "Dynamic Programming",
      description: "Optimization technique for overlapping subproblems",
      algorithms: [
        { name: "Fibonacci Sequence", complexity: "O(n)", type: "Basic" },
        { name: "Longest Common Subsequence", complexity: "O(mn)", type: "Advanced" },
        { name: "Knapsack Problem", complexity: "O(nW)", type: "Advanced" },
        { name: "Edit Distance", complexity: "O(mn)", type: "Advanced" }
      ],
      link: "/algorithms/dynamic-programming"
    }
  ]

  const learningPath = [
    {
      step: "1",
      title: "Master Your Programming Language",
      duration: "1-2 weeks",
      description: "Become fluent in syntax, built-in functions, and standard libraries"
    },
    {
      step: "2",
      title: "Learn Complexity Analysis",
      duration: "1 week",
      description: "Understand how to analyze and optimize algorithm performance"
    },
    {
      step: "3",
      title: "Study Essential Algorithms",
      duration: "2-3 weeks",
      description: "Master fundamental sorting, searching, and graph algorithms"
    },
    {
      step: "4",
      title: "Practice Implementation",
      duration: "1-2 weeks",
      description: "Code algorithms from scratch without looking at references"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <BookOpen className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Prerequisites for DSA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master these fundamentals before diving into Data Structures and Algorithms. 
            A strong foundation will make your DSA journey much smoother.
          </p>
        </div>

        {/* Prerequisites Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Prerequisites</h2>
          <div className="space-y-8">
            {prerequisites.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-6">
                  <category.icon className={`h-8 w-8 text-${category.color}-600 mr-3`} />
                  <h3 className="text-2xl font-semibold text-gray-900">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            item.importance === 'Critical' ? 'bg-red-100 text-red-800' :
                            item.importance === 'Important' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {item.importance}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {item.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Essential Algorithms */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Algorithms</h2>
          <p className="text-gray-600 mb-8">
            These algorithms form the foundation of most DSA problems. Master them before proceeding.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {algorithms.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-slate-900 justify-between">
                    {category.category}
                    <Link href={category.link}>
                      <Button variant="ghost" size="sm">
                        Learn More <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.algorithms.map((algo, algoIndex) => (
                      <div key={algoIndex} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                        <div>
                          <span className="font-medium text-gray-900">{algo.name}</span>
                          <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                            algo.type === 'Basic' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                          }`}>
                            {algo.type}
                          </span>
                        </div>
                        <span className="text-sm font-mono text-gray-600">{algo.complexity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Learning Path */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recommended Learning Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPath.map((step, stepIndex) => (
              <Card key={stepIndex} className="text-center text-slate-600 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <p className="text-sm text-blue-600 font-semibold">{step.duration}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Action Section */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <TrendingUp className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your DSA Journey?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Once you've mastered these prerequisites, you'll be ready to tackle our comprehensive DSA curriculum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/patterns">
              <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Explore Patterns
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/questions">
              <Button variant="outline" size="lg" className="border-white hover:bg-white/10 hover:text-white">
                Start with Questions
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}