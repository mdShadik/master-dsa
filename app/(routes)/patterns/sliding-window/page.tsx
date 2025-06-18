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

export default function SlidingWindowPattern() {
  const questionObj = JSON.parse(JSON.stringify(questions))

  const slidingWindowQuestions = questionObj.filter((q: Question) =>
    q?.pattern.toLowerCase().includes('sliding window')
  )

  const codeExamples: CodeExample[] = [
    {
      title: 'Fixed Size Sliding Window',
      description: 'Find the maximum sum of k consecutive elements',
      code: `function maxSum(arr: number[], k: number): number {
  let maxSum = 0, windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}`,
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
    },
    {
      title: 'Smallest Subarray with Given Sum',
      description: 'Dynamic sliding window to find minimal length subarray with sum ≥ target',
      code: `function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0, sum = 0, minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left++];
    }
  }

  return minLen === Infinity ? 0 : minLen;
}`,
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
    },
    {
      title: 'Longest Substring Without Repeating Characters',
      description: 'Dynamic-size sliding window for string processing',
      code: `function lengthOfLongestSubstring(s: string): number {
  let seen = new Map<string, number>();
  let left = 0, maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (seen.has(char) && seen.get(char)! >= left) {
      left = seen.get(char)! + 1;
    }

    seen.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}`,
      timeComplexity: 'O(n)',
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
          <span className="text-gray-900 font-medium">Sliding Window</span>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">Sliding Window Pattern</h1>
              <p className="text-xl text-purple-100 mb-6 max-w-2xl">
                Master problems involving subarrays, substrings, or variable-length windows using this powerful pattern.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>{slidingWindowQuestions.length} Problems</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>4-5 Hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5" />
                  <span>Easy to Hard</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                <Clock className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main */}
        <div className="lg:col-span-2 space-y-8">
          {/* When to use */}
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Lightbulb className="h-6 w-6 text-yellow-500 mr-3" />
              When to Use Sliding Window
            </h2>
            <div className="space-y-4">
              {[
                ['Fixed Window Size', 'When the problem requires a subarray/substring of size k'],
                ['Dynamic Window Size', 'When the window can grow/shrink depending on the condition'],
                ['Max/Min Sum or Length', 'Finding longest, shortest, or maximum sum windows'],
                ['Streaming Data', 'When processing continuous streams of data'],
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
                <h3 className="font-semibold text-blue-900 mb-2">Time Complexity</h3>
                <p className="text-blue-700 text-sm">Usually O(n), efficient for continuous data</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Space Efficiency</h3>
                <p className="text-green-700 text-sm">O(1) to O(n), depending on storage</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Common Mistake</h3>
                <p className="text-purple-700 text-sm">Incorrectly shrinking or expanding the window</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-2">Pro Tip</h3>
                <p className="text-orange-700 text-sm">Think in terms of window size & boundary conditions</p>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="bg-white rounded-xl shadow-sm border p-8">
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
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Problems Solved</span>
                <span className="text-sm font-semibold text-gray-900">0/20</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>0% Complete</span>
                <span>20 remaining</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Practice Problems</h3>
              <Link
                href="/questions?pattern=sliding-window"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View All
              </Link>
            </div>

            <div className="space-y-3">
              {slidingWindowQuestions.slice(0, 5).map((problem: Question) => (
                <div
                  key={problem.id}
                  className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">{problem.question}</p>
                    <span
                      className={`px-2 py-0.5 mt-1 rounded text-xs font-medium text-slate-800 border ${getDifficultyColor(
                        problem.level
                      )}`}
                    >
                      {problem.level}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="h-5 w-5 text-blue-600 mr-2" />
              Asked by Companies
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Google', 'Meta', 'Amazon', 'Adobe', 'Microsoft'].map((company) => (
                <span
                  key={company}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Next Pattern</h3>
            <p className="text-purple-100 text-sm mb-4">Ready for the next challenge?</p>
            <Link
              href="/patterns/fast-and-slow-pointers"
              className="inline-flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-50 transition-colors"
            >
              Fast & Slow Pointers
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
