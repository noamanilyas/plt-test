import { transType } from '../core/types';

export const sumTransByType = (allTrans: Array<transType>, type: string) => {
	const items = allTrans.filter((item: transType) => item.type === type);
	if (items.length > 0) {
		return items.map((item: transType) => item.qty).reduce((acc: number, qty: number) => qty + acc);
	}
	return 0;
};
