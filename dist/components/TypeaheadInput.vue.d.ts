import { Vue } from 'vue-property-decorator';
import AddressEntry from '../types/AddressEntry';
import Target from '../types/Target';
import DataStore from '../data/DataStore';
export default class TypeaheadInput extends Vue {
    value: string;
    store: DataStore;
    target: Target;
    autocompleteMaxHeight: number;
    autocompleteItemCount: number;
    inputClass: string;
    numbered: boolean;
    possibles: AddressEntry[];
    selectedIndex: number;
    created(): void;
    get inputType(): "number" | "text";
    get containerStyle(): {
        position: string;
    };
    get filteredAttrs(): Pick<Record<string, string>, string>;
    get inputClassList(): string[];
    search(query: string): void;
    closeAutocomplete(): void;
    clearAutocomplete(): void;
    moveUp(): void;
    moveDown(): void;
    pickCurrentItem(): void;
    commitItem(item: AddressEntry): void;
}
//# sourceMappingURL=TypeaheadInput.vue.d.ts.map