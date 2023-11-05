import { App } from "vue"
import checkBoxGroup from "../checkbox/src/checkboxGroup.vue"

checkBoxGroup.install = (app: App) => {
  app.component(checkBoxGroup.name, checkBoxGroup)
}

export default checkBoxGroup