import React from 'react';
import NavBar from '../components/NavBar';
import Pagination from '../components/Pagination';
import {Link} from 'react-router-dom';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {articles: [],navbar:[],page:{pageindex:1,pagesize:10,pagecount:0}};
    }
    componentDidMount() {
        // 程序加载时
        this.getdata(this.props)
    }
    componentWillReceiveProps(nextProps){
        // 解决路由不变参数改变调用接口
        this.getdata(nextProps)
    }
    getdata(nextProps){
        const _this = this; //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        this.axios
          .get("http://127.0.0.1:8000/blog/get_article"+nextProps.location.search)
          .then((response) => {
              _this.setState({
                articles:response.data.data,
                navbar:response.data.navbar,
                page:{
                    pagecount:response.data.pagecount,
                    pageindex:response.data.pageindex,
                    pagesize:response.data.pagesize,
                }
              })
          })
          .catch(function(error) {
            console.log(error);
          }); 
    }
    componentWillUnmount() {
        //程序卸载时
        
    }
    render() {
        return (
        <section className="post-left">
            <NavBar param={this.state.navbar}></NavBar>
            <div className="index-main clearfix">
            <div className="main-title">
            <h4 className="post-left-title">分类：{this.state.navbar.length>0?this.state.navbar[this.state.navbar.length-1].name:''}</h4>
            </div>
            <div className="row">
                {
                    this.state.articles.map((item,index)=>{
                        return (
                            <div key={index} className="article-box clearfix excerpt-1">
                                <div className="col-md-4">
                                    <div className="thumbnail">
                                        <Link to={'/show?q='+item.id} title={item.title}>
                                            <img src={'http://127.0.0.1:8000/media/'+item.img}
                                                alt={item.title} className="wp-post-image" width="240"
                                                height="160" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <h2><a href="/show-3.html" target="_blank" title={item.title}>{item.title}</a></h2>
                                    <p className="txtcont hidden-xs"><a href="/" target="_blank"
                                            title={item.title}>{item.excerpt}</a></p>
                                    <div className="meta">
                                        <span className="label label-info"><Link to={'/list?q='+item.category}>{item.category__name}</Link></span>
                                        <time className="item"><i className="fa fa-clock-o"></i>{item.created_time}</time>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Pagination></Pagination>
        </div>
        </section>
        );
    }
}

export default List;