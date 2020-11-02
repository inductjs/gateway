<template>
    <div class="min-w-screen min-h-screen text-white" id="app">
        <Header />
        <Sidebar />
        <router-view />
    </div>
</template>

<script lang="ts">
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import {defineComponent} from 'vue';

export default defineComponent({
    components: {
        Header,
        Sidebar,
    },
});
</script>
<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Barlow', sans-serif;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
    background-color: #22222d !important ;
    min-height: 100vh;
}
</style>
