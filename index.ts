import { handlerGetCurrentStocks } from './src/getCurrentStocks';

(async () => {
	const currentLevel = await handlerGetCurrentStocks('CLQ274846/07/46');
	console.log(currentLevel);
})();
