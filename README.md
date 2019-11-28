### 开始
1. 安装 create-react-app  官网：https://www.html.cn/create-react-app/

2. 快速开始，yarn create react-app my-app --typescript 官方文档：https://www.html.cn/create-react-app/docs/adding-typescript/

3. 添加SASS(SCSS) 官方文档：https://www.html.cn/create-react-app/docs/adding-a-sass-stylesheet/

4. 引入antd  官方文档：https://ant.design/docs/react/use-with-create-react-app-cn

5. 添加antd 高级配置，具体文档看4

6. 考虑到主题需要明确的UI设计，所以我这里就没有添加了。

7. 这是就暂且定位初始模板，tag 为 [v0.0.1](https://github.com/wangraoji/react-exd-net-bo/tree/0.0.1)！

### 添加layout
1. 先添加别名，说白了就是 @ 指向根目录 教程：https://blog.csdn.net/chrislincp/article/details/97312235

2. 由于之前我们就引入了 antd 所以只需要看下面加入 paths.json 就可以了。

3. 添加layout  其中 headerCom 包含 父子之间交互。
- 额外说明：React.Component&lt;any, any&gt;  第一个参数对应props 第2个参数对应state

4. 添加菜单 menu

5. 添加路由 router , yarn add react-router-dom
- 没带#的   import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
- 带#的     import { HashRouter as Router,Route,Link } from 'react-router-dom';

6. 添加路由跳转 history , yarn add history!  添加：src/history.ts

7. 这里我定为 [v0.0.2](https://github.com/wangraoji/react-exd-net-bo/tree/0.0.2)！


### 完善菜单路由
1. 菜单初始化默认选中

2. 菜单选中路由后刷新默认选中。

3. 关于为什么路由使用history而不是用withRouter link等 恩...主要我还是感觉history更方便。虽然用withRouter可以在prop读到路由数据，但是我更喜欢使用 history.listen。其次withRouter需要withRouter(component) ，这个什么时候包裹我没有深入研究。所以我选择了使用 history。再一个，就比如初始化的时候，你没法手动去 LinkTo home 而 history 可以 push 可以 go(-1)等等一系列操作。

4. 添加路由按需加载(VUE用惯了，所以习惯性的加了)！ 在src\components\asyncComponent 需要用的地方只需要 component: asyncComponent(() => import("@/views/home")),

5. 基础底架目测就到这里。这里我定位 0.0.3 