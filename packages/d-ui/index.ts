import Button from "@d-ui/button";
import ButtonGroup from "@d-ui/button-group";
import Icon from "@d-ui/icon";
import Row from "@d-ui/row";
import Col from "@d-ui/col"

import { App } from "vue";
const components = [ // 引入所有组件
    Button,
    Icon,
    ButtonGroup,
    Row,
    Col
];
const install = (app: App): void => {
    components.forEach(component => {
        app.component(component.name, component);
    })
}
export default {
    install // 导出install方法
}