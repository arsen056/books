export interface ISearchParams {
  q: string
  searchValue: string
  startIndex: number
  category: string
  orderBy: 'relevance' | 'newest'
  maxResults: number
}