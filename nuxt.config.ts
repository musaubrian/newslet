// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    app: {
        head: {
            title: 'NewsPulse | news',
            meta: [
                { charset: 'utf-8' },
                {name: 'description', content: 'Get top headlines in bite size form'},
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0'}
            ],
            link: [
                {rel: 'stylesheet', type: 'text/css',
                href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]
        }
    },
    runtimeConfig: {
        public: {
            newsApiKey: process.env.NEWS_API_KEY
        }
    }
})
