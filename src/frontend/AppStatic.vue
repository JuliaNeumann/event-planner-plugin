<template>
    <div id="epp_app_static">
        <StaticTable />
    </div>
</template>

<script>
import StaticTable from "./components/StaticTable.vue";
import "./assets/css/general_styles.css";

export default {
    name: "App",
    components: {
        StaticTable
    }
};
</script>

<style>
#epp_app_static {
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 100%;
  width: 100%;
}

#epp_app_static_wrapper {
  max-width: 100%;
  width: 100%;
}
</style>
