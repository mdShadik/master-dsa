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

import questions from '@/app/dsa.json'
import { Question } from '../../questions/page'

interface CodeExample {
  title: string
  description: string
  code: string
  timeComplexity: string
  spaceComplexity: string
}

export default function TwoPointersPattern() {

    const questionObj = JSON.parse(JSON.stringify(questions));

    const twoPointerQuestions = questionObj.filter((q: Question) => q?.pattern.toLowerCase().includes("two pointer"))


  const codeExamples: CodeExample[] = [
    {
      title: "Basic Two Pointers Template",
      description: "Standard template for two pointers approach on sorted arrays",
      code: `function twoPointers(arr: number[], target: number): number[] {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        const sum = arr[left] + arr[right];
        
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return [-1, -1]; // Not found
}`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)"
    },
    {
      title: "Palindrome Check",
      description: "Using two pointers to check if a string is a palindrome",
      code: `function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Skip non-alphanumeric characters
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }
        
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
}

function isAlphaNumeric(char: string): boolean {
    return /[a-zA-Z0-9]/.test(char);
}`,
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)"
    },
    {
      title: "Three Sum Problem",
      description: "Finding triplets that sum to zero using two pointers",
      code: `function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicates for first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return result;
}`,
      timeComplexity: "O(n²)",
      spaceComplexity: "O(1)"
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-50 border-green-200'
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'hard': return 'text-red-600 bg-red-50 border-red-200'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/patterns" className="hover:text-blue-600 transition-colors">Patterns</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900 font-medium">Two Pointers</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">Two Pointers Pattern</h1>
              <p className="text-xl text-blue-100 mb-6 max-w-2xl">
                Master the art of using two pointers to solve array and string problems efficiently. 
                Perfect for sorted arrays, palindromes, and pair-finding problems.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>{twoPointerQuestions.length} Problems</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>5-6 Hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5" />
                  <span>Easy to hard</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                <Target className="h-16 w-16 text-white" />
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
                When to Use Two Pointers
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Sorted Arrays</h3>
                    <p className="text-gray-600">When dealing with sorted arrays and need to find pairs or triplets</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Palindrome Problems</h3>
                    <p className="text-gray-600">Checking if strings or arrays form palindromes</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Pair Sum Problems</h3>
                    <p className="text-gray-600">Finding pairs that meet specific criteria (sum, difference, etc.)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Container/Water Problems</h3>
                    <p className="text-gray-600">Optimizing area calculations with height constraints</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Insights & Tips</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Time Complexity</h3>
                  <p className="text-blue-700 text-sm">Usually O(n) compared to O(n²) brute force approach</p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Space Efficiency</h3>
                  <p className="text-green-700 text-sm">O(1) extra space - no additional data structures needed</p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Common Mistake</h3>
                  <p className="text-purple-700 text-sm">Forgetting to handle duplicate elements properly</p>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">Pro Tip</h3>
                  <p className="text-orange-700 text-sm">Sort the array first if not already sorted</p>
                </div>
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
                  <span className="text-sm font-semibold text-gray-900">2/25</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '8%' }}></div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>8% Complete</span>
                  <span>23 remaining</span>
                </div>
              </div>
            </div>

            {/* Practice Problems */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Practice Problems</h3>
                <Link href="/questions?pattern=two-pointers" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View All
                </Link>
              </div>
              
              <div className="space-y-3">
                {twoPointerQuestions.slice(0, 5).map((problem:Question) => (
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
                {['Google', 'Amazon', 'Microsoft', 'Facebook', 'Apple', 'Netflix', 'Uber', 'LinkedIn'].map((company) => (
                  <span key={company} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                    {company}
                  </span>
                ))}
              </div>
            </div>

            {/* Next Pattern */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Next Pattern</h3>
              <p className="text-purple-100 text-sm mb-4">Ready for the next challenge?</p>
              <Link href="/patterns/sliding-window" className="inline-flex items-center bg-white text-purple-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-purple-50 transition-colors">
                Sliding Window
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}