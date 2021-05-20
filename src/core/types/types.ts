export interface stockType {
	sku: string;
	qty: number;
}

export interface stockIntType {
	sku: string;
	stock: number;
}

export interface transType {
	// type: 'order' | 'refund';
	type: string;
	qty: number;
	sku: string;
}
