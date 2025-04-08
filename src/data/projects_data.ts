import {ProjectType} from "../types/project_type.ts";

export const projects_data:ProjectType[] = [
    {
        title: 'Backstage group',
        description: 'Сайт организатора концертов Backstage Group, переживший 3 итерации',
        link: 'https://backstagegroup.ru',
        items: [
            {
                screens: [
                    '/src/assets/images/screens/backstage_5_1.png',
                    '/src/assets/images/screens/backstage_5_2.png'
                ],
                description: 'Многостраничный сайт по продаже билетов с админ-панелью для управления концертами и контентом, динамической генерацией страниц. Реализована возможность для пользователей добавлять отзывы и их модерация, парсеры концертов и отзывов. Интегрированы виджет билетной кассы radario, метрики от Mail.ru, Yandex и Google. Pixel-perfect верстка по макету Figma, SEO-оптимизация и адаптивный дизайн (в том числе под планшеты).',
                stack: 'TypeScript, React, React Router, TailWind, Decap CMS',
                gitLink: 'https://github.com/yanemasson/theatre'
            },
            {
              screens: [
                  '/src/assets/images/screens/backstage_4_1.png',
                  '/src/assets/images/screens/backstage_4_2.png'
              ],
              description: 'Многостраничный сайт по продаже билетов с админ-панелью для управления концертами и ' +
                  'контентом, динамической генерацией страниц, определением геолокации пользователя, интегрированы ' +
                  'виджеты билетной кассы и плейлисты, реализованы кастомные компоненты, парсер концертов, ' +
                  'SEO-оптимизация и адаптивный дизайн, интегрированы метрики от Mail.ru, Yandex и Google. ' +
                  'На данный момент был заменен на новую версию',
              stack: 'TypeScript, React, React Router, TailWind, Decap CMS',
            },
            {
                screens: [
                    '/src/assets/images/screens/backstage_3_1.png',
                ],
                description: 'Одностраничный сайт для продажи билетов, реализованы кастомные компоненты и адаптивный' +
                    ' дизайн, интегрированы метрики от Mail.ru и Yandex. На данный момент заменен на полноценную версию',
                stack: 'TypeScript, React, TailWind',
                gitLink: 'https://github.com/yanemasson/backstagegroup_christmastime_v2'
            },
            {
                screens: [
                    '/src/assets/images/screens/backstage_2_1.png',
                ],
                description: 'Временный одностраничный сайт для продажи билетов, интегрированы метрики от Mail.ru' +
                    'и Yandex. На данный момент заменен на полноценную версию. Был написан за час, ' +
                    'просуществовал один день :)',
                stack: 'TypeScript, React, TailWind',
                gitLink: 'https://github.com/yanemasson/backstagegroup_christmastime'
            },
            {
                screens: [
                    '/src/assets/images/screens/backstage_1_1.jpg',
                ],
                description: 'Многостраничный сайт для продажи билетов, интегрированы метрики от Mail.ru и Yandex,' +
                    'реализованы кастомные компоненты. На данный момент заменен на полноценную версию, репозиторий ' +
                    'не сохранился.',
                stack: 'TypeScript, React, HashRouter, TailWind',
            },
        ]
    },
    {
        title: 'Hatomarano Art',
        link: "https://stalwart-sprinkles-15b968.netlify.app/",
        description: 'Многостраничный сайт-портфолио художника и аниматора с админ-панелью для управления ' +
            'контентом.На данный момент не обновляется ' +
            'владельцем, но все еще существует ¯\\_(ツ)_/¯',
        items: [
            {
                stack: 'TypeScript, React, HashRouter, TailWind, Decap CMS',
                gitLink: "https://github.com/yanemasson/hatomaran",
            }
        ]
    },
]