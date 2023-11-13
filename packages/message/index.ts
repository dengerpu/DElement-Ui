import Message from "./src/message";
import { App } from "vue"

(Message as any).install = (app: App) => {
  // vue3中全局应用 
  app.config.globalProperties.$message = Message
}

export default Message