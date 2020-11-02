<template>
    <div>
        <section
            class="flex flex-wrap justify-center items-center mb-5 sec-tile-buttons w-screen grid-cols-2 grid-rows-2"
        >
            <div :key="tile.name" v-for="tile in tiles">
                <!-- <TileButton :tile="tile" /> -->
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
// import TileButton from "./TileButton.vue";

export default {
    name: 'DashboardMenu',
    components: {
        // TileButton,
    },
};

const tiles = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'mdi-account',
    },
    {
        name: 'Create',
        path: '/create',
        icon: 'mdi-account',
    },
];

export {tiles};
</script>

<style scoped></style>
