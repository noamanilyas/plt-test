import stocks from './database/seed/stock.json';
import trans from './database/seed/transactions.json';
import { sumTransByType } from './functions';
import { stockIntType, stockType, transType } from './core/types';

export const handlerGetCurrentStocks = (sku: string): Promise<stockType> => {
	return new Promise((resolve, reject) => {
		let skuIntialStock = stocks.find((item: stockIntType) => item.sku === sku);
		const allTransactions = trans.filter((item: transType) => item.sku === sku);
		let orderedQty = 0,
			refundQty = 0;

		if (allTransactions.length > 0) {
			orderedQty = sumTransByType(allTransactions, 'order');
			refundQty = sumTransByType(allTransactions, 'refund');
		}

		if (!skuIntialStock && allTransactions.length) {
			resolve({
				sku,
				qty: refundQty - orderedQty
			});
		} else if (skuIntialStock) {
			resolve({
				sku,
				qty: skuIntialStock.stock - orderedQty + refundQty
			});
		}
		reject({ error: 'Not Exists' });
	});
};
