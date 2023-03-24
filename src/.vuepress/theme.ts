import { hopeTheme } from 'vuepress-theme-hope';
import { enNavbar } from './navbar/index.js';
import { enSidebar } from './sidebar/index.js';

export default hopeTheme({
    hostname: 'https://BCotten.github.io',

    author: {
        name: 'CSA',
    },

    iconAssets: 'iconfont',

    logo: '/csaicon.png',

    repo: 'vuepress-theme-hope/vuepress-theme-hope',

    docsDir: 'docs',

    blog: {
        medias: {
            Discord: 'https://discord.gg/nu4kTTR',
            Email: 'mailto: csa.ufv@gmail.com',
            Facebook: 'https://www.facebook.com/UFV.CISSA/',
            GitHub: 'https://github.com/ufvcsa',
            Instagram: 'https://www.instagram.com/ufvcsa/',
            Linkedin: 'https://www.linkedin.com/company/ufvcsa',
            Twitter: 'https://twitter.com/UFVCSA/',
            Youtube: 'https://www.youtube.com/@ufvcsa5064',
        },
    },

    locales: {
        '/': {
            // navbar
            navbar: enNavbar,

            // sidebar
            sidebar: enSidebar,

            footer: 'Default footer',

            displayFooter: true,

            blog: {
                description: 'Computer Student Association',
                intro: '/intro.html',
            },

            metaLocales: {
                editLink: 'Edit this page on GitHub',
            },
        },
    },

    plugins: {
        blog: true,

        // If you don’t need comment feature, you can remove following option
        // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
        // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
        comment: {
            /**
                * Using Giscus
            */
            /* provider: 'Giscus',
            repo: 'vuepress-theme-hope/giscus-discussions',
            repoId: 'R_kgDOG_Pt2A',
            category: 'Announcements',
            categoryId: 'DIC_kwDOG_Pt2M4COD69', */

            /**
             * Using Twikoo
             */
            // provider: "Twikoo",
            // envId: "https://twikoo.ccknbc.vercel.app",

            /**
             * Using Waline
             */
            // provider: "Waline",
            // serverURL: "https://vuepress-theme-hope-comment.vercel.app",

            /**
             * Using artalk
             */
            // provider: "Artalk",
            // site: "artalk-demo",
            // server: "https://demo-artalk.jjdxb.top/",
        },

        // Disable features you don’t want here
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            container: true,
            demo: true,
            echarts: true,
            figure: true,
            flowchart: true,
            gfm: true,
            imgLazyload: true,
            imgSize: true,
            include: true,
            katex: true,
            mark: true,
            mermaid: true,
            playground: {
                presets: ['ts', 'vue'],
            },
            presentation: {
                plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
            },
            stylize: [
                {
                    matcher: 'Recommended',
                    replacer: ({ tag }) => {
                        if (tag === 'em')
                            return {
                                tag: 'Badge',
                                attrs: { type: 'tip' },
                                content: 'Recommended',
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
            vuePlayground: true,
        },

        // uncomment these if you want a PWA
        // pwa: {
        //   favicon: "/favicon.ico",
        //   cacheHTML: true,
        //   cachePic: true,
        //   appendBase: true,
        //   apple: {
        //     icon: "/assets/icon/apple-icon-152.png",
        //     statusBarColor: "black",
        //   },
        //   msTile: {
        //     image: "/assets/icon/ms-icon-144.png",
        //     color: "#ffffff",
        //   },
        //   manifest: {
        //     icons: [
        //       {
        //         src: "/assets/icon/chrome-mask-512.png",
        //         sizes: "512x512",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-mask-192.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //       },
        //     ],
        //     shortcuts: [
        //       {
        //         name: "Demo",
        //         short_name: "Demo",
        //         url: "/demo/",
        //         icons: [
        //           {
        //             src: "/assets/icon/guide-maskable.png",
        //             sizes: "192x192",
        //             purpose: "maskable",
        //             type: "image/png",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // },
    },
});
