import {defaultTheme, defineUserConfig} from "vuepress";


export default defineUserConfig({
    title: 'YiliAdmin',
    description: '一个强大的中台前端解决方案',
    theme: defaultTheme({
        navbar: [
            {text: '指南', link: '/guide/'}
        ],
        sidebar: {
            '/guide/': [
                {
                    text: '指南',
                    children: ['/guide/README.md', '/guide/getting-started.md']
                }
            ]
        },
        repo: 'ilhamtahir/yili-admin-site',
    })
})
