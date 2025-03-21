export interface ArticleSection {
  title: string;
  content: string;
}

export interface Article {
  title: string;
  sections: ArticleSection[];
}