import React from 'react';
import { Link } from 'react-router-dom';
import {dateFormat} from '../../utils/format'
import Banner from '../components/Banner'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tui: [],newArticle:[],banners:[]};
    }
    componentDidMount() {
        // 程序加载时
        const _this = this; //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        // 获取推荐阅读
        this.axios
          .get("http://127.0.0.1:8000/blog/get_tui_by_count?tui_id=2&count=3")
          .then((response) => {
              _this.setState({
                tui:response.data.data
              })
          })
          .catch(function(error) {
            console.log(error);
          }); 

        // 获取最新文章
        this.axios
          .get("http://127.0.0.1:8000/blog/get_new_article")
          .then((response) => {
              _this.setState({
                newArticle:response.data.data,
              })
          })
          .catch(function(error) {
            console.log(error);
          }); 
          
        // 获取轮播图
        this.axios
        .get("http://127.0.0.1:8000/blog/get_banner")
        .then((response) => {
            _this.setState({
              banners:response.data.data,
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
        <div>
            <section className="post-left">
                <div className="row">
                    {/* <!-- /banner图 --> */}
                    <div className="col-md-6">
                        <Banner banners={this.state.banners}></Banner>
                    </div>
                    {/* <!-- /banner图 --> */}

                    {/* <!-- 首页推荐 --> */}
                    <div className="col-md-6">
                        <div className="hotread ">
                            <div className="title">推荐阅读</div>
                            {
                                this.state.tui.map((item,index) => {
                                    return(
                                        <div key={index} className="caption">
                                            <h4>
                                                 <Link to={'/show?q='+item.id} title={item.title}>{item.title}</Link>
                                            </h4>
                                            <p>{item.excerpt}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* <!-- /今日头条 --> */}
                </div>
                {/* <!-- /文章列表 --> */}
                <div className="index-main clearfix">
                    <div className="main-title">
                        <h4 className="post-left-title fl">最新文章</h4>
                        <div className="fr"></div>
                    </div>
                    <div className="row">
                        {
                            this.state.newArticle.map((item,index)=>{
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
                    {/* <!-- /文章列表 --> */}
                </div>
            </section>
        </div>
        );
    }
}

export default Index;