<template>
    <div>
        <h1>single news page</h1>
        <p>Id of {{ name }}</p>

    </div>
</template>

<script setup>
definePageMeta({
    layout: 'news'
})

const { name } = useRoute().params
</script>