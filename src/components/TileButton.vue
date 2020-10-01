<template>
    <button
        class="flex justify-center items-center bg-gray-900 hover:bg-gray-700 m-5 w-64 h-40 rounded"
        @click="addTile"
    >
        <div class="text-3xl ml-3">
            <span class="iconify" :data-icon="tile.icon" />
        </div>
        <div>
            {{ tile.name }}
        </div>
    </button>
</template>

<script setup lang="ts">
import {useAppStore} from "@/store";

declare const props: {
    tile: {name: string; path: string; icon: string};
};

const appStore = useAppStore();

function addTile() {
    appStore.STORE_APP({
        address: `localhost:${3000 + appStore.appCount}/api`,
        isRunning: true,
    });
}

export {addTile};

export default {
    name: "TileButton",
    props: ["tile"],
};
</script>

<style scoped></style>
