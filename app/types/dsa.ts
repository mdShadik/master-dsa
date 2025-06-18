export interface DSAQuestion {
    id: string;
    question: string;
    pattern: string;
    topic: string;
    level: 'easy' | 'medium' | 'hard';
    leetcode_link: string;
    description: string;
    companies: string[];
    tags: string[];
    time_complexity: string;
    space_complexity: string;
    hints: string[];
  }
  
  export interface DSAPattern {
    name: string;
    description: string;
    topics: string[];
    questionCount: number;
  }
  
  export interface Topic {
    name: string;
    patterns: string[];
    questionCount: number;
  }