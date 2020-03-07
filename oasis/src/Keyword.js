import React from 'react';

class Keyword extends React.Component{
    constructor(props) { 
        supr(props);
        this.state = {
            info : '',
        }
    }
 
    getData(){ //请求数据函数
        fetch('http://localhost:8080/backend_oasis_war/authors/findByKeyword',{method: 'GET'}).then(res => res.json()).then(
            data => {this.setState({ info:data})}
        )
    }
 
    componentWillMount(){
        this.getData();
    }
 
    render(){
        return(
            <div>
                <div>
                    {this.state.info}
                </div>
            </div>
        );
　　}
}
 
export default Keyword;