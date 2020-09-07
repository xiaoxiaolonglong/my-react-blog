import React from 'react';
import { Link } from 'react-router-dom';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageindex:this.props.page.pageindex,
            pagesize:this.props.page.pagesize,
            pagecount:this.props.page.pagecount,
        };
        this.nextPage = this.nextPage.bind(this);
        this.prePage = this.prePage.bind(this);
        // this.goPage = this.goPage.bind(this);
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps){
        //props改变触发该函数
        this.setState({
            pageindex:nextProps.page.pageindex,
            pagesize:nextProps.page.pagesize,
            pagecount:nextProps.page.pagecount,
        })
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
        this.props.getPage(this.state.pageindex-1)
    }
    nextPage(){
        this.setState({
            pageindex:this.state.pageindex+1
        })
        this.props.getPage(this.state.pageindex+1)
    }
    componentWillUnmount() {
        //程序卸载时
        
    }
    render() {
        let arr = [];
        for(let i = 1;i<=Math.ceil(this.state.pagecount/this.state.pagesize);i++){
            arr.push(i)
        }
        console.log(this.state.pagecount,this.state.pagesize,this.state.pageindex)
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