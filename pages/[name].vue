<template>
    <div>
        page of the name
        {{ name }}
    </div>
</template>

<script setup>

const { name } = useRoute().params

useHead({
    title: `Newlett | ${name}`,
    meta: [
        { name: 'description', content: 'Page Description' },
        { name: 'keywords', content: 'Page Name' },
    ]
})

</script>
