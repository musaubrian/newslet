<template>
    <div v-for="article in data" :key="article.name">
        <div>
            <h1>title:{{ article.title }}</h1>
            <p>description: {{ article.description }}</p>
        </div>
    </div>
    <div>{{ data }}</div>

</template>

<script setup>

const { data } = await useFetch('/api/categories/sports')
console.log(data.value)
</script>
