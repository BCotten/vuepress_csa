import { defineUserConfig } from 'vuepress';
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
});
