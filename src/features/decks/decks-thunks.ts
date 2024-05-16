import { Dispatch } from 'redux'
import { AddDeckParamsType, decksAPI } from './decks-a-p-i.ts'
import { addDecksAC, setDecksAC } from './decks-reducer.ts'

export const fetchDecksTC = () => (dispatch: Dispatch) => {
  decksAPI.fetchDecks()
    .then((res) => {
      dispatch(setDecksAC(res.data.items))
    })
}

export const addDeckTC = (params: AddDeckParamsType) => (dispatch: Dispatch) => {
  return decksAPI.addDeck(params)
    .then((res) => {
      dispatch(addDecksAC(res.data))
    })
}