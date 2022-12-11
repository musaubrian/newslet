export default defineEventHandler(async (event) => {
  const { newsApiKey } = useRuntimeConfig();
  const { category } = event.context.params;
  const requestHeaders = {
    Authentication: newsApiKey,
  };
  let uri = `https://newsapi.org/v2/top-headlines?category=${category}&language=en`;
  const { data } = $fetch(uri, requestHeaders);
  return {
    data,
  };
});
