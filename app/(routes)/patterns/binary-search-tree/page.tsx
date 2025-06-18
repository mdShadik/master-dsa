import { TreeDeciduous } from 'lucide-react'
import questions from '@/app/dsa.json'
import { Question } from '../../questions/page'
import PatternPageComponent from '@/app/components/patternPage'

export default function BinarySearchTreePattern() {
  const questionObj = JSON.parse(JSON.stringify(questions))

  const patternProps = {
    patternName: "Binary Search Tree (BST) Pattern",
    patternKey: "binary-search-tree",
    description: "Master the principles of Binary Search Trees to efficiently insert, delete, search, and traverse hierarchical data structures used in many classic coding problems.",
    icon: TreeDeciduous,
    estimatedHours: "4-5 Hours",

    whenToUse: [
      {
        title: "Efficient Search",
        description: "When you need faster than linear time search in a sorted data structure"
      },
      {
        title: "Hierarchical Data",
        description: "Modeling or parsing data with a parent-child structure"
      },
      {
        title: "Sorted Insertion",
        description: "When insertions must maintain sorted order without re-sorting"
      },
      {
        title: "Inorder Traversal",
        description: "Extracting sorted data from a tree efficiently"
      }
    ],

    keyInsights: [
      {
        title: "Inorder = Sorted",
        description: "Inorder traversal of BST always gives sorted order",
        bgColor: "bg-yellow-50",
        textColor: "text-yellow-900"
      },
      {
        title: "Time Complexity",
        description: "O(log n) on average for insert/search/delete in balanced BST",
        bgColor: "bg-blue-50",
        textColor: "text-blue-900"
      },
      {
        title: "Common Mistake",
        description: "Not handling duplicate values correctly or improperly updating node references",
        bgColor: "bg-red-50",
        textColor: "text-red-900"
      },
      {
        title: "Space Usage",
        description: "O(h) recursive stack space for operations where h = height of BST",
        bgColor: "bg-purple-50",
        textColor: "text-purple-900"
      }
    ],

    codeExamples: [
      {
        title: "Insert into BST",
        description: "Recursive insertion maintaining BST properties",
        code: `class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function insertIntoBST(root: TreeNode | null, val: number): TreeNode {
    if (!root) return new TreeNode(val);

    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }

    return root;
}`,
        timeComplexity: "O(log n) avg, O(n) worst",
        spaceComplexity: "O(h) recursive stack"
      },
      {
        title: "Search in BST",
        description: "Simple recursive search for a value in BST",
        code: `function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root || root.val === val) return root;

    if (val < root.val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
}`,
        timeComplexity: "O(log n) avg, O(n) worst",
        spaceComplexity: "O(h)"
      },
      {
        title: "Inorder Traversal",
        description: "Retrieve sorted values using inorder traversal",
        code: `function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];

    function traverse(node: TreeNode | null) {
        if (!node) return;
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }

    traverse(root);
    return result;
}`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(h)"
      }
    ],

    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook', 'Bloomberg', 'Adobe'],

    nextPattern: {
      name: "Tree Traversals",
      href: "/patterns/tree-traversals"
    },

    questions: questionObj,

    currentProgress: {
      solved: 0,
      total: 15
    }
  }

  return <PatternPageComponent {...patternProps} />
}
