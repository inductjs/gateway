<template>
    <div
        class="justify-center items-center container justify-center w-screen h-full flex-wrap"
    >
        <div
            class="justify-center w-screen flex-wrap bg-gray-900 p-6 rounded-t-lg font-bold text-white"
        >
            Applications
        </div>
        <div
            class="w-full w-screen h-64 max-h-screen bg-gray-700 p-6 rounded-b-lg"
        >
            <table class="table-auto">
                <tbody :key="app.address" v-for="app in apps">
                    <ApplicationCard :app="app" />
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import ApplicationCard from "./ApplicationCard.vue";
import {useAppStore} from "../store";

export default {
    name: "ApplicationBox",
    components: {
        ApplicationCard,
    },
};

const appStore = useAppStore();
const apps = appStore.apps;

export {apps};
</script>

<style scoped></style>
