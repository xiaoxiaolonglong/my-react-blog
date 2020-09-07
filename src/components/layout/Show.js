import React from 'react';
import NavBar from '../components/NavBar';
import {Link} from 'react-router-dom';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {navbar:[],article: {tags:[],pre_article:null,next_article:null}};
        this.getdata = this.getdata.bind(this)
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
        // 页面回到顶部
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        const _this = this; //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        let url = "http://127.0.0.1:8000/blog/get_detail"+nextProps.location.search;
        this.axios
          .get(url)
          .then((response) => {
              _this.setState({
                article:response.data.data,
                navbar:response.data.navbar,
              })
          })
          .catch(function(error) {
            console.log(error);
          }); 
    }
    render() {
        return (
        <section className="post-left">
            <NavBar data={this.state.navbar} type="detail"></NavBar>
            <div className="post-main clearfix">
                <h1 className="post-title">{this.state.article.title}</h1>
                <div className="post-con clearfix">
                    <div className="article-meta">
                        <span className="item">分类：<Link to={'/list?title='+this.state.article.category__name+'&category='+this.state.article.category}>{this.state.article.category__name}</Link></span>
                        <span className="item">作者：{this.state.article.user__username}</span>
                        <span className="item">浏览：{this.state.article.views}</span>
                        <span className="item">{this.state.article.created_time}</span>

                    </div>
                    <article className="article-content">
                        {
                            <div dangerouslySetInnerHTML={{__html: this.state.article.body}} />
                        }
                    </article>

                    <div className="post-tag"><span className="fa fa-tags" aria-hidden="true"></span>标签：
                        
                            {
                                this.state.article.tags.map((item,index)=>{
                                    return (
                                        <Link key={index} to={'/list?tag='+item.id}>{item.name}</Link>
                                    )
                                })
                            }
                        
                    </div>
                    <div>
                        <div><b>上一篇：</b>
                            {
                                this.state.article.pre_article?
                                <Link to={'/show?id='+this.state.article.pre_article.id} className="article-tag" title={this.state.article.pre_article.title}>{this.state.article.pre_article.title}</Link>
                                :'没有了'
                            }
                            
                        </div>
                        <div><b>下一篇：</b>
                            {
                                this.state.article.next_article?
                                <Link to={'/show?id='+this.state.article.next_article.id} className="article-tag" title={this.state.article.next_article.title}>{this.state.article.next_article.title}</Link>
                                :'没有了'
                            }
                        </div>
                    </div>
                </div>

            </div>
        </section>
        );
    }
}

export default About;