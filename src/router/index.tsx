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
        path: "/demo",
        name: "antd组件示例",
        icon: "dashboard",
        subMen: [
            {
                path: "/table-demo",
                name: "表格deom",
                component: asyncComponent(() => import("@/views/demos/table")),
            },
            {
                path: "/xx-two",
                name: "选项2",
            },
        ],
    },
    {
        path: "/doc",
        name: "文档",
        icon: "ordered-list",
        subMen: [
            {
                path: "/node+mongodb",
                name: "node+mongodb",
                component: asyncComponent(() => import("@/views/docs/nodeMongoDB")),
            },
            {
                path: "/xx-five",
                name: "选项5",
            },
        ],
    },
];

export default routes;

