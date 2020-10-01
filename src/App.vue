<template>
    <div class="bg-gray-800 min-w-screen min-h-screen text-white" id="app">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <router-view />
    </div>
</template>

<script setup lang="ts"></script>
<style scoped>
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
