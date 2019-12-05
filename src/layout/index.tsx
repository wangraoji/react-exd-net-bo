import React from 'react';
import '@/styles/_layout.scss';
import { Layout } from 'antd';
import { HeaderCom, MenuCom } from '../components';
// 引入路由
import { HashRouter as Router, Route } from "react-router-dom";
import routes from '@/router';
// 引入按需加载
import asyncComponent from '@/components/asyncComponent';
let newRoutes: any = [];
returnArr(routes);
function returnArr(data: any) {
  data.forEach((el: any) => {
    if (!el.subMen) {
      newRoutes.push(el)
    } else {
      returnArr(el.subMen);
    }
  })
}
const { Header, Sider, Content } = Layout;
class LayoutCom extends React.Component {
  state = {
    collapsed: false,
  };

  toggleSider = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Router>
        <Layout className="my-layout h100">
          <Header>
            <HeaderCom collapsed={this.state.collapsed} toggleSider={this.toggleSider} />
          </Header>
          <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <MenuCom />
            </Sider>
            <Content>
              <div className="my-content">
                {newRoutes.map((route: any, inx: any) => (
                  <Route
                    key={inx}
                    path={route.path}
                    exact={route.exact}
                    component={route.component ? route.component : asyncComponent(() => import("@/views/page404"))}
                  />
                ))}
              </div>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default LayoutCom;

