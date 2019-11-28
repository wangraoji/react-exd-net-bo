import React from 'react';

class Home extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            page:"首页",
        };
    }

    render(){
        return (
            <div>
                {this.state.page}
            </div>
        )
    }
}

export default Home;