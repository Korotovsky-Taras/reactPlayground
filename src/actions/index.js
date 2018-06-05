export const onLikeCard = card =>  {
	console.log("card liked " + card);

	return {
		type: "CARD_LIKE",
		payload: card
	}
};

export const onRemoveCard = card =>  {
	console.log("card removed " + card);

	return {
		type: "CARD_REMOVE",
		payload: card
	}
};

export const onDoubleClickCard = card =>  {
	console.log("card clicked " + card);

	return {
		type: "CARD_DBLCLICK",
		payload: card
	}
};