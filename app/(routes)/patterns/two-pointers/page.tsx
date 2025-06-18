import { Target } from 'lucide-react'
import questions from '@/app/dsa.json'
import { Question } from '../../questions/page'
import PatternPageComponent from '@/app/components/patternPage';

export default function TwoPointersPattern() {
  const questionObj = JSON.parse(JSON.stringify(questions));

  const patternProps = {
    patternName: "Two Pointers Pattern",
    patternKey: "two-pointers",
    description: "Master the art of using two pointers to solve array and string problems efficiently. Perfect for sorted arrays, palindromes, and pair-finding problems.",
    icon: Target,
    estimatedHours: "5-6 Hours",
    
    whenToUse: [
      {
        title: "Sorted Arrays",
        description: "When dealing with sorted arrays and need to find pairs or triplets"
      },
      {
        title: "Palindrome Problems",
        description: "Checking if strings or arrays form palindromes"
      },
      {
        title: "Pair Sum Problems",
        description: "Finding pairs that meet specific criteria (sum, difference, etc.)"
      },
      {
        title: "Container/Water Problems",
        description: "Optimizing area calculations with height constraints"
      }
    ],
    
    keyInsights: [
      {
        title: "Time Complexity",
        description: "Usually O(n) compared to O(n²) brute force approach",
        bgColor: "bg-blue-50",
        textColor: "text-blue-900"
      },
      {
        title: "Space Efficiency",
        description: "O(1) extra space - no additional data structures needed",
        bgColor: "bg-green-50",
        textColor: "text-green-900"
      },
      {
        title: "Common Mistake",
        description: "Forgetting to handle duplicate elements properly",
        bgColor: "bg-purple-50",
        textColor: "text-purple-900"
      },
      {
        title: "Pro Tip",
        description: "Sort the array first if not already sorted",
        bgColor: "bg-orange-50",
        textColor: "text-orange-900"
      }
    ],
    
    codeExamples: [
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
    ],
    
    companies: [
      'Google', 'Amazon', 'Microsoft', 'Facebook', 'Apple', 
      'Netflix', 'Uber', 'LinkedIn'
    ],
    
    nextPattern: {
      name: "Sliding Window",
      href: "/patterns/sliding-window"
    },
    
    questions: questionObj,
    
    currentProgress: {
      solved: 2,
      total: 25
    }
  };

  return <PatternPageComponent {...patternProps} />;
}