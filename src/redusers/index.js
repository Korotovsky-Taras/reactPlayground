import {combineReducers} from "redux";
import CardsRedusers from "./card"

const allRedusers = combineReducers({
	cards: CardsRedusers,
});

export default allRedusers;
