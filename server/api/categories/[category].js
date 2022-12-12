export default defineEventHandler(async (event) => {
  const { newsApiKey } = useRuntimeConfig();
  const authHeaders = {
    headers: {
      Authorization: newsApiKey,
    },
  };
  const { category } = event.context.params;
  let uri = `https://newsapi.org/v2/top-headlines?category=${category}&language=en`;
  const { data } = $fetch(uri, authHeaders);

  return {
    data,
    uri,
  };
});
