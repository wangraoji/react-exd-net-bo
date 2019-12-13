### 前言
本项目地址：http://106.54.195.124:8082

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

6. 添加路由跳转 history , yarn add history!  添加：src/history.ts（为什么要它，因为不是通过router渲染的组件没有props.history）

7. 这里我定为 [v0.0.2](https://github.com/wangraoji/react-exd-net-bo/tree/0.0.2)！


### 完善菜单路由
1. 菜单初始化默认选中

2. 菜单选中路由后刷新默认选中。

3. 在componentDidMount 使用this.props.history.listen监听设置setstate后，需要再 componentWillUnmount 取消 this.setState = (state, callback) => {return };

4. 添加路由按需加载(VUE用惯了，所以习惯性的加了)！ 在src\components\asyncComponent 需要用的地方只需要 component: asyncComponent(() => import("@/views/home")),

5. 基础底架目测就到这里。这里我定位 [v0.0.3](https://github.com/wangraoji/react-exd-net-bo/tree/0.0.3)！

### 加入ajax
1. 本项目使用的 axios  为什么用 axios 而不用 fetch 个人觉得 axios 传参 拦截器 封装都比 fetch好。

2. 本项目使用node-express搭建后台。  https://github.com/wangraoji/react-ts-server

3. 加入utils\request.tsx（axios封装、拦截）

4. 这里我定位为 [v0.0.4](https://github.com/wangraoji/react-exd-net-bo/tree/0.0.4)！

### 出现跨域怎么办？
1. 在package.json最下面加入： "proxy":"http://localhost:3001/"
2. 删除 utils\request.tsx 里面实例化 axios 的 baseurl
3. 修改 api/testApi.tsx 里的 api ， 因为的请求路径是 http://localhost:3001/testApi/search  而我加入proxy的是 http://localhost:3001 所以这里我只需要用 /testApi/ + url 即可
4. 然后看network请求是不是变成了http://localhost:3000/testApi/search  是的话就对了！
5. 有同学就说了，我有多个要加怎么办。我这里就不上传了。 
    - 附链接：http://www.mamicode.com/info-detail-2525374.html 这里说的很清楚了，2.0以下直接加在package.json里，以上 yarn add http-proxy-middleware  
    - 在项目目录src/下新建setupProxy.js文件 写入你需要添加的代码。 
    - 附官网链接：https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually

### 加入node+mongodb后台API文档以及示例

1. 文档地址：http://106.54.195.124:8082/#/table-demo

2. 修改【添加layout、完善菜单路由】文档