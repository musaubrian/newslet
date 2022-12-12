<template>
    <div class="flex flex-col items-center justify-center">
        <Categories />
        <div class="grid md:grid-cols-2 gap-2 mt-3 grid-cols-1">
            <NewsCard :articles="articles" />
        </div>
    </div>
</template>
<script setup>
const { newsApiKey } = useRuntimeConfig();


const category = ref('technology')

const authHeaders = {
    headers: {
        Authorization: newsApiKey,
    },
};

const uri = `https://newsapi.org/v2/top-headlines?category=${category.value}&language=en`

const { data } = await useFetch(uri, authHeaders);
const articles = data.value.articles
console.log(uri)
console.log(articles)

</script>