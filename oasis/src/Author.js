import React from 'react';

class Author extends React.Component{
    constructor(props) { 
        supr(props);
        this.state = {
            authorinfo : '',
        }
    }
 
    getData(){ //请求数据函数
        fetch('http://localhost:8080/backend_oasis_war/authors/int',{method: 'GET'}).then(res => res.json()).then(
            data => {this.setState({ authorinfo:data})}
        )
    }
 
    componentWillMount(){
        this.getData();
    }
 
    render(){
        return(
            <div>
                <div>
                    {this.state.authorinfo}
                </div>
            </div>
        );
　　}
}
 
export default Author;