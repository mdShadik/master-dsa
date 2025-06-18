import Link from 'next/link'
import { 
  Code, 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  Target, 
  BookOpen, 
  Play, 
  Lightbulb,
  AlertCircle,
  ArrowRight,
  ChevronRight,
  Trophy,
  Users
} from 'lucide-react'
import { Question } from '@/app/(routes)/questions/page'
import { formatSlugToTitle } from '@/app/lib/utils'

interface CodeExample {
  title: string
  description: string
  code: string
  timeComplexity: string
  spaceComplexity: string
}

interface WhenToUse {
  title: string
  description: string
}

interface KeyInsight {
  title: string
  description: string
  bgColor: string
  textColor: string
}

interface PatternPageProps {
  patternName: string
  patternKey: string // for filtering questions
  description: string
  icon: React.ComponentType<{ className?: string }>
  estimatedHours: string
  whenToUse: WhenToUse[]
  keyInsights: KeyInsight[]
  codeExamples: CodeExample[]
  companies: string[]
  nextPattern?: {
    name: string
    href: string
  }
  questions: Question[]
  currentProgress?: {
    solved: number
    total: number
  }
}

interface PatternPageComponentProps extends PatternPageProps {}

export default function PatternPageComponent({
  patternName,
  patternKey,
  description,
  icon: Icon,
  estimatedHours,
  whenToUse,
  keyInsights,
  codeExamples,
  companies,
  nextPattern,
  questions,
  currentProgress = { solved: 0, total: questions.length }
}: PatternPageComponentProps) {

  const filteredQuestions = questions.filter((q: Question) => 
  {
    console.log({q: q.pattern, key: patternKey})
    return (
    q?.pattern.toLowerCase().includes((formatSlugToTitle(patternKey)).toLowerCase())
  )}
  )

  const progressPercentage = currentProgress.total > 0 
    ? Math.round((currentProgress.solved / currentProgress.total) * 100) 
    : 0

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-50 border-green-200'
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'hard': return 'text-red-600 bg-red-50 border-red-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/patterns" className="hover:text-blue-600 transition-colors">Patterns</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900 font-medium">{patternName}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">{patternName}</h1>
              <p className="text-xl text-blue-100 mb-6 max-w-2xl">
                {description}
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>{filteredQuestions.length} Problems</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{estimatedHours}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5" />
                  <span>Easy to Hard</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                <Icon className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Pattern Overview */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Lightbulb className="h-6 w-6 text-yellow-500 mr-3" />
                When to Use {patternName}
              </h2>
              
              <div className="space-y-4">
                {whenToUse.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Insights */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Insights & Tips</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {keyInsights.map((insight, index) => (
                  <div key={index} className={`p-4 rounded-lg ${insight.bgColor}`}>
                    <h3 className={`font-semibold mb-2 ${insight.textColor}`}>{insight.title}</h3>
                    <p className={`text-sm ${insight.textColor.replace('900', '700')}`}>{insight.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Examples */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Code Examples</h2>
              
              <div className="space-y-6">
                {codeExamples.map((example, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{example.title}</h3>
                          <p className="text-sm text-gray-600">{example.description}</p>
                        </div>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>Time: {example.timeComplexity}</span>
                          <span>Space: {example.spaceComplexity}</span>
                        </div>
                      </div>
                    </div>
                    <pre className="bg-gray-900 text-green-400 p-4 overflow-x-auto text-sm">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Problems Solved</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {currentProgress.solved}/{currentProgress.total}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{progressPercentage}% Complete</span>
                  <span>{currentProgress.total - currentProgress.solved} remaining</span>
                </div>
              </div>
            </div>

            {/* Practice Problems */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Practice Problems</h3>
                <Link 
                  href={`/questions?pattern=${patternKey}`} 
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View All
                </Link>
              </div>
              
              <div className="space-y-3">
                {filteredQuestions.slice(0, 5).map((problem: Question) => (
                  <div key={problem.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{problem.question}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`px-2 py-0.5 rounded text-xs font-medium text-slate-800 border ${getDifficultyColor(problem.level)}`}>
                            {problem.level}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Companies */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="h-5 w-5 text-blue-600 mr-2" />
                Asked by Companies
              </h3>
              <div className="flex flex-wrap gap-2">
                {companies.map((company) => (
                  <span key={company} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    {company}
                  </span>
                ))}
              </div>
            </div>

            {/* Next Pattern */}
            {nextPattern && (
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Next Pattern</h3>
                <p className="text-purple-100 text-sm mb-4">Ready for the next challenge?</p>
                <Link 
                  href={nextPattern.href} 
                  className="inline-flex items-center bg-white text-purple-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-purple-50 transition-colors"
                >
                  {nextPattern.name}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}