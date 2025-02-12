import AddressEntry from '../types/AddressEntry';
import Target from '../types/Target';
/**
 * Get possibles that target property match search query.
 *
 * @param {ReadonlyArray<AddressEntry>} dataSource Data source.
 * @param {Target} target Target property.
 * @param {string} query Search query.
 * @returns {AddressEntry[]} Possibles.
 */
declare function getPossibles(dataSource: ReadonlyArray<AddressEntry>, target: Target, query: string): AddressEntry[];
export default getPossibles;
//# sourceMappingURL=getPossibles.d.ts.map