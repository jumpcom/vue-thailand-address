import filter from 'array-filter';

import AddressEntry from '#/AddressEntry';
import Target from '#/Target';
import calculateSimilarity from '@utils/calculateSimilarity';
import translateTarget from '@utils/translateTarget';

/**
 * Get possibles that target property match search query.
 *
 * @param {AddressEntry[]} dataSource Data source.
 * @param {Target} target Target property.
 * @param {string} query Search query.
 * @returns {AddressEntry[]} Possibles.
 */
function getPossibles(dataSource: AddressEntry[], target: Target, query: string): AddressEntry[] {
	dataSource = dataSource.slice(0); // Prevent mutate the original data source. Clone it!

	const key = translateTarget(target);
	const pattern = new RegExp(`^${query}`);
	const possibles: AddressEntry[] = filter(dataSource, (item: AddressEntry) => (item[key] ? pattern.test(`${item[key]}`) : false));
	possibles.sort((a, b) => {
		let aSimilarity = calculateSimilarity(query, a);
		let bSimilarity = calculateSimilarity(query, b);

		return bSimilarity - aSimilarity;
	});

	return possibles;
}

export default getPossibles;
