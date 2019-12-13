import React from 'react';
import './aircraft.scss';
class Aircraft extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            myList: [],
            begDesign: true,
            rightBox: [
                {
                    name: "机头",
                    code: "ah"
                },
                {
                    name: "机身",
                    code: "ab"
                },
                {
                    name: "机尾",
                    code: "aw"
                },
                {
                    name: "机左翼",
                    code: "ayl"
                },
                {
                    name: "机右翼",
                    code: "ayr"
                },
            ],
            currentAName: "",
            selectAName: "",
            goColoring: false,
            currentAData: {
                ah: "",
                ab: "",
                aw: "",
                ayl: "",
                ayr: ""
            },
            colorData: [
                {
                    code: "red",
                    name: "红色"
                },
                {
                    code: "blue",
                    name: "蓝色"
                },
                {
                    code: "green",
                    name: "绿色"
                },
            ],
        }
    }

    // 开始设计
    begDesign() {
        this.setState({
            begDesign: true
        })
    }

    // 鼠标进入
    onMouseOver(item: any) {
        this.setState({
            currentAName: item.code
        })
    }
    // 鼠标离开
    onMouseOut() {
        this.setState({
            currentAName: ""
        })
    }

    // 开始上色
    goColoring(item: any) {
        this.setState({
            currentAName: "",
            goColoring: true,
            selectAName: item.code,
        })
    }

    // 选中上色
    selectColor(item: any) {
        let selectAName = this.state.selectAName;
        let tempData: any = {};
        tempData[selectAName] = item.code;
        let currentAData = Object.assign({}, this.state.currentAData, tempData);
        this.setState({
            currentAData: currentAData
        })
    }

    // 取消上色
    qxfn() {
        let currentAData = { ...this.state.currentAData };
        currentAData[this.state.selectAName] = "";
        this.setState({
            currentAData: currentAData,
            goColoring: false
        })
    }
    render() {
        return (
            <div className="aircraft h100">
                <div className="left-box">
                    <div className="l-h">
                        <span>我的设计</span><span onClick={this.begDesign.bind(this)}>开始设计</span>
                    </div>
                    <div className="l-c">
                        {
                            this.state.myList.length === 0 ? <span className="not-data">暂无案例，请先<span onClick={this.begDesign.bind(this)}>开始设计</span></span> : ""
                        }
                    </div>
                </div>
                <div className="center-box">
                    {!this.state.begDesign ?
                        <span className="not-data" style={{ marginTop: '0' }}>暂无案例，请先<span onClick={this.begDesign.bind(this)}>开始设计</span></span> :
                        <div className="my-aircraft-box m-a">
                            <div className="a-h" style={{ background: this.state.currentAData.ah }}>
                                机头
                                <div className="zz" style={{ background: this.state.currentAName === 'ah' ? "rgba(0,0,0,0.2)" : "" }}></div>
                            </div>
                            <div className="a-b" style={{ background: this.state.currentAData.ab }}>
                                机身
                                <div className="zz" style={{ background: this.state.currentAName === 'ab' ? "rgba(0,0,0,0.2)" : "" }}></div>
                            </div>
                            <div className="a-w" style={{ background: this.state.currentAData.aw }}>
                                机尾
                                <div className="zz" style={{ background: this.state.currentAName === 'aw' ? "rgba(0,0,0,0.2)" : "" }}></div>
                            </div>
                            <div className="a-y-l" style={{ background: this.state.currentAData.ayl }}>
                                机左翼
                                <div className="zz" style={{ background: this.state.currentAName === 'ayl' ? "rgba(0,0,0,0.2)" : "" }}></div>
                            </div>
                            <div className="a-y-r" style={{ background: this.state.currentAData.ayr }}>
                                机右翼
                                <div className="zz" style={{ background: this.state.currentAName === 'ayr' ? "rgba(0,0,0,0.2)" : "" }}></div>
                            </div>
                        </div>
                    }
                </div>
                <div className="right-box">
                    {
                        !this.state.goColoring ? this.state.rightBox.map((item: any, inx: number) => {
                            return (
                                <div className="r-b-s-rq" key={inx}>
                                    <div className="r-b-a-rq m-a"
                                        onMouseOver={this.onMouseOver.bind(this, item)}
                                        onMouseOut={this.onMouseOut.bind(this)}>
                                        <div className="r-b-a-b" onClick={this.goColoring.bind(this, item)}>
                                            <div className="a-h" style={{ background: item.code === 'ah' ? "#707070" : "" }}>
                                            </div>
                                            <div className="a-b" style={{ background: item.code === 'ab' ? "#707070" : "" }}>
                                            </div>
                                            <div className="a-w" style={{ background: item.code === 'aw' ? "#707070" : "" }}>
                                            </div>
                                            <div className="a-y-l" style={{ background: item.code === 'ayl' ? "#707070" : "" }}>
                                            </div>
                                            <div className="a-y-r" style={{ background: item.code === 'ayr' ? "#707070" : "" }}>
                                            </div>
                                        </div>
                                        {item.name}
                                    </div>
                                </div>
                            )
                        }) :
                            <div className="coloring">
                                <div className="r-b-c-t">
                                    {this.state.colorData.map((item: any, inx: number) => {
                                        return (
                                            <div className="color-div-box" key={inx} onClick={this.selectColor.bind(this, item)}>
                                                <div className="color-demo" style={{ background: item.code }}></div> <br />
                                                {item.name}
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="r-b-c-b">
                                    <span onClick={this.qxfn.bind(this)}>取消</span>
                                    <span onClick={() => { this.setState({ goColoring: false }) }}>确定</span>
                                </div>
                            </div>
                    }
                </div>
            </div>
        )
    }
}
export default Aircraft;