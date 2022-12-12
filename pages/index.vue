<template>
    <div class="flex flex-col items-center justify-center">
        <Categories :selecetedCategory="selectedCategory" />
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


const selectedCategory = ref('sports')

const authHeaders = {
    headers: {
        Authorization: newsApiKey,
    },
};

const uri = `https://newsapi.org/v2/top-headlines?category=${selectedCategory.value}&language=en`

const { data } = await useFetch(uri, authHeaders);
const articles = data.value.articles

</script>