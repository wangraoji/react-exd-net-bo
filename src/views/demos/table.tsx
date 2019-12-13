import React from 'react';
import {
    Table,
    Button,
    Modal,
    Form,
    Input,
    message,
} from 'antd';
import { actionRow } from "@/api/tableApi";
const { Search } = Input;
class Page1 extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            // 表格选中数据
            selectRows: [],
            // 选中数据  > 1 < 0 禁用按钮
            disableBtn: true,
            // 表格loading
            tableLoading: false,
            // 表头
            columns: [
                {
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: '住址',
                    dataIndex: 'address',
                    key: 'address',
                },
            ],
            // 表数据
            data: [],
            // 表格分页
            pagination: {
                current: 1,
                pageSize: 10,
                total: 20,
                pageSizeOptions: ["10", "20", "30", "50"],
                showLessItems: true,
                showSizeChanger: true,
                size: "default",
                showTotal: (total: number) => `当前共：${total} 条数据`,
                onChange: (page: number, pageSize: number) => {
                    this.pageChang(page, pageSize)
                },
                onShowSizeChange: (page: number, pageSize: number) => {
                    this.pageChang(page, pageSize)
                },
            },
            // 查询值
            searchValue: "",
            // 弹框是否显示
            dialogShow: false,
            // 提交时弹框按钮的loading
            loading: false,
            // 弹框标题
            dialogTitle: "新增行",
            // 是谁的弹框
            action: "add",
            // 表单数据
            rowData: {},
        }
    }

    // 初始化， 等于 ng 的 init  vue 的 mounted
    componentDidMount() {
        // 初始化获取所有数据
        this.getData("", { current: 1, pageSize: 10 });
    }
    // input双向绑定的方法 react 貌似只能用这种方法双绑！
    handleGetInputValue(key: string, event: any) {
        // 先取数据
        let rowData: any = { ...this.state.rowData };
        // 根据传入数据重新赋值
        rowData[key] = event.target.value;
        this.setState({
            rowData: rowData
        })
    };

    // 分页切换
    pageChang(page: number, pageSize: number) {
        // 取值再重新赋值
        let pagination = { ...this.state.pagination };
        pagination.current = page;
        pagination.pageSize = pageSize;
        this.setState({
            pagination: pagination
        })
        let v = this.state.searchValue;
        this.getData(v, { current: page, pageSize: pageSize });
    }

    // 打开弹框
    opendDialog(target: string) {
        // 1. 先创建一个空对象， 新增赋值 空  编辑和删除绑定选中row
        let rowData: any;
        // 如果是删除做额外处理，不需要弹框
        if (target === "delete") {
            rowData = this.state.selectRows[0];
            this.setState({ rowData: rowData, action: target });
            // this.onSave();
            this.requestFn(rowData, "delete");
            return;
        }
        // 如果不是删除  不管37 27先ture为敬
        this.setState({ dialogShow: true })
        if (target === "add") {
            rowData = {};
            this.setState({ rowData: rowData, dialogTitle: "新增行", action: "add" })
        } else {
            rowData = this.state.selectRows[0];
            this.setState({ rowData: rowData, dialogTitle: "编辑行", action: "edit" })
        }
    }

    // 保存
    onSave() {
        // 取列头做验证
        let columns = [...this.state.columns];
        // 取input绑定的数据
        let data = { ...this.state.rowData };
        // 立个flag
        let isBroken = false;
        // 如果不是删除，就验证下数据有没有填写
        if (this.state.action !== "delete") {
            // 循环列头，如果不通过就return
            columns.forEach((el: any) => {
                if (isBroken) {
                    return;
                }
                if (!data[el.key] || data[el.key] === "") {
                    message.warning(`请输入${el.title}`, 3);
                    isBroken = true;
                    return false
                }
            })
        }
        // 如果通过
        if (!isBroken) {
            // loading beg
            this.setState({
                loading: true
            });
            this.requestFn(data);
        }
    }

    // 查询
    onSearch(v: string) {
        this.setState({ searchValue: v });
        this.getData(v, { current: 1, pageSize: 10 });
    }

    async getData(v: string, pagination: any) {
        this.setState({ tableLoading: true })
        let res: any = await actionRow('getData', {
            v,
            page: pagination.current,
            pageSize: pagination.pageSize
        })
        if (!res) {
            this.setState({ tableLoading: false })
            return;
        }
        if (res.isOk) {
            let pagination = Object.assign({}, this.state.pagination, {
                current: res.page,
                pageSize: res.pageSize,
                total: res.total
            })
            this.setState({
                data: res.data,
                pagination: pagination
            })
        }
        this.setState({ tableLoading: false })
        
    }

    async requestFn(data: any, url?: string) {
        // 调请求 新增接口add 编辑接口 edit
        let res: any = await actionRow(url || `${this.state.action}`, data);
        let dialogShow = false; 
        if (!res) {
            return;
        }
        if (res.isOk) {
            message.success(res.msg, 3);
            let pagination = { ...this.state.pagination };
            this.getData(this.state.searchValue, { current: pagination.current, pageSize: pagination.pageSize })
        } else {
            message.error(res.msg, 3);
            dialogShow = true;
        }
        this.setState({
            loading: false,
            dialogShow: dialogShow
        });
    }
    render() {
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
        };
        // 表格行多选
        const rowSelection = {
            // 选中的数据不=1 就禁用编辑/删除按钮！
            onChange: (e: any, v: any) => {
                if (v.length === 1) {
                    this.setState({
                        selectRows: v,
                        disableBtn: false
                    })
                } else {
                    this.setState({
                        selectRows: [],
                        disableBtn: true
                    })
                }
            }
        };
        return (
            <div>
                <Button className="mb-10 mr-10" onClick={this.opendDialog.bind(this, "add")}>新增行</Button>
                <Button
                    className="mb-10 mr-10"
                    disabled={this.state.disableBtn}
                    onClick={this.opendDialog.bind(this, "edit")}>
                    编辑行
                </Button>
                <Button
                    className="mb-10 mr-10"
                    disabled={this.state.disableBtn}
                    onClick={this.opendDialog.bind(this, "delete")}>
                    删除行
                </Button>
                <Search
                    className="mr-10"
                    style={{ display: "inline-block", width: "250px" }}
                    placeholder="输入查询条件"
                    enterButton="查询"
                    onSearch={value => { this.onSearch(value) }}
                />
                <Table
                    rowKey={(record: any) => record._id}
                    columns={this.state.columns}
                    dataSource={this.state.data}
                    size="small"
                    pagination={this.state.pagination}
                    rowSelection={rowSelection}
                    loading={this.state.tableLoading} />
                <Modal
                    title={this.state.dialogTitle}
                    visible={this.state.dialogShow}
                    onCancel={() => { this.setState({ dialogShow: false }) }}
                    okText="保存"
                    onOk={this.onSave.bind(this)}
                    maskClosable={false}
                    confirmLoading={this.state.loading}
                >
                    {this.state.columns.map((item: any, i: number) => {
                        return (
                            (
                                <Form.Item {...formItemLayout} label={item.title} key={i}>
                                    <Input placeholder={`请输入${item.title}`}
                                        value={this.state.rowData[item.key]}
                                        onChange={this.handleGetInputValue.bind(this, item.key)} />
                                </Form.Item>
                            )
                        )
                    })}
                </Modal>
            </div>
        )
    }
}

export default Page1;

