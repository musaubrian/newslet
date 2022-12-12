<template>
    <img v-if="article.urlToImage" :src=article.urlToImage alt="news thumbnail" class="images">
    <img v-else src="../assets/images/notfound.png" class="images" />
    <div class="px-5 my-3">
        <h1 class="
            text-gray-700 font-semibold text-xl">{{ article.title }}</h1>
        <div class="text-justify px-1 flex flex-col justify-center items-center my-2 ">
            <p class="text-lg text-gray-700">{{ article.description }}</p>
            <a :href=article.url target="_blank"
                class="bg-sky-500 rounded-md font-semibold text-lg p-3 my-2  text-gray-100">
                Keep reading
            </a>

        </div>
    </div>
</template>

<script setup>
const { article } = defineProps(['article'])

</script>
