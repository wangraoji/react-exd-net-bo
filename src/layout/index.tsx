import React from 'react';
import '@/styles/_layout.scss';
import { Layout } from 'antd';
import { HeaderCom, MenuCom } from '../components';
// 引入路由
import { HashRouter as Router, Route } from "react-router-dom";
import routes from '@/router';


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
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default LayoutCom;
