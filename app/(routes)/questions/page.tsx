"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Filter,
  Search,
  ExternalLink,
  Clock,
  Target,
  Building2,
  Tag,
  ChevronDown,
  X,
  BookOpen,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import dsa from "@/app/dsa.json";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formatSlugToTitle } from "@/app/lib/utils";

// Mock data - replace with actual import from dsa.json
const questions = JSON.parse(JSON.stringify(dsa));

const TOPICS = [
  "Array",
  "String",
  "Linked List",
  "Stack",
  "Queue",
  "Tree",
  "Graph",
];
const PATTERNS = [
  "Two Pointers",
  "Sliding Window",
  "Kadane's Algorithm",
  "Reversal",
  "BFS",
  "DFS",
  "Binary Search",
];
const LEVELS = ["easy", "medium", "hard"];
const COMPANIES = [
  "Google",
  "Amazon",
  "Microsoft",
  "Facebook",
  "Apple",
  "Netflix",
  "Adobe",
];

export interface Question {
  id: string;
  question: string;
  pattern: string;
  topic: string;
  level: string;
  leetcode_link: string;
  description: string;
  companies: string[];
  tags: string[];
  time_complexity: string;
  space_complexity: string;
  hints: string[];
}

interface FilterState {
  search: string;
  topics: string[];
  patterns: string[];
  levels: string[];
  companies: string[];
}

export default function QuestionsPage() {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    topics: [],
    patterns: [],
    levels: [],
    companies: [],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const QUESTIONS_PER_PAGE = 10;

  const [showFilters, setShowFilters] = useState(false);

  const search = useSearchParams();
  const pattern = search.get('pattern')?.trim() ? formatSlugToTitle(search.get('pattern')!) : null
  console.log({search: pattern})


  const filteredQuestions = useMemo(() => {
    return questions.filter((question: Question) => {
      // Search filter
      if (
        filters.search &&
        !question.question
          .toLowerCase()
          .includes(filters.search.toLowerCase()) &&
        !question.description
          .toLowerCase()
          .includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      // Topic filter
      if (
        filters.topics.length > 0 &&
        !filters.topics.includes(question.topic)
      ) {
        return false;
      }

      // Pattern filter
      if (
        filters.patterns.length > 0 &&
        !filters.patterns.includes(question.pattern)
      ) {
        return false;
      }

      // Level filter
      if (
        filters.levels.length > 0 &&
        !filters.levels.includes(question.level)
      ) {
        return false;
      }

      // Company filter
      if (
        filters.companies.length > 0 &&
        !filters.companies.some((company) =>
          question.companies.includes(company)
        )
      ) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const totalPages = Math.ceil(filteredQuestions.length / QUESTIONS_PER_PAGE);
  const paginatedQuestions = useMemo(() => {
    const start = (currentPage - 1) * QUESTIONS_PER_PAGE;
    return filteredQuestions.slice(start, start + QUESTIONS_PER_PAGE);
  }, [filteredQuestions, currentPage]);

  const updateFilter = (key: keyof FilterState, value: string) => {
    setFilters((prev) => {
      if (key === "search") {
        return { ...prev, [key]: value };
      }

      const currentArray = prev[key] as string[];
      const updatedArray = currentArray.includes(value)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value];

      return { ...prev, [key]: updatedArray };
    });
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      topics: [],
      patterns: [],
      levels: [],
      companies: [],
    });
  };

  const activeFiltersCount =
    filters.topics.length +
    filters.patterns.length +
    filters.levels.length +
    filters.companies.length;

  const getLevelColor = (level: string) => {
    switch (level) {
      case "easy":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const FilterSection = ({
    title,
    items,
    filterKey,
  }: {
    title: string;
    items: string[];
    filterKey: keyof FilterState;
  }) => (
    <div className="space-y-2">
      <h4 className="font-medium text-gray-900">{title}</h4>
      <div className="space-y-1 max-h-40 overflow-y-auto">
        {items.map((item) => (
          <label
            key={item}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={(filters[filterKey] as string[]).includes(item)}
              onChange={() => updateFilter(filterKey, item)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">{item}</span>
          </label>
        ))}
      </div>
    </div>
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  useEffect(() => {
    console.log(filters)
    if (pattern) {
      console.log({first: "Here"})
      updateFilter('patterns', pattern);
    }
  }, [search]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            500+ Curated DSA Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master Data Structures and Algorithms with our carefully selected
            problems from top tech companies.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search questions..."
                value={filters.search}
                onChange={(e) => updateFilter("search", e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 text-blue-900 outline-none rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <Button
              variant="outline"
              size="default"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-0.5">
                  {activeFiltersCount}
                </span>
              )}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  showFilters ? "rotate-180" : ""
                }`}
              />
            </Button>

            {/* Clear Filters */}
            {activeFiltersCount > 0 && (
              <Button
                variant="ghost"
                size="default"
                onClick={clearFilters}
                className="flex items-center space-x-2 text-gray-600"
              >
                <X className="h-4 w-4" />
                <span>Clear</span>
              </Button>
            )}
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <FilterSection
                  title="Topics"
                  items={TOPICS}
                  filterKey="topics"
                />
                <FilterSection
                  title="Patterns"
                  items={PATTERNS}
                  filterKey="patterns"
                />
                <FilterSection
                  title="Difficulty"
                  items={LEVELS}
                  filterKey="levels"
                />
                <FilterSection
                  title="Companies"
                  items={COMPANIES}
                  filterKey="companies"
                />
              </div>
            </Card>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold">
              {(currentPage - 1) * QUESTIONS_PER_PAGE + 1}
            </span>
            –
            <span className="font-semibold">
              {Math.min(
                currentPage * QUESTIONS_PER_PAGE,
                filteredQuestions.length
              )}
            </span>{" "}
            of <span className="font-semibold">{filteredQuestions.length}</span>{" "}
            questions
          </p>
        </div>

        {/* Questions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {paginatedQuestions.map((question: Question) => (
            <Card
              key={question.id}
              className="hover:shadow-lg transition-shadow duration-200"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 text-blue-900">
                      {question.question}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${getLevelColor(
                          question.level
                        )}`}
                      >
                        {question.level.toUpperCase()}
                      </span>
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {question.topic}
                      </span>
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                        {question.pattern}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {question.description}
                </p>

                {/* Complexity */}
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">Time: </span>
                    <code className="bg-gray-100 px-1 py-0.5 text-slate-900 rounded text-xs">
                      {question.time_complexity}
                    </code>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Target className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">Space: </span>
                    <code className="bg-gray-100 px-1 py-0.5 rounded text-slate-900 text-xs">
                      {question.space_complexity}
                    </code>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex items-center space-x-2">
                  <Tag className="h-4 w-4 text-gray-400" />
                  <div className="flex flex-wrap gap-1">
                    {question?.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Companies */}
                <div className="flex items-center space-x-2">
                  <Building2 className="h-4 w-4 text-gray-400" />
                  <div className="flex flex-wrap gap-1">
                    {question.companies.slice(0, 3).map((company, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded"
                      >
                        {company}
                      </span>
                    ))}
                    {question.companies.length > 3 && (
                      <span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded">
                        +{question.companies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Hints */}
                <details className="group">
                  <summary className="cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-800">
                    💡 View Hints ({question.hints.length})
                  </summary>
                  <div className="mt-2 space-y-1">
                    {question.hints.map((hint, index) => (
                      <div
                        key={index}
                        className="text-sm text-gray-600 bg-blue-50 p-2 rounded border-l-4 border-blue-200"
                      >
                        <span className="font-medium">Hint {index + 1}:</span>{" "}
                        {hint}
                      </div>
                    ))}
                  </div>
                </details>

                {/* Action Button */}
                <div className="pt-2">
                  <a
                    href={question.leetcode_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full">
                      Solve on LeetCode
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center items-center">
          {totalPages > 1 && (
            <div className="mt-10 flex justify-center items-center space-x-2">
              <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                Prev
              </Button>

              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === idx + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}

              <Button
                variant="outline"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </div>

        {/* No Results */}
        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No questions found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your filters or search terms
            </p>
            <Button onClick={clearFilters}>Clear all filters</Button>
          </div>
        )}
      </div>
    </div>
  );
}
