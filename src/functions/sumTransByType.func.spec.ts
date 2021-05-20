import { sumTransByType } from './sumTransByType.func';

describe('handler', () => {
	it('will return a valid number if type exists', async () => {
		let object = [
			{ sku: 'MOCK111', type: 'order', qty: 10 },
			{ sku: 'MOCK111', type: 'refund', qty: 5 }
		];
		expect(await sumTransByType(object, 'order')).toBe(10);
	});

	it('will return 0 if type NOT exists', async () => {
		let object = [{ sku: 'MOCK111', type: 'refund', qty: 5 }];
		expect(await sumTransByType(object, 'order')).toBe(0);
	});
});
