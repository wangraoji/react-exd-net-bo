import React from "react";
import { Menu, Icon } from 'antd';
import history from "@/history";
const { SubMenu } = Menu;

class MenuCom extends React.Component<any, any>{

    handleClick = (e: any) => {
        // 如果是当前路由不进行跳转
        if (history.location.pathname !== e.key) {
            history.push(e.key);
        }
    };
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="mail" />
                            <span>菜单一</span>
                        </span>
                    }
                >
                    <Menu.Item key="/1">Option 1</Menu.Item>
                    <Menu.Item key="/2">Option 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="/3">
                    <Icon type="mail" />
                    <span> Option 3</span>
                </Menu.Item>
            </Menu>
        )
    }
}

export default MenuCom;