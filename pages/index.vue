<template>
    <div class="flex flex-col items-center justify-center">
        <div class="flex md:flex-col  bg-slate-300 mt-4 w-5/6 md:w-4/6 rounded-lg p-3">
            <div class="inline-flex items-center justify-around w-full">
                <h1 class="text-gray-700 text-2xl font-bold text-center">Categories</h1>
                <span class="material-icons cursor-pointer md:hidden" @click="isActive = !isActive">menu</span>
            </div>
            <div class="hidden md:inline-flex items-center justify-center mt-3">
                <span class="categories">Technology</span>
                <span class="categories">Sports</span>
                <span class="categories">Business</span>
                <span class="categories">Entertainment</span>
                <span class="categories">Health</span>
                <span class="categories">Science</span>
            </div>

        </div>
        <div class="flex flex-col justify-center items-center bg-slate-200 mt-2 w-5/6 md:4/6 rounded-lg py-3 text-lg"
            v-if="isActive">
            <span>Technology</span>
            <span>Business</span>
            <span>Entertainment</span>
            <span>Health</span>
            <span>Science</span>
            <span>Sports</span>

        </div>
        <div class="grid grid-cols-3 gap-2">
            <div v-for="article in articles" :key="article.name">
                <h1>article.title</h1>
                <p>article.description</p>
            </div>
        </div>
        <div>data content: {{ articles }}</div>
    </div>
</template>
<script setup>

const isActive = ref(false);

const choice = "sports"
const { data: articles } = await useFetch(`/api/categories/${choice}`)
</script>