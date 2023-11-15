export interface ICheckBoxProps {
    name?: string;
    label?: string | boolean | number;
    modelValue: string | boolean | number;
    indeterminate?: boolean;
    disabled?: boolean;
    checked?: boolean;
}
import { ComputedRef } from "vue";
export interface IGroupProvide {
    modelValue?: ComputedRef;
    handChange?: (val: unknown) => void;
}
