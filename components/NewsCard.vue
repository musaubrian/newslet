<template>
    <div v-for="article in articles" class="bg-slate-200 text-center rounded-lg overflow-hidden my-2">
        <img :src=article.urlToImage alt="news thumbnail" class="w-full object-cover h-40">
        <div class="px-3 my-2">
            <h1 class="
            text-gray-700 font-semibold text-xl truncate">{{ article.title }}</h1>
            <p class="text-lg text-gray-700">{{ article.description }}</p>
            <span>Source: <a :href=article.url>source</a></span>
        </div>
    </div>
</template>

<script setup>
const { articles } = defineProps(['articles'])

</script>
