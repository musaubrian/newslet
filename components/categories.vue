<template>
    <div class="flex md:flex-col  bg-slate-300 mt-4 w-full md:w-5/6 rounded-lg p-3">
        <div class="inline-flex items-center justify-around w-full">
            <h1 class="text-gray-700 text-2xl font-bold text-center">Categories</h1>
            <span class="material-icons cursor-pointer md:hidden" @click="isActive = !isActive">menu</span>
        </div>
        <div class="hidden md:inline-flex items-center justify-center mt-3">
            <span class="categories" @click="choice = 'technology'">Technology</span>
            <span class="categories">Sports</span>
            <span class="categories">Business</span>
            <span class="categories">Entertainment</span>
            <span class="categories">Health</span>
            <span class="categories">Science</span>
        </div>

    </div>
    <div class="flex flex-col justify-center items-center bg-slate-200 mt-2 w-full md:5/6 rounded-lg py-3 text-lg"
        v-if="isActive">
        <span class="categories">Technology</span>
        <span class="categories">Business</span>
        <span class="categories">Entertainment</span>
        <span class="categories">Health</span>
        <span class="categories">Science</span>
        <span class="categories">Sports</span>

    </div>
</template>

<script setup>
const isActive = ref(false);
const { selectedCategory } = defineProps(["selecetedCategory"])
</script>