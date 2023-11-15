import { PropType } from "vue";
type justifyType = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    justify: {
        type: PropType<justifyType>;
        vaildator: (val: string) => boolean;
        default: string;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    justify: {
        type: PropType<justifyType>;
        vaildator: (val: string) => boolean;
        default: string;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
    gutter: number;
    justify: justifyType;
    align: string;
}, {}>;
export default _default;
