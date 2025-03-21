import { Article } from "../types/Article";

// Function to format an article object into markdown text
export function formatArticle(article: Article): string {
  if (!article || !article.title || !article.sections || article.sections.length === 0) {
    return '';
  }

  let markdown = `# ${article.title}\n\n`;

  for (const section of article.sections) {
    markdown += `## ${section.title}\n${section.content}\n\n`;
  }

  return markdown;
}