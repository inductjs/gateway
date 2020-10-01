<template>
  <div
    class="justify-center items-center container justify-center w-screen h-full flex-wrap"
  >
    <div
      class="justify-center w-screen flex-wrap bg-gray-900 p-6 rounded-t-lg font-bold text-white"
    >
      Applications
    </div>
    <div class="w-full w-screen h-64 max-h-screen bg-gray-700 p-6 rounded-b-lg">
      <table class="table-auto">
        <thread>
          <tr>
            <th class="w-1/2 pr-16 py-2">Address</th>
            <th class="w-1/2 py-2">Available</th>
          </tr>
        </thread>

        <tbody :key="app.address" v-for="app in apps">
          <ApplicationCard :app="app" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ApplicationCard from "./ApplicationCard.vue";

export default defineComponent({
  name: "ApplicationBox",
  components: {
    ApplicationCard
  },
  data() {
    return {
      apps: [
        {
          address: "localhost:4000",
          available: true
        },
        {
          address: "localhost:4001",
          available: false
        }
      ]
    };
  }
});
</script>

<style scoped></style>
