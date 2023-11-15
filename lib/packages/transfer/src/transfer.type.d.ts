export type key = string | number;
export type IDate = {
    key: key;
    label: string;
    disabled: boolean;
};
export type Props = {
    key: string;
    label: string;
    disabled: string;
};
export interface ItransferProps {
    data: IDate[];
    modelValue: key[];
    props: Props;
}
