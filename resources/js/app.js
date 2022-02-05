require("./bootstrap");
import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

window.Vue = require("vue").default;
Vue.config.productionTip = false;

new Vue({
    el: "#app",
});
