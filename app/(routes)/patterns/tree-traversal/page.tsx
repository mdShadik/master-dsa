import { TreePine } from 'lucide-react'
import questions from '@/app/dsa.json'
import { Question } from '../../questions/page'
import PatternPageComponent from '@/app/components/patternPage';

export default function TreeTraversalPattern() {
  const questionObj = JSON.parse(JSON.stringify(questions));

  const patternProps = {
    patternName: "Tree Traversal",
    patternKey: "tree-traversal",
    description: "Master different tree traversal techniques including DFS, BFS, and their variations. Essential for solving tree and graph problems efficiently.",
    icon: TreePine,
    estimatedHours: "6-8 Hours",
    
    whenToUse: [
      {
        title: "Binary Tree Problems",
        description: "When you need to visit all nodes in a binary tree or search for specific nodes"
      },
      {
        title: "Path Finding",
        description: "Finding paths from root to leaf, or between any two nodes in a tree"
      },
      {
        title: "Tree Validation",
        description: "Checking if a tree is valid BST, balanced, or has specific properties"
      },
      {
        title: "Level Order Processing",
        description: "When you need to process nodes level by level (BFS approach)"
      },
      {
        title: "Tree Serialization",
        description: "Converting tree to string representation and vice versa"
      }
    ],
    
    keyInsights: [
      {
        title: "DFS vs BFS",
        description: "DFS uses O(h) space, BFS uses O(w) space where h=height, w=width",
        bgColor: "bg-blue-50",
        textColor: "text-blue-900"
      },
      {
        title: "Recursive Approach",
        description: "Most tree problems have elegant recursive solutions",
        bgColor: "bg-green-50",
        textColor: "text-green-900"
      },
      {
        title: "Stack vs Queue",
        description: "Use stack for DFS iteration, queue for BFS iteration",
        bgColor: "bg-purple-50",
        textColor: "text-purple-900"
      },
      {
        title: "Base Cases",
        description: "Always handle null nodes and leaf nodes properly",
        bgColor: "bg-orange-50",
        textColor: "text-orange-900"
      }
    ],
    
    codeExamples: [
      {
        title: "DFS - Inorder Traversal (Recursive)",
        description: "Classic recursive inorder traversal: left, root, right",
        code: `function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    
    function dfs(node: TreeNode | null): void {
        if (!node) return;
        
        dfs(node.left);    // Visit left subtree
        result.push(node.val);  // Process current node
        dfs(node.right);   // Visit right subtree
    }
    
    dfs(root);
    return result;
}

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(h)"
      },
      {
        title: "BFS - Level Order Traversal",
        description: "Level by level traversal using queue",
        code: `function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    
    const result: number[][] = [];
    const queue: TreeNode[] = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel: number[] = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            currentLevel.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
}`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(w)"
      },
      {
        title: "DFS - Maximum Depth",
        description: "Finding the maximum depth of a binary tree",
        code: `function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;
    
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    return Math.max(leftDepth, rightDepth) + 1;
}

// Iterative approach using stack
function maxDepthIterative(root: TreeNode | null): number {
    if (!root) return 0;
    
    const stack: [TreeNode, number][] = [[root, 1]];
    let maxDepth = 0;
    
    while (stack.length > 0) {
        const [node, depth] = stack.pop()!;
        maxDepth = Math.max(maxDepth, depth);
        
        if (node.left) stack.push([node.left, depth + 1]);
        if (node.right) stack.push([node.right, depth + 1]);
    }
    
    return maxDepth;
}`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(h)"
      },
      {
        title: "Path Sum Problems",
        description: "Finding if a path from root to leaf equals target sum",
        code: `function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false;
    
    // If it's a leaf node, check if the sum equals target
    if (!root.left && !root.right) {
        return root.val === targetSum;
    }
    
    // Recursively check left and right subtrees
    const remainingSum = targetSum - root.val;
    return hasPathSum(root.left, remainingSum) || 
           hasPathSum(root.right, remainingSum);
}

// Find all root-to-leaf paths with target sum
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const result: number[][] = [];
    
    function dfs(node: TreeNode | null, path: number[], sum: number): void {
        if (!node) return;
        
        path.push(node.val);
        sum -= node.val;
        
        // If leaf node and sum is 0, we found a valid path
        if (!node.left && !node.right && sum === 0) {
            result.push([...path]);
        } else {
            dfs(node.left, path, sum);
            dfs(node.right, path, sum);
        }
        
        path.pop(); // Backtrack
    }
    
    dfs(root, [], targetSum);
    return result;
}`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(h)"
      }
    ],
    
    companies: [
      'Google', 'Amazon', 'Microsoft', 'Facebook', 'Apple', 
      'LinkedIn', 'Uber', 'Netflix', 'Adobe', 'Salesforce'
    ],
    
    nextPattern: {
      name: "Dynamic Programming",
      href: "/patterns/dynamic-programming"
    },
    
    questions: questionObj,
    
    currentProgress: {
      solved: 3,
      total: 28
    }
  };

  return <PatternPageComponent {...patternProps} />;
}