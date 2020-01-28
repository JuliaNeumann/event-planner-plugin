<template>
    <div id="epp_app">
        <EditTable />
    </div>
</template>

<script>
import EditTable from "./components/EditTable.vue";
import "./assets/css/general_styles.css";

export default {
    name: "App",
    components: {
        EditTable
    }
};
</script>

<style>
#epp_app {
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
