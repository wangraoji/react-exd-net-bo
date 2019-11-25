import React from 'react';
import { Icon } from "antd";
import "@/styles/_header-com.scss";
class HeaderCom extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: "头部",
        };
    }
    render() {
        return (
            <div className="header-com">
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggleSider}
                />
                {this.state.name}
            </div>
        )
    }
}
export default HeaderCom 