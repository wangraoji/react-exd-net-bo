import React from 'react';
import { Table } from 'antd';
import { tableData } from "@/api/tableApi";
class Page1 extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            name: "zs"
        }
    }


    render() {
        return (
            <Table columns={tableData.columns} dataSource={tableData.data} />
        )
    }
}

export default Page1;