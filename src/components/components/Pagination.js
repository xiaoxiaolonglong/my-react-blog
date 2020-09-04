import React from 'react';
import { Link } from 'react-router-dom';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageindex:9,
            pagesize:10,
            pagecount:100,
        };
        this.nextPage = this.nextPage.bind(this);
        this.prePage = this.prePage.bind(this);
        // this.goPage = this.goPage.bind(this);
    }
    componentDidMount() {

    }
    goPage(page){
        this.setState({
            pageindex:page
        })
    }
    prePage(){
        this.setState({
            pageindex:this.state.pageindex-1
        })
    }
    nextPage(){
        this.setState({
            pageindex:this.state.pageindex+1
        })
    }
    componentWillUnmount() {
        //程序卸载时
        
    }
    render() {
        let arr = [];
        for(let i = 1;i<=Math.ceil(this.state.pagecount/this.state.pagesize);i++){
            arr.push(i)
        }
        return (
            <div className="pagination" style={{display:this.state.pagecount>this.state.pagesize?'block':'none'}}>
                <ul>
                    <li className="prev-page" style={{display:this.state.pageindex===1?'none':'inline'}}>
                        <a onClick={this.prePage}>上一页</a>
                    </li>
                    {
                        arr.map((item,index)=>{
                            if(this.state.pageindex === 1){
                                if(index > 2){
                                    return false
                                }
                            }else if(this.state.pageindex === arr[arr.length-1]){
                                if(index<arr.length-3){
                                    return false
                                }
                            }else{
                                if(index < arr.indexOf(this.state.pageindex)-1 || index > arr.indexOf(this.state.pageindex)+1){
                                    return false
                                }
                            }
                            if(item==this.state.pageindex){
                                return <li key={index} className="active"><span>{item}</span></li>
                            }else{
                                return <li key={index}><a onClick={this.goPage.bind(this,item)}>{item}</a></li>
                            }
                            
                        })
                    }
                    <li className="next-page" style={{display:this.state.pageindex===arr[arr.length-1]?'none':'inline'}}>
                        <a onClick={this.nextPage}>下一页</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Pagination;