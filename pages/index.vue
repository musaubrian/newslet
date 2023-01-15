<template>
    <div class="flex flex-col items-center justify-center">
        <div class="flex flex-col justify-center items-center  bg-slate-300 mt-4 w-full md:w-5/6 rounded-lg p-3">
            <div class="inline-flex items-center justify-evenly w-full px-2">
                <h1 class="text-gray-700 full text-2xl font-bold text-center">Category</h1>
            </div>
            <div class="md:w-3/6 mt-2 w-full inline-flex justify-center items-center">
                <select name="categories" v-model="category" @change="checkUpdate"
                    class="ml-2 p-1 bg-transparent text-center w-full border-2 capitalize rounded-lg border-sky-600 text-xl text-gray-700 font-semibold">
                    <option value="business" class="options" selected>business</option>
                    <option value="sports" class="options">sports</option>
                    <option value="health" class="options">health</option>
                    <option value="science" class="options">science</option>
                    <option value="technology" class="options">technology</option>
                </select>
            </div>

        </div>
        <Loading v-if="fetchStatus" />
        <FetchError v-if="error" />
        <div class="grid md:grid-cols-2 gap-4 grid-cols-1 my-3">
            <div v-for="article in articlesStore.articles" :key="article.title"
                class="bg-slate-200 text-center rounded-lg overflow-hidden my-2 shadow-lg">
                <NewsCard :article="article" />
            </div>
        </div>
    </div>

</template>

<script>
import { useArticlesStore } from "/stores/articles.js"
export default {
    data() {
        return {
            category: "business",
        }
    },
    methods: {
        checkUpdate() {
            const articlesStore = useArticlesStore();
            articlesStore.selectedCategory = this.category
            articlesStore.updateCategory()
        },
    },
    setup() {
        const articlesStore = useArticlesStore();
        articlesStore.fetchArticles

        const fetchStatus = articlesStore.fetchStatus
        const error = articlesStore.fetchError
        return {
            articlesStore,
            fetchStatus,
            error
        }
    }
}
</script>
