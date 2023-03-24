import { sidebar } from 'vuepress-theme-hope';

export const enSidebar = sidebar({
    '/': [
        '',
        'intro',
        {
            text: 'Events',
            icon: 'date',
            prefix: 'events/',
            collapsible: true,
            children: [
                "README.md",
                "upcoming.md",
                "events2023.md",
                "events2022.md",
            ]
        },
        {
            text: 'Resources',
            icon: 'list',
            prefix: 'resources/',
            collapsible: true,
            children: [
                "README.md",
            ]
        },
        {
            text: 'Projects',
            icon: 'build',
            prefix: 'projects/',
            collapsible: true,
            children: [
                "README.md",
                "sample.md",
            ]
        },
        {
            text: 'Documents',
            icon: 'file',
            prefix: 'documents/',
            collapsible: true,
            children: [
                "README.md",
                "constitution.md",
                "minutes2023.md",
                "minutes2022.md",
            ]
        },
        {
            text: 'Executives',
            icon: 'people',
            prefix: 'executives/',
            collapsible: true,
            children: [
                "README.md",
                "exec2023.md",
                "exec2022.md",
            ]
        },
        {
            text: 'Contact',
            icon: 'comment',
            link: '/contact/',
        },
    ],
});
