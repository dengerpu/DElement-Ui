import { defineComponent, inject, computed, h } from 'vue';

var DCol = defineComponent({
    name: "DCol",
    //用户属性  tag
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        span: {
            type: Number,
            default: 24
        },
        offset: {
            type: Number,
            default: 0
        }
    },
    setup(props, ctx) {
        //我们已经定好属性  通过计算属性  d-col-span - 5   d-col-offset - 5 
        const gutter = inject('DRow', 0);
        console.log('gutter值', gutter);
        const classs = computed(() => {
            let ret = [];
            const pops = ["span", "offset"];
            pops.forEach((item) => {
                const num = props[item];
                if (typeof num == "number" && num > 0) {
                    ret.push(`d-col-${item}-${num}`);
                }
            });
            return [
                'd-col',
                ...ret
            ];
        });
        // gutter处理
        const styles = computed(() => {
            if (gutter != 0) {
                return {
                    paddingLeft: gutter / 2 + 'px',
                    paddingRight: gutter / 2 + 'px'
                };
            }
            else {
                return {};
            }
        });
        return () => h(props.tag, {
            class: classs.value,
            style: styles.value
        }, ctx.slots.default?.());
    }
});

DCol.install = (app) => {
    app.component(DCol.name, DCol);
};

export { DCol as default };
