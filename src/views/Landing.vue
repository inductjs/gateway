<template>
  <div class="container text-white">
    <Header />
    <DashboardMenu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DashboardMenu from "../components/DashboardMenu.vue";
import Header from "../components/Header.vue";

export default defineComponent({
  components: {
    DashboardMenu,
    Header
  },

  data() {
    return {
      msg: "hello"
    };
  }
});
</script>

<style scoped>
.landing-page-wrapper {
  background-color: rgb(46, 47, 50);
  width: 100%;
  height: 100vh;
}
</style>
