import AddressEntry from '../types/AddressEntry';
import AddressModel from '../types/AddressModel';
import Target from '../types/Target';
/**
 * On address value change event handler.
 */
export declare type OnChangeHandler = (newValue: AddressModel) => void;
/**
 * Vue Thailand Address data store.
 *
 * @export
 * @class DataStore
 */
export default class DataStore {
    /**
     * Validate address model value.
     *
     * @static
     * @param {AddressModel} value A value
     * @returns {boolean}
     * @memberof DataStore
     */
    static validateValue(value: AddressModel): boolean;
    /**
     * Address data source.
     *
     * @readonly
     * @type {ReadonlyArray<AddressEntry>}
     * @memberof DataStore
     */
    get dataSource(): ReadonlyArray<AddressEntry>;
    private _currentValue;
    private _valueChangeHandlers;
    /**
     * Creates an instance of `DataStore`.
     *
     * @constructs
     * @memberof DataStore
     */
    constructor();
    /**
     * Current address value.
     *
     * @type {AddressModel}
     * @memberof DataStore
     */
    get value(): AddressModel;
    set value(newValue: AddressModel);
    /**
     * Reset current address value.
     *
     * @memberof DataStore
     */
    resetValue(): void;
    /**
     * Set a value into the target property of current address value.
     *
     * @param {Target} target Target property name
     * @param {string} propValue A value
     * @memberof DataStore
     */
    setValueProp(target: Target, propValue: string): void;
    /**
     * Register handler for listening address value change event.
     *
     * @param {OnChangeHandler} handler A handler
     * @memberof DataStore
     */
    onValueChange(handler: OnChangeHandler): void;
}
export declare const defaultStore: DataStore;
//# sourceMappingURL=DataStore.d.ts.map