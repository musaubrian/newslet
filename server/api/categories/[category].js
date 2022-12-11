export default defineEventHandler(async (event) => {
  const { category } = event.context.params;
  const { newsApiKey } = useRuntimeConfig();

  // let uri = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${newsApiKey}`;
  // const { data } = await $fetch(testApi);

  return {
    message: `category selected is ${category}`,
  };
});
