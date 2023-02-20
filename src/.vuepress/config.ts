import { defineUserConfig } from 'vuepress';
import { searchProPlugin } from 'vuepress-plugin-search-pro';
import theme from './theme.js';

export default defineUserConfig({
    base: '/',

    locales: {
        '/': {
            lang: 'en-US',
            title: 'CSA UFV',
            description: 'A blog demo for vuepress-theme-hope',
        },
    },

    theme,

    shouldPrefetch: false,

    plugins: [
        searchProPlugin({
            customFields: [
                
            ],
        }),
    ],
});
