module.exports = {
	roots: ['<rootDir>/src'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	collectCoverage: true,
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'./database/seed/stock.json': '<rootDir>/src/database/seed/__mock__/stock.mock.json',
		'./database/seed/transactions.json':
			'<rootDir>/src/database/seed/__mock__/transactions.mock.json'
	}
};
