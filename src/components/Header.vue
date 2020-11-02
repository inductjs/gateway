<template>
    <header class="app-header">
        <span class="logo" :class="{full: isSidebarMaximized}">
            <img src="../assets/logo.svg" alt="" />
        </span>
    </header>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    data() {
        return {
            isSidebarMaximized: false,
        };
    },
});
</script>

<style scoped>
.app-header {
    background-color: #2b2b37;
    height: 5rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.logo {
    background-color: #393946;
    width: 5rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo > img {
    opacity: 0.5;
}
</style>
