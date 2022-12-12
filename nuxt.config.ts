// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'Newslet | news',
            meta: [
                { charset: 'utf-8' },
                {name: 'description', content: 'Your home for top news for free.'}
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
