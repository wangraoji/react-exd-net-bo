import React from "react";
import "@/styles/_docs.scss";
import { Alink } from "@/components";
const Page2: React.FC = () => {
    return (
        <div className="node-MongoDB">
            <h3>一、安装node</h3>
            <ul>
                <li>
                    1. 前往 <Alink href="http://nodejs.cn/">node中文网</Alink> 或者 <Alink href="https://nodejs.org/en/">node官网</Alink> 进行下载！
                </li>
                <li>
                    2. 下载完成之后就可以使用 node -v  npm -v 了！这时候你可以选择下载
                    <Alink href="http://npm.taobao.org/"> cnpm </Alink> 或者
                    <Alink href="https://yarn.bootcss.com/"> yarn </Alink>
                    我推荐yarn，WHY？逼格高点！
                </li>
                <li>
                    3. win+r 打开cmd 输入 yarn global bin 找到全局目录，如：C:\Users\Administrator\AppData\Local\Yarn\bin，复制目录添加到系统环境变量（百度搜如何添加环境变量）里。
                </li>
                <li>
                    4. 这时候就可以使用yarn安装全局了。npm -g是安装node的时候自动加入了环境变量。   yarn global add nodemon
                    （不了解<Alink href="https://www.jianshu.com/p/3b3b8bf9c4e9"> nodemon</Alink>？）
                </li>
                <li>
                    5. 创建一个<Alink href="http://www.expressjs.com.cn/"> node express </Alink> 项目用来做API，当然你也可以下载我
                    <Alink href="https://github.com/wangraoji/react-ts-server">现成的模板</Alink>
                    yarn install，然后nodemon index.js即可！我推荐呢直接用我的模板，里面跨域什么的都配置好了，直接写你的API就可以了！
                </li>
                <li>
                    6. 运行我的模板（后面叫它react-ts-server）后，创建几个文件。在
                    <Alink href="https://github.com/wangraoji/react-ts-server/blob/0.0.1/router/testApi.js"> router/testApi.js </Alink>和
                    <Alink href="https://github.com/wangraoji/react-ts-server/blob/0.0.1/data/testData.json"> data/testData.json </Alink>
                </li>
                <li>
                    7. 创建好后，在 <Alink href="https://github.com/wangraoji/react-ts-server/blob/master/index.js">index.js </Alink>
                    中引入，其中我监听的是 3001 端口，因为react项目默认是 3000 这个你随意更改。
                </li>
                <li>
                    8. 引入了之后，就可以在当前目录下 nodemon index.js  然后你加内容或者改内容，nodemon 会重新启动。不需要手动去启动。启动了之后就可以通过
                    http://localhost:3000/testApi/data 访问了。为什么是testApi看第7点中的引入！
                </li>
                <li>
                    9. 到这里，模拟 mockData 基本完结。其实这个满足前端测试需求。数据量不大或者说不需要对数据进行复杂的操作就用FS就可以对JSON进行增删改查。
                    但是到这里就完事了吗，并没有。我想更丰富点，那就装mongodb吧！
                </li>
            </ul>
            <h3>二、安装mongodb</h3>
            <ul>
                <li>1. 前往 <Alink href="https://www.mongodb.com/download-center/community"></Alink> 下载</li>
                <li>2. 下载完后应该是msi，双击安装吧！推荐看
                    <Alink href="https://www.runoob.com/mongodb/mongodb-window-install.html">教程</Alink>，
                    选目录的时候建议手动输入：C:\mongodb\Server\4.2\，然后下面有一步一定要看，
                    否者你装不上！install mongoDB compass 一定不能勾选！finish后什么都不用做，新版的自动以服务的形式启动了！
                </li>
                <li>
                    3. 怎么看服务多说一句， 右键电脑管理，服务和应用程序 就可以看服务里。
                </li>
                <li>
                    4. 声明一点，如果你是把mongodb放在服务器，bin目录下的cfg里面的 <span>bind_ip = 127.0.0.1</span> 改成 <span>bind_ip = 0.0.0.0 </span>
                    这样你本地才能连接！改好后重启下服务器即可！
                </li>
                <li>
                    5. 推荐 <Alink href="https://robomongo.org/download">mongodb可视化工具</Alink>
                </li>
                <li>
                    6. 把C:\mongodb\Server\4.2\bin加入到环境里，这样以后要用直接CMD mongo 即可，不需要前往bin目录！
                </li>
                <li>
                    7. 打开cmd 输入 mongo 链接数据库，然后创建数据库账号密码。创建好后重启下服务！这里的话直接看
                    <Alink href="https://blog.csdn.net/qq_26896281/article/details/81206492"> 教程 </Alink>
                    吧，很简单，花不到3分钟！
                </li>
                <li>
                    8. 创建好账号密码后，之前你用可视化链接的数据库也需要重新验证了， 左上角 file=>connect=>双击你的数据库=>右键edit=>auth···=>勾选Pre···=>输入你账号密码
                </li>
                <li>
                    9. 然后双击你数据库添加到左边可视化，右键你数据库名称创建一个表，mydb（建议全小写，否则可能读不到数据）。 create dbs=> mydb
                </li>
                <li>
                    10. 创建表后，再创建一个集合， 展开你的 mydb 右键 collections=>create cols  这里先建一个 tabledata 的集合吧。 当然这类操作你也可以在mongoDB里操作。
                    一个是命令操作，一个是可视化操作。看你心情了。
                </li>
                <li>
                    11. 右键你刚创建的集合，随便插一条数据进去。 name:"zs"
                </li>
            </ul>
            <h3>三、开始用node连接mongodb</h3>
            <ul>
                <li>
                    1. 打开react-ts-server 安装 mongodb 和 mongoose   yarn add mongoose mongodb
                    &nbsp;&nbsp;&nbsp;&nbsp;ps 这mongoose干嘛的...恩，便捷操作mongodb数据库的。使用方法看<Alink href="http://www.mongoosejs.net/"> 官网</Alink>。
                </li>
                <li>
                    2. 因为我们之前一键创了一个Mydb的表和一个table的集合。下面我们就开始改造一下我们的react-ts-server
                </li>
                <li>
                    3. 把原目录data删除，新建
                    <Alink href="https://github.com/wangraoji/react-ts-server/blob/0.0.2/dataBase/tableDB.js">dataBase/tabledb.js </Alink>
                    链接你的数据库，然后导出！在
                    <Alink href="https://github.com/wangraoji/react-ts-server/blob/0.0.2/router/testApi.js">route/testApi.js </Alink>
                    使用。
                </li>
                <li>
                    4. 到这里，基本教程结束。下面来个增删改查的实例！
                </li>
            </ul>
            <h3>四、增删改查实例（<a href="#/table-demo">演示</a>）</h3>
            <li>
                1. 增删改查4个示例API。后面的就不上传了。
            </li>
            <li>
                2. 基本教程到此结束，手把手带入坑！更多技术欢迎入群交流：23592723
            </li>
            <li>
                3. <Alink href="https://github.com/wangraoji/react-ts-dom">本项目git地址</Alink> <Alink href="https://github.com/wangraoji/react-ts-server">node后台API地址</Alink>
            </li>
        </div>
    )
}

export default Page2;