<template>
    <div class="flex flex-col items-center justify-center">
        <div class="flex flex-col justify-center items-center  bg-slate-300 mt-4 w-full md:w-5/6 rounded-lg p-3">
            <div class="inline-flex items-center justify-evenly w-full px-2">
                <h1 class="text-gray-700 full text-2xl font-bold text-center">Category</h1>
            </div>
            <div class="md:w-3/6 mt-2 w-full inline-flex justify-center items-center">
                <select name="categories" id="categories"
                    class="ml-2 p-1 bg-transparent text-center w-full border-2 capitalize rounded-lg border-sky-600 text-xl text-gray-700 font-semibold">
                    <option value="general" selected class="options">general</option>
                    <option value="sports" class="options">sports</option>
                    <option value="business" class="options">business</option>
                    <option value="health" class="options">health</option>
                    <option value="science" class="options">science</option>
                    <option value="technology" class="options">technology</option>
                    <option value="etnertainment" class="options">entertainment</option>
                </select>
            </div>

        </div>
        <div v-if="pending"
            class="text-xl font-semibold text-orange-400 text-center h-[50vh] flex items-center justify-center">
            <h1>Be patient as we fetch your news...</h1>
        </div>
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

const isActive = ref(false);
let selectedCategory = ref('general')

let articles = [];

const authHeaders = {
    headers: {
        Authorization: newsApiKey,
    },
};

const updateCategory = (category) => {
    selectedCategory.value = category
    return category;
}

const uri = `https://newsapi.org/v2/top-headlines?category=${selectedCategory.value}&language=en`

const { data, pending } = await useFetch(uri, authHeaders, { key: selectedCategory.value });
articles = data.value.articles



</script>