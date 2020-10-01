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

<script setup="props" lang="ts">
import {useAppStore} from "@/store";
import {TileButton} from "@/types/application";

declare const props: {
    tile: TileButton;
};

const {STORE_APP, appCount} = useAppStore();

function addTile() {
    STORE_APP({
        address: `localhost:${3000 + appCount}/api`,
        isRunning: true,
    });
}

export {addTile};
</script>

<style scoped></style>
