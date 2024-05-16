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
      const stateCopy = { ...state }
      stateCopy.decks = action.decks
      return stateCopy
    }
    case 'DECKS/ADD-DECK': {
      return {
        ...state,
        decks: [action.deck, ...state.decks],
      }
    }
    default:
      return state
  }
}

export const setDecksAC = (decks: Array<DeckType>) => (
  { type: 'DECKS/SET-DECKS', decks } as const
)
export const addDecksAC = (deck: DeckType) => (
  { type: 'DECKS/ADD-DECK', deck } as const
)


// TYPES
type SetDecksActionType = ReturnType<typeof setDecksAC>;
type AddDecksActionType = ReturnType<typeof addDecksAC>;
type DecksState = typeof initialState;
type DecksActions = SetDecksActionType | AddDecksActionType;
