import { ADD_CARD } from "./types";


export const addCard = (card) => dispatch =>{
    console.log("Card-Action");
    console.log(card);
    const state = {
        type: ADD_CARD, 
        payload: card
    }
    dispatch(state);
   
} 