import { DeckType } from './decks-a-p-i.ts'

const initialState = {
  decks: [] as DeckType[],
  searchParams: {
    name: '',
  },
}

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'DECKS/SET-DECKS': {
      const stateCopy = {...state};
      stateCopy.decks = action.decks;
      return stateCopy
    }
    default:
      return state
  }
}

export const setDecksAC = (decks: Array<DeckType>) => (
  { type: 'DECKS/SET-DECKS', decks } as const
)


// TYPES
type SetDecksActionType = ReturnType<typeof setDecksAC>;
type DecksState = typeof initialState;
type DecksActions = SetDecksActionType;
