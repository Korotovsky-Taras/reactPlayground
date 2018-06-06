import {combineReducers} from "redux";
import CardsRedusers from "./cards"

const allRedusers = combineReducers({
	cards: CardsRedusers
});

export default allRedusers;
