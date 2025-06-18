'use client'

import Link from 'next/link'
import {
  ChevronRight,
  Clock,
  Target,
  Trophy,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Users,
} from 'lucide-react'

import questions from '@/app/dsa.json'
import { Question } from '../../questions/page'

interface CodeExample {
  title: string
  description: string
  code: string
  timeComplexity: string
  spaceComplexity: string
}

export default function MergeIntervalsPattern() {
  const questionObj = JSON.parse(JSON.stringify(questions))
  const mergeIntervalQuestions = questionObj.filter((q: Question) =>
    q?.pattern.toLowerCase().includes('merge intervals')
  )

  const codeExamples: CodeExample[] = [
    {
      title: 'Merge Overlapping Intervals',
      description: 'Sort intervals, then merge overlapping ones',
      code: `function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0])
  const res: number[][] = []
  for (const interval of intervals) {
    if (!res.length || res[res.length - 1][1] < interval[0]) {
      res.push(interval)
    } else {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], interval[1])
    }
  }
  return res
}`,
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(n)',
    },
    {
      title: 'Insert Interval',
      description: 'Insert a new interval and merge if needed',
      code: `function insert(intervals: number[][], newInterval: number[]): number[][] {
  intervals.push(newInterval)
  return merge(intervals)
}`,
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(n)',
    },
    {
      title: 'Employee Free Time (LC 759)',
      description: 'Find common free time across all employees',
      code: `function employeeFreeTime(schedule: number[][][]): number[][] {
  const all: number[][] = schedule.flat().sort((a, b) => a[0] - b[0])
  const res: number[][] = []
  let prevEnd = all[0][1]
  for (let i = 1; i < all.length; i++) {
    const [start, end] = all[i]
    if (start > prevEnd) res.push([prevEnd, start])
    prevEnd = Math.max(prevEnd, end)
  }
  return res
}`,
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(n)',
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'text-green-600 bg-green-50 border-green-200'
      case 'medium':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'hard':
        return 'text-red-600 bg-red-50 border-red-200'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/patterns" className="hover:text-blue-600">
            Patterns
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900 font-medium">Merge Intervals</span>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">Merge Intervals Pattern</h1>
              <p className="text-xl text-purple-100 mb-6 max-w-2xl">
                Master interval management problems: merging, insertion, overlaps, and gaps.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>{mergeIntervalQuestions.length} Problems</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>3‑4 Hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5" />
                  <span>Medium → Hard</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                <Users className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* When to Use */}
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Lightbulb className="h-6 w-6 text-yellow-500 mr-3" />
              When to Use Merge Intervals
            </h2>
            <div className="space-y-4">
              {[
                ['Interval Overlap', 'Need to combine overlapping date/time ranges'],
                ['Gaps/Free Time', 'Find holes in schedules or time periods'],
                ['Scheduling Optimization', 'Merge tasks, compress timelines, resolve conflicts'],
                ['Dynamic Insertion', 'Insert and re‑merge a new interval'],
              ].map(([title, desc]) => (
                <div key={title} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Insights & Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Sort First</h3>
                <p className="text-blue-700 text-sm">Sort intervals by start time before merging</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Two Pointers</h3>
                <p className="text-green-700 text-sm">Track current and last merged intervals</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Space Trick</h3>
                <p className="text-purple-700 text-sm">You can modify input if not preserving order</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-2">Edge Case</h3>
                <p className="text-orange-700 text-sm">Adjacent intervals may or may not count as overlapping</p>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Code Examples</h2>
            <div className="space-y-6">
              {codeExamples.map((ex, i) => (
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{ex.title}</h3>
                      <p className="text-sm text-gray-600">{ex.description}</p>
                    </div>
                    <div className="text-xs text-gray-500 space-x-4">
                      <span>Time: {ex.timeComplexity}</span>
                      <span>Space: {ex.spaceComplexity}</span>
                    </div>
                  </div>
                  <pre className="bg-gray-900 text-green-400 p-4 overflow-x-auto text-sm">
                    <code>{ex.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Progress */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Problems Solved</span>
                <span className="text-sm font-semibold text-gray-900">0/{mergeIntervalQuestions.length}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>0% complete</span>
                <span>{mergeIntervalQuestions.length} remaining</span>
              </div>
            </div>
          </div>

          {/* Practice Problems */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Practice Problems</h3>
              <Link href="/questions?pattern=merge-intervals" className="text-blue-600 text-sm font-medium hover:text-blue-700">
                View All
              </Link>
            </div>
            <div className="space-y-3">
              {mergeIntervalQuestions.slice(0, 5).map((p: Question) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">{p.question}</p>
                    <span className={`px-2 py-0.5 mt-1 rounded text-xs font-medium text-slate-800 border ${getDifficultyColor(p.level)}`}>
                      {p.level}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Companies */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Users className="h-5 w-5 text-blue-600 mr-2" />
              Asked by Companies
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Google', 'Facebook', 'Amazon', 'LinkedIn', 'Airbnb', 'Snapchat'].map((c) => (
                <span key={c} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Next Pattern */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
            <h3 className="font-semibold mb-2">Next Pattern</h3>
            <p className="text-purple-100 text-sm mb-4">Master range-based problems next!</p>
            <Link href="/patterns/interval-scheduling" className="inline-flex items-center bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50 text-sm">
              Interval Scheduling
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
