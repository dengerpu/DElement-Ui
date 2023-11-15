import { ICheckBoxProps } from "./checkbox.type";
export declare const useCheckBoxProps: (props: ICheckBoxProps) => {
    model: import("vue").WritableComputedRef<any>;
    isChecked: import("vue").ComputedRef<any>;
    handChange: (e: any) => void;
};
