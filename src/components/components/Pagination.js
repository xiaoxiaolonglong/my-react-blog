import React from 'react';
import { Link } from 'react-router-dom';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageindex:1,
            pagesize:10,
            pagecount:100,
            showPage:'none'
        };
        this.nextPage = this.nextPage.bind(this);
        this.prePage = this.prePage.bind(this);
    }
    componentDidMount() {
        if(Math.ceil(this.state.pagecount/this.state.pagesize)>1){
            this.setState({
                showPage:'block'
            })
        }else{
            this.setState({
                showPage:'none'
            })
        }
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
        return (
            <div className="pagination" style={{display:this.state.showPage}}>
                <ul>
                    <li className="prev-page" style={{display:this.state.pageindex==1?'none':'inline'}}><a onClick={this.prePage}>上一页</a></li>
                    <li className="active"><span>{this.state.pageindex}</span></li>
                    <li style={{display:this.state.pageindex*this.state.pagesize>=this.state.pagecount?'none':'inline'}}><a >{this.state.pageindex+1}</a></li>
                    <li className="next-page" style={{display:this.state.pageindex==Math.ceil(this.state.pagecount/this.state.pagesize)?'none':'inline'}}> <a onClick={this.nextPage}>下一页</a></li>
                </ul>
            </div>
        );
    }
}

export default Pagination;