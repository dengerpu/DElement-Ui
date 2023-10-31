import {App} from "vue"

import DRow from "./src/row"

DRow.install = (app: App) => {
  app.component(DRow.name, DRow)
}

export default DRow