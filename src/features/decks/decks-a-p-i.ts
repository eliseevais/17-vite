import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  fetchDecks() {
    return instance.get<FetchDecksResponseType>(`v2/decks`)
  },
  addDeck(params: AddDeckParamsType) {
    return instance.post<DeckType>(`v1/decks`, params)
  }
}

// types

export type FetchDecksResponseType = {
  items: Array<DeckType>
  pagination: PaginationType
  maxCardsCount: number
}

export type AuthorType = {
  id: string
  name: string
}

export type DeckType = {
  author: AuthorType
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type AddDeckParamsType = {
  name: string
  cover?: string
  isPrivate?: boolean
}


