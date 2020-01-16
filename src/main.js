import Vue from "vue";
import App from "@/App";
import "@/assets/css/tailwind.css";
import { VueSpinners } from "@saeris/vue-spinners";
import Chartkick from "vue-chartkick";
import Chart from "chart.js";

import router from "@/router";
import { dollarFilter, percentFilter } from "@/filters";

Vue.config.productionTip = false;

Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart));

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);

new Vue({
	router,
	render: h => h(App)
}).$mount("#app");
