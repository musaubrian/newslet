// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'Newslett',
            meta: [
                {name: 'description', content: 'Get your news minus the ads'}
            ],
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]
        }
    },
    runtimeConfig: {
        newsApiKey: process.env.NEWS_API_KEY      
    }
})
