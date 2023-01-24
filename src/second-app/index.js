import './style.scss'
import {createApp} from "vue";
import main from "./app/main.vue";

const app = createApp(main);
app.mount('#second-app');
