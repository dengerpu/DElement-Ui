declare const _default: import("vue").DefineComponent<{
    data: {
        type: ArrayConstructor;
        default: () => any[];
    };
    props: {
        type: ObjectConstructor;
    };
}, {
    labelProps: import("vue").ComputedRef<any>;
    keyProps: import("vue").ComputedRef<any>;
    disabledPorps: import("vue").ComputedRef<any>;
    handleChange: (val: any) => void;
    checked: import("vue").Ref<any[]>;
    allCheck: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "checkChange"[], "checkChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: ArrayConstructor;
        default: () => any[];
    };
    props: {
        type: ObjectConstructor;
    };
}>> & {
    onCheckChange?: (...args: any[]) => any;
}, {
    data: unknown[];
}, {}>;
export default _default;
