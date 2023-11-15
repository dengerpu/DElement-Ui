declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        default: string;
    };
    message: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    center: {
        type: BooleanConstructor;
        defalut: boolean;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    onclose: {
        type: FunctionConstructor;
        required: false;
    };
}, {
    show: import("vue").Ref<boolean>;
    classs: import("vue").ComputedRef<string[]>;
    styles: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: string;
    };
    message: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    center: {
        type: BooleanConstructor;
        defalut: boolean;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    onclose: {
        type: FunctionConstructor;
        required: false;
    };
}>>, {
    id: string;
    message: string;
    type: string;
    duration: number;
    center: boolean;
    offset: number;
}, {}>;
export default _default;
