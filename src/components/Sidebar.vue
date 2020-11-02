<template>
    <div class="sidebar-wrapper"></div>
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
.sidebar-wrapper {
    width: 5rem;
    height: calc(100vh - 5rem);
    background: transparent;
    position: absolute;
    left: 0;
    top: 5rem;
}
</style>
