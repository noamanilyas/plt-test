import { handlerGetCurrentStocks } from './getCurrentStocks';

describe('handler', () => {
	it('is a function', () => {
		expect(handlerGetCurrentStocks).toBeInstanceOf(Function);
	});

	it('will throw an error on invalid sku', async () => {
		expect(handlerGetCurrentStocks('invalidsku')).rejects.toEqual({ error: 'Not Exists' });
	});

	it('will return a valid qyt value', async () => {
		let Obj = { sku: 'MOCK111', qty: 985 };
		expect(await handlerGetCurrentStocks('MOCK111')).toMatchObject(Obj);
	});

	// Item not availabe in stocks but available in trans must return zero. since initial quantity is zero
	it('will return a valid value if NOT available in stock', async () => {
		let Obj = { sku: 'MOCK222', qty: 5 };
		expect(await handlerGetCurrentStocks('MOCK222')).toMatchObject(Obj);
	});

	/**
	 * It is assumed that negative value can be possible in current stock level
	 */
	it('will return error if current level negative', async () => {
		let Obj = { sku: 'MOCK444', qty: -5 };
		expect(await handlerGetCurrentStocks('MOCK444')).toMatchObject(Obj);
	});

	// Item not availabe in trans but available in stocks must return valid qty.
	it('will return a valid qyt value if available in stocks but NOT in trans', async () => {
		expect(await handlerGetCurrentStocks('MOCK333')).toHaveProperty('qty');
	});
});
