<template>
    <div>
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
const choice = "sports"
const { data: articles } = await useFetch(`/api/categories/${choice}`)
</script>