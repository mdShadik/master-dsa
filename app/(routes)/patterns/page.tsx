import Link from 'next/link'
import { 
  BookOpen, 
  Target, 
  TrendingUp, 
  Users, 
  ChevronRight, 
  Code, 
  Brain, 
  Trophy, 
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Filter,
  Search,
  BarChart3,
  GitBranch,
  Layers,
  Shuffle,
  Grid,
  Move,
  Compass,
  Activity
} from 'lucide-react'

type CategoryColor = 'blue' | 'green' | 'purple' | 'orange' | 'red'


export default function PatternsPage() {
  const patternCategories = [
    {
      category: "Array & String Patterns",
      icon: Grid,
      color: "blue",
      patterns: [
        {
          name: "Two Pointers",
          difficulty: "Easy",
          problems: 25,
          description: "Use two pointers to solve problems efficiently",
          keyPoints: ["Sorted arrays", "Palindromes", "Pair finding"],
          companies: ["Google", "Amazon", "Microsoft"]
        },
        {
          name: "Sliding Window",
          difficulty: "Medium",
          problems: 20,
          description: "Maintain a window of elements to find optimal solutions",
          keyPoints: ["Subarray problems", "Fixed/Variable window", "Optimization"],
          companies: ["Facebook", "Apple", "Netflix"]
        },
        {
          name: "Fast & Slow Pointers",
          difficulty: "Medium",
          problems: 15,
          description: "Detect cycles and find middle elements",
          keyPoints: ["Cycle detection", "Linked lists", "Array problems"],
          companies: ["LinkedIn", "Uber", "Twitter"]
        },
        {
          name: "Merge Intervals",
          difficulty: "Medium",
          problems: 12,
          description: "Merge overlapping intervals efficiently",
          keyPoints: ["Interval scheduling", "Overlap detection", "Sorting"],
          companies: ["Google", "Amazon", "Microsoft"]
        }
      ]
    },
    {
      category: "Tree & Graph Patterns",
      icon: GitBranch,
      color: "green",
      patterns: [
        {
          name: "Tree Traversal",
          difficulty: "Easy",
          problems: 30,
          description: "Navigate trees using DFS and BFS techniques",
          keyPoints: ["Inorder/Preorder/Postorder", "Level order", "Path problems"],
          companies: ["Google", "Facebook", "Amazon"]
        },
        {
          name: "Binary Search Tree",
          difficulty: "Medium",
          problems: 18,
          description: "Leverage BST properties for efficient solutions",
          keyPoints: ["Validation", "Construction", "Optimization"],
          companies: ["Microsoft", "Apple", "Salesforce"]
        },
        {
          name: "Graph Traversal",
          difficulty: "Medium",
          problems: 22,
          description: "Explore graphs using DFS and BFS",
          keyPoints: ["Connected components", "Path finding", "Cycle detection"],
          companies: ["Amazon", "Google", "Facebook"]
        },
        {
          name: "Topological Sort",
          difficulty: "Hard",
          problems: 10,
          description: "Order elements based on dependencies",
          keyPoints: ["Course scheduling", "Build systems", "Dependency resolution"],
          companies: ["Google", "Microsoft", "Uber"]
        }
      ]
    },
    {
      category: "Dynamic Programming",
      icon: BarChart3,
      color: "purple",
      patterns: [
        {
          name: "Linear DP",
          difficulty: "Medium",
          problems: 25,
          description: "Solve problems with linear recurrence relations",
          keyPoints: ["1D problems", "Fibonacci variants", "Optimization"],
          companies: ["Google", "Amazon", "Microsoft"]
        },
        {
          name: "2D DP",
          difficulty: "Hard",
          problems: 20,
          description: "Handle 2D grid and matrix problems",
          keyPoints: ["Grid traversal", "String matching", "Path counting"],
          companies: ["Facebook", "Google", "Amazon"]
        },
        {
          name: "Knapsack Variants",
          difficulty: "Hard",
          problems: 15,
          description: "Optimize resource allocation problems",
          keyPoints: ["0/1 Knapsack", "Unbounded", "Multi-dimensional"],
          companies: ["Amazon", "Microsoft", "Google"]
        },
        {
          name: "Longest Common Subsequence",
          difficulty: "Medium",
          problems: 12,
          description: "Find optimal subsequences and substrings",
          keyPoints: ["String problems", "Edit distance", "Alignment"],
          companies: ["Google", "Facebook", "Amazon"]
        }
      ]
    },
    {
      category: "Searching & Sorting",
      icon: Search,
      color: "orange",
      patterns: [
        {
          name: "Binary Search",
          difficulty: "Easy",
          problems: 20,
          description: "Efficiently search in sorted arrays",
          keyPoints: ["Search space", "Rotated arrays", "Peak finding"],
          companies: ["Google", "Amazon", "Microsoft"]
        },
        {
          name: "Modified Binary Search",
          difficulty: "Medium",
          problems: 18,
          description: "Adapt binary search for complex scenarios",
          keyPoints: ["Search in rotated arrays", "Find boundaries", "2D search"],
          companies: ["Facebook", "Google", "Amazon"]
        },
        {
          name: "Sorting Algorithms",
          difficulty: "Easy",
          problems: 15,
          description: "Implement and optimize sorting techniques",
          keyPoints: ["Quick sort", "Merge sort", "Custom comparators"],
          companies: ["Microsoft", "Apple", "Google"]
        }
      ]
    },
    {
      category: "Advanced Patterns",
      icon: Zap,
      color: "red",
      patterns: [
        {
          name: "Backtracking",
          difficulty: "Hard",
          problems: 25,
          description: "Explore all possible solutions systematically",
          keyPoints: ["Permutations", "Combinations", "Constraint satisfaction"],
          companies: ["Google", "Facebook", "Amazon"]
        },
        {
          name: "Greedy Algorithms",
          difficulty: "Medium",
          problems: 18,
          description: "Make locally optimal choices",
          keyPoints: ["Activity selection", "Huffman coding", "Minimum spanning tree"],
          companies: ["Amazon", "Microsoft", "Google"]
        },
        {
          name: "Bit Manipulation",
          difficulty: "Medium",
          problems: 15,
          description: "Solve problems using bitwise operations",
          keyPoints: ["XOR properties", "Bit masking", "Power of 2"],
          companies: ["Google", "Facebook", "Amazon"]
        },
        {
          name: "Union Find",
          difficulty: "Hard",
          problems: 12,
          description: "Efficiently handle disjoint set operations",
          keyPoints: ["Connected components", "Cycle detection", "Path compression"],
          companies: ["Google", "Amazon", "Facebook"]
        }
      ]
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-50'
      case 'Medium': return 'text-yellow-600 bg-yellow-50'
      case 'Hard': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }


  const getCategoryColor = (color: string): string => {
    const colors: Record<CategoryColor, string> = {
      blue: 'text-blue-600 bg-blue-50',
      green: 'text-green-600 bg-green-50',
      purple: 'text-purple-600 bg-purple-50',
      orange: 'text-orange-600 bg-orange-50',
      red: 'text-red-600 bg-red-50',
    }
  
    // Use fallback if color is not in the allowed set
    if (color in colors) {
      return colors[color as CategoryColor]
    }
  
    return colors.blue
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">49+ Essential Patterns</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Learn the fundamental patterns that solve 90% of coding interview problems. 
            Each pattern includes detailed explanations, key insights, and real company problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/questions" className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Practice Problems
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/roadmap" className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
              View Learning Path
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <Target className="h-10 w-10 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">49+</div>
            <div className="text-gray-600">Essential Patterns</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <BookOpen className="h-10 w-10 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Practice Problems</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <Trophy className="h-10 w-10 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
            <div className="text-gray-600">Top Companies</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <TrendingUp className="h-10 w-10 text-orange-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">90%</div>
            <div className="text-gray-600">Problem Coverage</div>
          </div>
        </div>
      </section>

      {/* Patterns Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {patternCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              {/* Category Header */}
              <div className="text-center">
                <div className={`inline-flex items-center px-4 py-2 rounded-full ${getCategoryColor(category.color)} mb-4`}>
                  <category.icon className="h-5 w-5 mr-2" />
                  <span className="font-semibold">{category.category}</span>
                </div>
              </div>

              {/* Patterns Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.patterns.map((pattern, patternIndex) => (
                  <div key={patternIndex} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div className="p-6">
                      {/* Pattern Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{pattern.name}</h3>
                          <p className="text-gray-600 text-sm">{pattern.description}</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(pattern.difficulty)}`}>
                          {pattern.difficulty}
                        </div>
                      </div>

                      {/* Key Points */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Concepts:</h4>
                        <div className="flex flex-wrap gap-2">
                          {pattern.keyPoints.map((point, pointIndex) => (
                            <span key={pointIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                              {point}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Companies */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Asked by:</h4>
                        <div className="flex flex-wrap gap-2">
                          {pattern.companies.map((company, companyIndex) => (
                            <span key={companyIndex} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                              {company}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center text-sm text-gray-600">
                          <BookOpen className="h-4 w-4 mr-1" />
                          {pattern.problems} problems
                        </div>
                        <Link href={`/patterns/${pattern.name.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm">
                          Learn Pattern
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Tips Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Master These Patterns</h2>
            <p className="text-xl opacity-90">Follow our proven approach to pattern mastery</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center font-bold mr-3">1</div>
                <h3 className="text-xl font-bold">Understand the Pattern</h3>
              </div>
              <p className="text-blue-100">Study the core technique and identify when to apply it. Learn the underlying principles and common variations.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center font-bold mr-3">2</div>
                <h3 className="text-xl font-bold">Practice Systematically</h3>
              </div>
              <p className="text-blue-100">Start with easy problems and gradually increase difficulty. Focus on implementation details and edge cases.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center font-bold mr-3">3</div>
                <h3 className="text-xl font-bold">Apply to New Problems</h3>
              </div>
              <p className="text-blue-100">Test your understanding by solving variations and mixed problems. Build pattern recognition skills through repetition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Master These Patterns?</h2>
          <p className="text-xl text-gray-600 mb-8">Start with our curated problem sets and structured learning path</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/questions" className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Start Practicing
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/roadmap" className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
              View Roadmap
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