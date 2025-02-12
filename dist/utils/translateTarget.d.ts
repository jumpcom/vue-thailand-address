import AddressEntry from '../types/AddressEntry';
import Target from '../types/Target';
declare type AddressEntryKeys = Exclude<keyof AddressEntry, 'district_code' | 'amphoe_code' | 'province_code'>;
/**
 * Translate target to `AddressEntry` property name.
 *
 * @export
 * @param {Target} target Target
 * @returns {AddressEntryKeys}
 */
export default function translateTarget(target: Target): AddressEntryKeys;
export {};
//# sourceMappingURL=translateTarget.d.ts.map