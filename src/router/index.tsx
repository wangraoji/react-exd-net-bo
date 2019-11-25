import Page1 from '@/views/page1';
import Page2 from '@/views/page2';

const routes = [
    {
        path: "/1",
        name: "测试A",
        exact: true,
        component: Page1,
    },
    {
        path: "/2",
        name: "测试B",
        component: Page2,
    }
];

export default routes;

