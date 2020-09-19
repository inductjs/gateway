<template>
  <button
    class="flex justify-center items-center bg-gray-900 hover:bg-gray-700 m-5 w-64 h-40 rounded"
  >
    <div class="text-3xl ml-3">
      <span class="iconify" :data-icon="tile.icon" />
    </div>
    <div>
      {{ tile.name }}
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TileButton",
  props: ["tile"]
});
</script>

<style scoped></style>
