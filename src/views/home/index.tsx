import React from 'react';
import { getData } from "@/api/testApi";
class Home extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            page: "首页",
            styles: {
                background: "#fff",
                "fontSize": "16px",
                "textAlign": "center",
                "fontWeight": "bold",
                color: "#000",
                padding: "20px"
            }
        };
    }

    async getData() {
        let body = {
            age: "18"
        };
        let res = await getData('search',body);
        console.log(res);
    }
    render() {
        return (
            <div>
                <div>{this.state.page}</div>
                <div style={this.state.styles}>
                    <span onClick={this.getData.bind(this)}>测试数据</span>
                </div>
            </div>
        )
    }
}

export default Home;