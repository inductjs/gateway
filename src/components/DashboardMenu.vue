<template>
  <div>
    <section
      class="flex flex-wrap justify-center items-center mb-5 sec-tile-buttons w-screen grid-cols-2 grid-rows-2"
    >
      <div :key="tile.name" v-for="tile in tiles">
        <TileButton :tile="tile" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TileButton from "./TileButton.vue";

export default defineComponent({
  name: "DashboardMenu",
  components: {
    TileButton
  },

  setup() {
    return {};
  },

  data() {
    return {
      tiles: [
        {
          name: "Dashboard",
          path: "/dashboard",
          icon: "mdi-account"
        },
        {
          name: "Create",
          path: "/create",
          icon: "mdi-account"
        }
      ]
    };
  }
});
</script>

<style scoped></style>
