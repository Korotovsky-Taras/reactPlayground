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