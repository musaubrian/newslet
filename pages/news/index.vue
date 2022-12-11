<template>
    <div class="grid grid-cols-3 gap-2">
        below here
        <div v-for="article in data" :key="article.name">
            <div>
                <h1>title:{{ article.title }}</h1>
                <p>description: {{ article.description }}</p>
            </div>
        </div>
    </div>
    <div>{{ data }}</div>
</template>

<script setup>
definePageMeta({
    layout: 'news'
})


const { data } = await useFetch('/api/categories/sports')
console.log(data)

</script>