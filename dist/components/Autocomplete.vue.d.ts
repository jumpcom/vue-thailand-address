import { Vue } from 'vue-property-decorator';
import AddressEntry from '../types/AddressEntry';
import Target from '../types/Target';
export default class Autocomplete extends Vue {
    query: string;
    items: AddressEntry[];
    target: Target;
    maxHeight: number;
    itemCount: number;
    selectedIndex: number;
    onSelectedIndexChange(newIndex: number): void;
    get autocompleteStyle(): {
        maxHeight: string;
        listStyle: string;
        margin: number;
        overflowY: string;
        padding: number;
        position: string;
        width: string;
        zIndex: number;
    };
    get autocompleteListStyle(): {
        height: string;
        cursor: string;
    };
    get hasData(): boolean;
    get itemList(): {
        data: AddressEntry;
        text: string;
    }[];
    onItemClick(item: AddressEntry): void;
    changeSelectedIndex(index: number): void;
}
//# sourceMappingURL=Autocomplete.vue.d.ts.map