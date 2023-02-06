import { sidebar } from 'vuepress-theme-hope';

export const enSidebar = sidebar({
    '/': [
        '',
        'intro',
        {
            icon: 'discover',
            text: 'Demo',
            prefix: 'demo/',
            link: 'demo/',
            children: 'structure',
        },
        {
            text: 'Articles',
            icon: 'note',
            children: 'structure',
        },
        'slides',
    ],
});
