import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import router from "./router";
import usePrime from "./plugins/prime";
import "./styles/index.css";
import smoothscroll from 'smoothscroll-polyfill';  //for safari scrollTop

smoothscroll.polyfill(); //use smoothscroll
const app = usePrime(createApp(App).use(store).use(router))
app.mount('#app')
