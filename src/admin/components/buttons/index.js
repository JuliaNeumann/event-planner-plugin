import Vue from "vue";
import AddButton from "./AddButton.vue";
import DeleteButton from "./DeleteButton.vue";
import SaveButton from "./SaveButton.vue";

// register the buttons globally, as they are used in all the forms
Vue.component("AddButton", AddButton);
Vue.component("DeleteButton", DeleteButton);
Vue.component("SaveButton", SaveButton);