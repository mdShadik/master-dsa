import { Share2 } from 'lucide-react'
import questions from '@/app/dsa.json'
import PatternPageComponent from '@/app/components/patternPage'

export default function GraphTraversalPattern() {
  const questionObj = JSON.parse(JSON.stringify(questions))

  const patternProps = {
    patternName: "Graph Traversal Pattern",
    patternKey: "graph-traversal",
    description:
      "Master the exploration of graphs using BFS and DFS — essential for problems involving connected components, cycles, shortest paths, and maze-like challenges.",
    icon: Share2,
    estimatedHours: "6-8 Hours",

    whenToUse: [
      {
        title: "Connected Components",
        description: "To explore all nodes in a component or check if nodes are connected"
      },
      {
        title: "Cycle Detection",
        description: "To detect cycles in directed or undirected graphs"
      },
      {
        title: "Shortest Path",
        description: "To compute shortest path in unweighted graphs (BFS) or weighted graphs (Dijkstra)"
      },
      {
        title: "Maze and Grid Problems",
        description: "When navigating through 2D/3D grids with obstacles or directions"
      }
    ],

    keyInsights: [
      {
        title: "BFS = Shortest Path (Unweighted)",
        description: "Use BFS to find the shortest path in unweighted graphs",
        bgColor: "bg-blue-50",
        textColor: "text-blue-900"
      },
      {
        title: "DFS = Depth Exploration",
        description: "DFS is great for deep search, cycle detection, and topological sort",
        bgColor: "bg-green-50",
        textColor: "text-green-900"
      },
      {
        title: "Avoid Re-visiting",
        description: "Always maintain a visited set/map to prevent infinite loops",
        bgColor: "bg-yellow-50",
        textColor: "text-yellow-900"
      },
      {
        title: "Adjacency List vs Matrix",
        description: "Adjacency list is space-efficient for sparse graphs, matrix for dense graphs",
        bgColor: "bg-purple-50",
        textColor: "text-purple-900"
      }
    ],

    codeExamples: [
      {
        title: "DFS (Adjacency List)",
        description: "Recursive depth-first traversal using visited set",
        code: `function dfs(graph: Map<number, number[]>, node: number, visited: Set<number>) {
    if (visited.has(node)) return;
    visited.add(node);
    console.log(node); // or push to result
    
    for (const neighbor of graph.get(node) || []) {
        dfs(graph, neighbor, visited);
    }
}

// Usage:
const graph = new Map([[0, [1, 2]], [1, [0, 3]], [2, [0]], [3, [1]]]);
dfs(graph, 0, new Set());`,
        timeComplexity: "O(V + E)",
        spaceComplexity: "O(V)"
      },
      {
        title: "BFS (Adjacency List)",
        description: "Breadth-first traversal using queue and visited set",
        code: `function bfs(graph: Map<number, number[]>, start: number) {
    const visited = new Set<number>();
    const queue: number[] = [start];
    visited.add(start);

    while (queue.length > 0) {
        const node = queue.shift()!;
        console.log(node); // or push to result

        for (const neighbor of graph.get(node) || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}`,
        timeComplexity: "O(V + E)",
        spaceComplexity: "O(V)"
      },
      {
        title: "Graph as Matrix (DFS)",
        description: "DFS on a grid for maze problems",
        code: `function dfsGrid(grid: number[][], i: number, j: number, visited: boolean[][]) {
    const rows = grid.length, cols = grid[0].length;
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 0 || visited[i][j]) return;
    
    visited[i][j] = true;

    const dirs = [[0,1], [1,0], [0,-1], [-1,0]];
    for (const [dx, dy] of dirs) {
        dfsGrid(grid, i + dx, j + dy, visited);
    }
}`,
        timeComplexity: "O(m * n)",
        spaceComplexity: "O(m * n)"
      }
    ],

    companies: ['Google', 'Amazon', 'Facebook', 'Uber', 'Microsoft', 'Bloomberg'],

    nextPattern: {
      name: "Backtracking",
      href: "/patterns/backtracking"
    },

    questions: questionObj,

    currentProgress: {
      solved: 3,
      total: 20
    }
  }

  return <PatternPageComponent {...patternProps} />
}
