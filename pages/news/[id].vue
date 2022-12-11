<template>
    <div>
        <h1>single news page</h1>
        <p>Id of {{ id }}</p>

    </div>
</template>

<script setup>
definePageMeta({
    layout: 'news'
})

const { id } = useRoute().params
</script>