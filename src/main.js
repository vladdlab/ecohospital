import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./css/main.css";

const app = createApp(App);
const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, "$1");

  app.component(componentName, componentConfig.default || componentConfig);
});

app.use(store).mount("#app");
