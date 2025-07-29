<template>
    <div class="faq">
        {{ title }}
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = ref<string>('Vue.js Page');
</script>

<style scoped>
.faq {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(14, 103, 55);
}
</style>