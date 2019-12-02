import React from "react";
import { Menu, Icon } from 'antd';
import history from "@/history";
import routes from "@/router";
import { Link } from 'react-router-dom'
const { SubMenu } = Menu;

class MenuCom extends React.Component<any, any>{
    ccc: any = [];
    constructor(props: any) {
        super(props);
        this.state = {
            // menu 选中的节点
            selectedKeys: []
        };
    }


    componentDidMount() {
        // 初始化路由
        if (history.location.pathname === "/") {
            history.push('/home');
            this.initMenuConfig('/home');
        } else {
            this.initMenuConfig(history.location.pathname);
        }
        // 监听路由变化
        history.listen((location: any) => {
            this.setState({
                selectedKeys: [location.pathname]
            })
        })
    }

    // 初始化menu选中
    initMenuConfig(selectedKey: string) {
        this.setState({
            selectedKeys: [selectedKey],
        })
    }

    // 初始化菜单节点
    getMenuNodes = (MenuList: any) => {
        return MenuList.map((item: any) => {
            if (!item.subMen) {
                return (
                    <Menu.Item key={item.path}>
                        <Link to={item.path} replace>
                            {
                                item.icon ? <Icon type={item.icon} /> : ""
                            }
                            <span>{item.name}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                return (
                    <SubMenu
                        key={item.path}
                        title={
                            <span>
                                {
                                    item.icon ? <Icon type={item.icon} /> : ""
                                }
                                <span>{item.name}</span>
                            </span>
                        }>
                        {this.getMenuNodes(item.subMen)}
                    </SubMenu>
                )
            }
        })
    }
    render() {
        return (
            <Menu selectedKeys={this.state.selectedKeys} mode="inline">
                {
                    this.getMenuNodes(routes)
                }
            </Menu>
        )
    }
}

export default MenuCom;