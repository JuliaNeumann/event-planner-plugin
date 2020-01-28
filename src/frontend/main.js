import Vue from "vue";
import App from "./App.vue";
import AppStatic from "./AppStatic.vue";
import Buefy from "buefy";

Vue.config.productionTip = false;

// custom filters
Vue.filter("timestampToLocalString", function(timestamp) {
    return timestamp ? new Date(timestamp).toLocaleDateString() : "";
});

Vue.use(Buefy, {
    defaultIconPack: "fa"
});

if (document.getElementById("epp_app")) {
    new Vue(App).$mount("#epp_app");
}

if (document.getElementById("epp_app_static")) {
    new Vue(AppStatic).$mount("#epp_app_static");
}
