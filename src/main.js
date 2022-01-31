import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import { plugin as dialogPlugin } from "gitart-vue-dialog";
import "gitart-vue-dialog/dist/style.css";
createApp(App)
  .use(store)
  .use(router)
  .use(dialogPlugin)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyDQB3QcRFQSQFoJSubx4AvoQl5_QYohIkg",
    },
  })
  .mount("#app");
