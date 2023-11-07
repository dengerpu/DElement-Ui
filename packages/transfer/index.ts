import { App } from "vue"

import Transfer from "./src/transfer.vue"

Transfer.install = (app: App) => {
  app.component(Transfer.name, Transfer);
}

export default Transfer;