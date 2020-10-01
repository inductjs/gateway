<template>
  <div class="container text-white">
    <Header />
    <DashboardMenu />
    <ApplicationBox />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DashboardMenu from "../components/DashboardMenu.vue";
import Header from "../components/Header.vue";
import ApplicationBox from "../components/ApplicationBox.vue";

export default defineComponent({
  components: {
    DashboardMenu,
    Header,
    ApplicationBox
  },

  data() {
    return {
      msg: "hello"
    };
  }
});
</script>

<style scoped></style>
