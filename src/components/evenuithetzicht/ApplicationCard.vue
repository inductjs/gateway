<template>
    <tr>
        <td class="text-white py-2">
            {{ app.address }}
        </td>
        <td class="py-2">
            {{ app.isRunning }}
        </td>
    </tr>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    props: ['app'],
    data() {
        return {};
    },
});
</script>

<style scoped></style>
