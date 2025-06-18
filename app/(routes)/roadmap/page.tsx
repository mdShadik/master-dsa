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
  Calendar,
  PlayCircle,
  Award,
  Lightbulb,
  FileText,
  GitBranch,
  Layers,
  Database,
  Search,
  BarChart3,
  MapPin,
  Route,
  Flag
} from 'lucide-react'

type PhaseColor = 'blue' | 'green' | 'purple' | 'orange'


export default function RoadmapPage() {
  const roadmapPhases = [
    {
      phase: 1,
      title: "Foundation Building",
      duration: "4 weeks",
      description: "Master the fundamentals of programming and basic data structures",
      color: "blue",
      icon: BookOpen,
      status: "start",
      topics: [
        {
          week: 1,
          title: "Programming Fundamentals",
          items: [
            "Time & Space Complexity Analysis",
            "Big O Notation",
            "Basic Input/Output",
            "Debugging Techniques"
          ]
        },
        {
          week: 2,
          title: "Arrays & Strings",
          items: [
            "Array manipulation",
            "String operations",
            "Two Pointers technique",
            "Prefix sum arrays"
          ]
        },
        {
          week: 3,
          title: "Sorting & Searching",
          items: [
            "Bubble, Selection, Insertion Sort",
            "Merge Sort & Quick Sort",
            "Binary Search",
            "Linear Search variations"
          ]
        },
        {
          week: 4,
          title: "Sliding Window",
          items: [
            "Fixed window problems",
            "Variable window problems",
            "Subarray problems",
            "String matching"
          ]
        }
      ],
      problems: 75,
      difficulty: "Easy to Medium"
    },
    {
      phase: 2,
      title: "Data Structures Mastery",
      duration: "4 weeks",
      description: "Learn essential data structures and their applications",
      color: "green",
      icon: Database,
      status: "progress",
      topics: [
        {
          week: 5,
          title: "Linked Lists",
          items: [
            "Singly & Doubly Linked Lists",
            "Cycle detection",
            "Reversal techniques",
            "Merge operations"
          ]
        },
        {
          week: 6,
          title: "Stacks & Queues",
          items: [
            "Stack operations & applications",
            "Queue implementations",
            "Monotonic stack",
            "Deque operations"
          ]
        },
        {
          week: 7,
          title: "Trees - Basics",
          items: [
            "Binary tree traversals",
            "Tree construction",
            "Path problems",
            "Level order traversal"
          ]
        },
        {
          week: 8,
          title: "Binary Search Trees",
          items: [
            "BST properties",
            "Insertion & deletion",
            "Validation",
            "Balanced BST"
          ]
        }
      ],
      problems: 80,
      difficulty: "Medium"
    },
    {
      phase: 3,
      title: "Advanced Algorithms",
      duration: "4 weeks",
      description: "Master complex algorithms and problem-solving techniques",
      color: "purple",
      icon: Brain,
      status: "upcoming",
      topics: [
        {
          week: 9,
          title: "Advanced Trees",
          items: [
            "Trie data structure",
            "Segment trees",
            "Heap operations",
            "Tree diameter problems"
          ]
        },
        {
          week: 10,
          title: "Graph Algorithms",
          items: [
            "Graph representation",
            "DFS & BFS",
            "Shortest path algorithms",
            "Topological sorting"
          ]
        },
        {
          week: 11,
          title: "Dynamic Programming - I",
          items: [
            "1D DP problems",
            "Fibonacci variants",
            "Climbing stairs",
            "House robber"
          ]
        },
        {
          week: 12,
          title: "Dynamic Programming - II",
          items: [
            "2D DP problems",
            "Knapsack variants",
            "Longest common subsequence",
            "Edit distance"
          ]
        }
      ],
      problems: 100,
      difficulty: "Medium to Hard"
    },
    {
      phase: 4,
      title: "Interview Preparation",
      duration: "4 weeks",
      description: "Practice mixed problems and prepare for real interviews",
      color: "orange",
      icon: Trophy,
      status: "upcoming",
      topics: [
        {
          week: 13,
          title: "Advanced Patterns",
          items: [
            "Backtracking",
            "Greedy algorithms",
            "Bit manipulation",
            "Union-Find"
          ]
        },
        {
          week: 14,
          title: "Company-Specific Practice",
          items: [
            "Google-style problems",
            "Amazon interview questions",
            "Microsoft coding rounds",
            "Facebook algorithm questions"
          ]
        },
        {
          week: 15,
          title: "Mock Interviews",
          items: [
            "Timed problem solving",
            "Code review practice",
            "Communication skills",
            "Optimization techniques"
          ]
        },
        {
          week: 16,
          title: "System Design Basics",
          items: [
            "Scalability concepts",
            "Database design",
            "API design",
            "Caching strategies"
          ]
        }
      ],
      problems: 120,
      difficulty: "Hard"
    }
  ]

  const phaseColors: Record<PhaseColor, string> = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
  }
  
  const phaseColorsLight: Record<PhaseColor, string> = {
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    green: 'bg-green-50 text-green-700 border-green-200',
    purple: 'bg-purple-50 text-purple-700 border-purple-200',
    orange: 'bg-orange-50 text-orange-700 border-orange-200',
  }
  
  const isValidPhaseColor = (color: string): color is PhaseColor => {
    return ['blue', 'green', 'purple', 'orange'].includes(color)
  }
  
  const getPhaseColor = (color: string) => {
    return isValidPhaseColor(color) ? phaseColors[color] : phaseColors.blue
  }
  
  const getPhaseColorLight = (color: string) => {
    return isValidPhaseColor(color) ? phaseColorsLight[color] : phaseColorsLight.blue
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'start': return Flag
      case 'progress': return PlayCircle
      case 'upcoming': return MapPin
      default: return Clock
    }
  }

  const milestones = [
    {
      week: 4,
      title: "Foundation Complete",
      description: "Mastered basic data structures and algorithms",
      icon: CheckCircle,
      color: "green"
    },
    {
      week: 8,
      title: "Data Structures Expert",
      description: "Proficient in all major data structures",
      icon: Database,
      color: "blue"
    },
    {
      week: 12,
      title: "Algorithm Master",
      description: "Solved complex algorithmic problems",
      icon: Brain,
      color: "purple"
    },
    {
      week: 16,
      title: "Interview Ready",
      description: "Ready for technical interviews at top companies",
      icon: Trophy,
      color: "orange"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Learning Roadmap</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A structured 16-week journey from beginner to interview-ready. 
            Follow our proven path used by 10,000+ successful candidates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/questions" className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/prerequisites" className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
              Check Prerequisites
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">16-Week Timeline</h2>
          <p className="text-xl text-gray-600">Structured learning path with clear milestones</p>
        </div>

        {/* Progress Bar */}
        <div className="relative mb-16">
          <div className="flex justify-between items-center">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getPhaseColor(milestone.color)} text-white mb-2`}>
                  <milestone.icon className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900 text-sm">{milestone.title}</div>
                  <div className="text-xs text-gray-600">Week {milestone.week}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-6 left-6 right-6 h-0.5 bg-gray-200 -z-10"></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <Calendar className="h-10 w-10 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">16</div>
            <div className="text-gray-600">Weeks</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <BookOpen className="h-10 w-10 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">375</div>
            <div className="text-gray-600">Total Problems</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <Target className="h-10 w-10 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">49+</div>
            <div className="text-gray-600">Patterns</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <Trophy className="h-10 w-10 text-orange-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
            <div className="text-gray-600">Companies</div>
          </div>
        </div>
      </section>

      {/* Detailed Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {roadmapPhases.map((phase, index) => {
            const StatusIcon = getStatusIcon(phase.status)
            return (
              <div key={index} className="relative">
                {/* Phase Header */}
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 rounded-full ${getPhaseColor(phase.color)} flex items-center justify-center text-white mr-6`}>
                    <phase.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-gray-900">Phase {phase.phase}: {phase.title}</h2>
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getPhaseColorLight(phase.color)}`}>
                        {phase.duration}
                      </div>
                      <StatusIcon className="h-5 w-5 text-gray-500" />
                    </div>
                    <p className="text-gray-600">{phase.description}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span>{phase.problems} problems</span>
                      <span>•</span>
                      <span>{phase.difficulty}</span>
                    </div>
                  </div>
                </div>

                {/* Weekly Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-22">
                  {phase.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Week {topic.week}</h3>
                        <div className="text-sm text-gray-500">4-6 hrs/week</div>
                      </div>
                      <h4 className="font-medium text-gray-900 mb-3">{topic.title}</h4>
                      <ul className="space-y-2">
                        {topic.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Connecting Line */}
                {index < roadmapPhases.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200 -z-10"></div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Study Schedule */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Recommended Study Schedule</h2>
            <p className="text-xl opacity-90">Maximize your learning with optimal time allocation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <Clock className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Daily Commitment</h3>
              <p className="text-blue-100 mb-4">1-2 hours of focused study</p>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>• 30 min theory review</li>
                <li>• 60 min problem solving</li>
                <li>• 30 min pattern practice</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <Calendar className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Weekly Goals</h3>
              <p className="text-blue-100 mb-4">Structured weekly objectives</p>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>• 15-20 problems solved</li>
                <li>• 2-3 new patterns learned</li>
                <li>• 1 mock interview</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <Target className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Monthly Milestones</h3>
              <p className="text-blue-100 mb-4">Track your progress</p>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>• Phase completion</li>
                <li>• Skill assessment</li>
                <li>• Interview readiness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Tips</h2>
          <p className="text-xl text-gray-600">Learn from students who successfully landed their dream jobs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "Consistency is Key",
              description: "Study daily, even if just 30 minutes. Regular practice builds muscle memory and pattern recognition."
            },
            {
              icon: FileText,
              title: "Keep Notes",
              description: "Document patterns, solutions, and insights. Review them weekly to reinforce learning."
            },
            {
              icon: Users,
              title: "Join Study Groups",
              description: "Collaborate with peers, discuss solutions, and learn from different approaches."
            },
            {
              icon: Clock,
              title: "Time Yourself",
              description: "Practice with time constraints to simulate real interview conditions."
            },
            {
              icon: CheckCircle,
              title: "Quality over Quantity",
              description: "Focus on understanding concepts deeply rather than solving many problems superficially."
            },
            {
              icon: Route,
              title: "Track Progress",
              description: "Monitor your improvement weekly and adjust your study plan as needed."
            }
          ].map((tip, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <tip.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-sm">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">Start with Phase 1 and work your way to interview success</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/prerequisites" className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Check Prerequisites
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/questions" className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
              Start Practicing
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