<template>
    <div class="flex flex-col items-center justify-center">
        <div class="flex md:flex-col  bg-slate-300 mt-4 w-full md:w-5/6 rounded-lg p-3">
            <div class="inline-flex items-center justify-around w-full">
                <h1 class="text-gray-700 text-2xl font-bold text-center">Categories </h1>
                <span class="material-icons cursor-pointer md:hidden" @click="isActive = !isActive">menu</span>
            </div>
            <div class="hidden md:inline-flex items-center justify-center mt-3">
                <span class="categories" @click="updateCategory('technology')">Technology</span>
                <span class="categories" @click="updateCategory('sports')">Sports</span>
                <span class="categories" @click="updateCategory('business')">Business</span>
                <span class="categories" @click="updateCategory('entertainment')">Entertainment</span>
                <span class="categories" @click="updateCategory('health')">Health</span>
                <span class="categories" @click="updateCategory('science')">Science</span>
            </div>

        </div>
        <div class="md:hidden flex flex-col justify-center items-center bg-slate-200 mt-2 w-full md:5/6 rounded-lg py-3 text-lg"
            v-if="isActive">
            <span class="categories" @click="updateCategory('technology')">Technology</span>
            <span class="categories" @click="updateCategory('business')">Business</span>
            <span class="categories" @click="updateCategory('entertainment')">Entertainment</span>
            <span class="categories" @click="updateCategory('health')">Health</span>
            <span class="categories" @click="updateCategory('science')">Science</span>
            <span class="categories" @click="updateCategory('sports')">Sports</span>

        </div>
        <div class="grid md:grid-cols-2 gap-4 grid-cols-1 my-3">
            <div v-for="article in articles" :key="article.title"
                class="bg-slate-200 text-center rounded-lg overflow-hidden my-2 shadow-lg">
                <NewsCard :article="article" />
            </div>
        </div>
    </div>

</template>

<script setup>
const { newsApiKey } = useRuntimeConfig();

const isActive = ref(false);
const selectedCategory = ref('general')
let articles = [];
const randomKey = Math.random();

const authHeaders = {
    headers: {
        Authorization: newsApiKey,
    },
};

const uri = `https://newsapi.org/v2/top-headlines?category=${selectedCategory.value}&language=en`

const { data } = await useFetch(uri, authHeaders);
articles = data.value.articles

// const updateCategory = async (category) => {
//     console.log("selected", category)
//     const { data } = await useFetch(uri, authHeaders, { key: randomKey });
//     articles = data.value.articles
// }

</script>