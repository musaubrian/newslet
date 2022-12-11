export default defineEventHandler(async (event) => {
  const { newsApiKey } = useRuntimeConfig();
  const { category } = event.context.params;
  let uri = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${newsApiKey}`;
  const { data } = $fetch(uri);
  return {
    data,
  };
});
