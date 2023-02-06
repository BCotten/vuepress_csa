import { navbar } from 'vuepress-theme-hope';

export const enNavbar = navbar([
    '/',
    {
        text: 'Events',
        icon: 'discover',
        link: '/events/',
    },
    {
        text: 'Resources',
        icon: 'edit',
        link: '/resources/',
    },
    {
        text: 'Projects',
        icon: 'edit',
        link: '/projects/',
    },
    {
        text: 'Executives',
        icon: 'edit',
        link: '/executives/',
    },
    {
        text: 'Documents',
        icon: 'note',
        link: '/documents/',
    },{
        text: 'Contact',
        icon: 'note',
        link: '/contact/',
    },
]);
