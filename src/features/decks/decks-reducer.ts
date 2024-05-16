import { DeckType } from './decks-a-p-i.ts'

const initialState = {
  decks: [] as DeckType[], // todo: add type
  searchParams: {
    name: '',
  },
}

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS': {
      const stateCopy = {...state};
      stateCopy.decks = [...action.decks];
      return stateCopy
    }
    default:
      return state
  }
}

export const setDecksAC = (decks: Array<DeckType>) => (
  { type: 'SET-DECKS', decks } as const
)


// TYPES
type DecksState = typeof initialState;
type SetDecksActionType = ReturnType<typeof setDecksAC>
type DecksActions = SetDecksActionType;
