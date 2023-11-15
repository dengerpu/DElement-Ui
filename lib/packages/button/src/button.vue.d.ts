import { PropType } from "vue";
type buttonType = "primary" | "success" | "danger" | 'info' | "text" | "warning";
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<buttonType>;
        vaildator: (val: string) => boolean;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    plain: BooleanConstructor;
    round: BooleanConstructor;
    circle: BooleanConstructor;
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
}, {
    classes: import("vue").ComputedRef<(string | {
        "is-plain": boolean;
        "is-round": boolean;
        "is-circle": boolean;
        "is-loading": boolean;
        "is-disabled": boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<buttonType>;
        vaildator: (val: string) => boolean;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    plain: BooleanConstructor;
    round: BooleanConstructor;
    circle: BooleanConstructor;
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
}>>, {
    type: buttonType;
    icon: string;
    plain: boolean;
    round: boolean;
    circle: boolean;
    loading: boolean;
    disabled: boolean;
}, {}>;
export default _default;
