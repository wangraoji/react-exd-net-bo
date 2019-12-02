// 引入按需加载
import asyncComponent from '@/components/asyncComponent';

const routes = [
    {
        path: "/home",
        name: "首页",
        icon: "home",
        component: asyncComponent(() => import("@/views/home")),
    },
    {
        path: "/menuone",
        name: "菜单一",
        icon: "mail",
        subMen: [
            {
                path: "/table-demo",
                name: "表格deom",
                component: asyncComponent(() => import("@/views/page1")),
            },
            {
                path: "/xx-two",
                name: "选项2",
                component: asyncComponent(() => import("@/views/page2")),
            },
        ],
    },
    {
        path: "/xx-three",
        name: "选项3",
        icon: "mail",
    },
    {
        path: "/menutwo",
        name: "菜单二",
        icon: "mail",
        subMen: [
            {
                path: "/xx-four",
                name: "选项4",
            },
            {
                path: "/xx-five",
                name: "选项5",
            },
        ],
    },
];

export default routes;

