'use client';

import { Article } from "../types/Article";
// Import the function from sharedUtils instead of defining it here
import { structureArticleFromRaw } from "./sharedUtils";

export function countWords(text: string): number {
  if (!text) return 0;
  return text.trim().split(/\s+/).length;
}

export function getTotalWordCount(article: Article | null): number {
  if (!article) return 0;
  
  let totalWords = 0;
  
  // Count words in each section
  article.sections.forEach(section => {
    totalWords += countWords(section.content);
  });
  
  return totalWords;
}

// Export the imported function to maintain the same API
export { structureArticleFromRaw };