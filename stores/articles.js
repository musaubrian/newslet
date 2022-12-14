import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/nuxt";

export const useArticlesStore = defineStore("articles", {
  state: () => ({
    articles: [],
    selectedCategory: useLocalStorage("selectedCategory", "business"),
    fetching: false,
    fetchError: false,
  }),
  getters: {
    async fetchArticles() {
      const { newsApiKey } = useRuntimeConfig();
      const authHeaders = {
        headers: {
          Authorization: newsApiKey,
        },
      };
      const uri = `https://newsapi.org/v2/top-headlines?category=${this.selectedCategory}&language=en`;
      const { data, pending, error, refresh } = await useFetch(
        uri,
        authHeaders,
        {
          key: this.selectedCategory,
        }
      );
      refresh();
      this.articles = data.value.articles;
      this.fetchError = error;
      this.fetching = pending;
    },
  },
  actions: {
    updateCategory() {
      //run the fetch function with updated category
      this.fetchArticles;
    },
  },
});
