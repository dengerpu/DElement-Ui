import { PropType } from "vue";
import { IDate } from './transfer.type';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<IDate[]>;
    };
    props: {
        type: ObjectConstructor;
    };
    modelValue: {
        type: ArrayConstructor;
    };
}, {
    leftState: import("vue").Ref<any[]>;
    rightState: import("vue").Ref<any[]>;
    sourceCheckChange: (leftValue: any) => void;
    targteCheckChange: (rightValue: any) => void;
    leftClick: () => void;
    rightClick: () => void;
    propkey: import("vue").ComputedRef<any>;
    sourceData: import("vue").ComputedRef<any>;
    targetData: import("vue").ComputedRef<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<IDate[]>;
    };
    props: {
        type: ObjectConstructor;
    };
    modelValue: {
        type: ArrayConstructor;
    };
}>>, {}, {}>;
export default _default;
