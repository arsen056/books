export interface ISearchParams {
  searchValue: string
  startIndex: number
  category: string
  orderBy: 'relevance' | 'newest'
  maxResults: number
}