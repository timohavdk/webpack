import './style.scss'
import {createApp} from "vue";
import main from "./component/main.vue";

const container = document.createElement('div');
container.id = 'app';
document.body.appendChild(container);

const app = createApp(main);
app.mount('#app');
