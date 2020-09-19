<template>
  <div class="bg-gray-800 min-w-screen min-h-screen text-white" id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <router-view />
  </div>
</template>

<script lang="ts">
// background: rgb(46, 47, 50);
// foreground1: rgb(25,28,32);
// foreground2: rgb(0,0,0);

import Dashboard from "./views/Dashboard.vue";
import Landing from "./views/Dashboard.vue";

export default {
  name: "induct-gateway"
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
