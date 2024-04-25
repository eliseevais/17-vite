import s from './DecksList.module.css';
import { decksApi, ResponseDecksType } from '../decks-api.ts';
import { useDispatch } from 'react-redux';


export const setDecksAC = (decks: Array<ResponseDecksType>) => (
  {type: 'SET-DECKS', decks} as const);

export const DecksList = () => {
  const dispatch = useDispatch();
  const fetchDecksTS = () => {
    decksApi.getDecks()
      .then(response => {
        dispatch(setDecksAC(response.data))
      })
  }
  return <ul className={s.list}></ul>
}
