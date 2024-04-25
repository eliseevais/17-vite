import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
});

// сделать объект запроса
// протипизировать ответ
// запрос необходимо направить в компоненте DecksList, только запрос без
// отрисовки

export const decksApi = {
  getDecks() {
    return instance.get<Array<ResponseDecksType>>(`v2/decks`)
  },
}

// types
export type ResponseDecksType = {
  items: [
    {
      author: {
        id: string
        name: string
      }
      id: string
      userId: string
      name: string
      isPrivate: boolean
      cover: string
      created: string
      updated: string
      cardsCount: number
    }
  ]
  pagination: {
    currentPage: number
    itemsPerPage: number
    totalPages: number
    totalItems: number
  }
}