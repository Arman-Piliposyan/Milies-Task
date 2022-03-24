const WINNING_SUM = 123.4;
/**
@param {Array} cartItemsPrices
*/
function doesCartWinPrize(cartItemsPrices) {
	const pricesSum = Number(cartItemsPrices.reduce((sum, price) => {return sum + Number(price)}, 0).toFixed(2));
	return pricesSum === WINNING_SUM?true:false;
}

module.exports = doesCartWinPrize;