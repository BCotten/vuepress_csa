import { sidebar } from 'vuepress-theme-hope';

export const enSidebar = sidebar({
    '/': [
        '',
        'intro',
        {
            text: 'Events',
            icon: 'date',
            link: '/events/',
        },
        {
            text: 'Resources',
            icon: 'list',
            link: '/resources/',
        },
        {
            text: 'Projects',
            icon: 'build',
            link: '/projects/',
        },
        {
            text: 'Executives',
            icon: 'people',
            link: '/executives/',
        },
        {
            text: 'Documents',
            icon: 'file',
            link: '/documents/',
        },{
            text: 'Contact',
            icon: 'comment',
            link: '/contact/',
        },
    ],
});
