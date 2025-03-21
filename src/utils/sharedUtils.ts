// This file contains utility functions that can be used on both client and server
// No 'use client' directive - making it importable from any context

import { Article } from "../types/Article";

// Function moved from articleUtils.ts to resolve client/server boundary issues
export function structureArticleFromRaw(raw: string): Article | null {
  try {
    if (!raw || raw.trim() === '') return null;

    // Regular expression to extract title and sections
    const titleMatch = raw.match(/# (.*?)(?:\r?\n|$)/);
    const title = titleMatch ? titleMatch[1].trim() : null;

    // If no title, this isn't a valid article format
    if (!title) return null;

    // Split into sections
    const sections = [];
    const sectionRegex = /## (.*?)(?:\r?\n)([\s\S]*?)(?=## |$)/g;
    let match;

    while ((match = sectionRegex.exec(raw)) !== null) {
      const sectionTitle = match[1].trim();
      const content = match[2].trim();
      
      if (sectionTitle && content) {
        sections.push({
          title: sectionTitle,
          content
        });
      }
    }

    // Validation - need title and at least one section
    if (title && sections.length > 0) {
      return {
        title,
        sections
      };
    }
    
    return null;
  } catch (error) {
    console.error("Error structuring article:", error);
    return null;
  }
}