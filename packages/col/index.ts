import {App} from "vue"

import DCol from "./src/col"

DCol.install = (app: App) => {
  app.component(DCol.name, DCol)
}

export default DCol