import Vue, { PluginObject } from 'vue';
import AddressEntry from './types/AddressEntry';
import AddressModel from './types/AddressModel';
import Target from './types/Target';
import DataStore, { defaultStore } from './data/DataStore';
declare const DistrictInput: import("vue/types/vue").ExtendedVue<Vue, {}, {}, {}, {
    label: string;
}>;
declare const ProvinceInput: import("vue/types/vue").ExtendedVue<Vue, {}, {}, {}, {
    label: string;
}>;
declare const SubDistrictInput: import("vue/types/vue").ExtendedVue<Vue, {}, {}, {}, {
    label: string;
}>;
declare const ZipCodeInput: import("vue/types/vue").ExtendedVue<Vue, {}, {}, {}, {
    label: string;
}>;
/**
 * Vue Thailand Address plugin.
 */
declare const plugin: PluginObject<never>;
export { AddressEntry, AddressModel, Target, SubDistrictInput, DistrictInput, ProvinceInput, ZipCodeInput, DataStore, defaultStore };
export default plugin;
//# sourceMappingURL=index.d.ts.map