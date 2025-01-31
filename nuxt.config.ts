export default defineNuxtConfig({
  site: {
    url: 'https://GeorgeNance.com',
    name: 'George Nance',
    description: 'George Nance is a software engineer, writer, and creator. He writes about software development, productivity, and personal growth.',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  routeRules: {
    '/delete-untracked-files-git': { redirect: '/articles/delete-untracked-files-git' },
    '/being-productive-programmer-adhd': { redirect: '/articles/being-productive-programmer-adhd', },
    '/latest': { redirect: '/articles' },
    '/about': { redirect: '/' },
    '/contact': { redirect: '/' },
    '/write-more-css': { redirect: '/articles/write-more-css' },
    '/dont-use-frontmatter-markdown-files-gatsby': { redirect: '/articles/dont-use-frontmatter-markdown-files-gatsby' },

  },
  css: ['~/assets/css/main.css'],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  colorMode: {
    classSuffix: ''
  },
  modules: [
    // "@nuxt/ui",
    '@nuxtjs/tailwindcss',
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxthq/studio",
    "@vueuse/nuxt",
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-gtag'
  ],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased text-slate-500 dark:text-slate-400 min-h-screen h-full dark:bg-slate-900 bg-white ",
      },
    },
  },
  content: {
    highlight: {
      theme: "github-dark",
    },

    markdown: {
      remarkPlugins: ['remark-reading-time'],
    },
  },
  image: {
    format: ['webp']
  },
  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },
});