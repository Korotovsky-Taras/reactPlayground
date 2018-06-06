export const onCardLike = card =>  {
	console.log("card liked " + card);

	return {
		type: "CARD_LIKE",
		payload: card
	}
};

export const onCardRemove = card =>  {
	console.log("card removed " + card);

	return {
		type: "CARD_REMOVE",
		payload: card
	}
};

export const onCardDoubleClick = (card, props) =>  {
	console.log(props);
	// props.match.history.push("/product" + card.id);
};