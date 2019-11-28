import React from 'react';
import '@/styles/_layout.scss';
import { Button } from 'antd';
class Page1 extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            testData: [
                {
                    name: "zs",
                    age: "16"
                },
                {
                    name: "ls",
                    age: "13"
                },
            ],
        }
    }
    add = () => {
        let tempArr = this.state.testData;
        tempArr.push({ name: "ww", age: "12" });
        this.setState({
            testData: tempArr
        })
    }

    render() {
        return (
            <div>
                <Button onClick={this.add}>测试添加</Button>
                {this.state.testData.map((item: any, inx: any) => {
                    return (
                        <p key={inx}>
                            <span>姓名：</span>
                            <span>{item.name}</span>
                            <span>年龄：</span>
                            <span>{item.age}</span>
                        </p>
                    )
                })}
            </div>
        )
    }
}

export default Page1;