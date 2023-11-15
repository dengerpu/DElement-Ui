declare const _default: import("vue").DefineComponent<{
    indeterminate: BooleanConstructor;
    checked: BooleanConstructor;
    name: StringConstructor;
    disabled: BooleanConstructor;
    label: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    modelValue: (BooleanConstructor | StringConstructor | NumberConstructor)[];
}, {
    model: import("vue").WritableComputedRef<any>;
    isChecked: import("vue").ComputedRef<any>;
    handChange: (e: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    indeterminate: BooleanConstructor;
    checked: BooleanConstructor;
    name: StringConstructor;
    disabled: BooleanConstructor;
    label: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    modelValue: (BooleanConstructor | StringConstructor | NumberConstructor)[];
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
}, {
    indeterminate: boolean;
    checked: boolean;
    disabled: boolean;
}, {}>;
export default _default;
