import React from 'react';
import { Link } from 'react-router-dom';

class Aside extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hot:[],tui:[],tags:[]};
    }
    componentDidMount() {
        // 程序加载时
        const _this = this; //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        // 获取热门文章
        this.axios
        .get("http://127.0.0.1:8000/blog/get_hot_article")
        .then((response) => {
            console.log(response.data.data)
            _this.setState({
              hot:response.data.data,
            })
        })
        .catch(function(error) {
          console.log(error);
        }); 
        // 获取推荐阅读
        this.axios
          .get("http://127.0.0.1:8000/blog/get_tui_by_count?tui_id=1&count=6")
          .then((response) => {
              _this.setState({
                tui:response.data.data
              })
          })
          .catch(function(error) {
            console.log(error);
          });
        // 获取所有标签
        this.axios
        .get("http://127.0.0.1:8000/blog/get_all_tag")
        .then((response) => {
            _this.setState({
              tags:response.data.data
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
            <aside className="post-right hidden-xs">
            <section className="widget post-right-item">
                <h4 className="post-right-title">热门文章排行</h4>
                <ol className="hot-list">
                    {
                        this.state.hot.map((item,index)=>{
                            return (
                                <li key={index}><Link to={'/show?q='+item.pk} title={item.fields.title}>{item.fields.title}</Link></li>
                            )
                        })
                    }
                </ol>
            </section>


            <section className="widget post-right-item">
                <h4 className="post-right-title">热门推荐</h4>
                <ul className="post-new">
                    {
                        this.state.tui.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <div className="img">
                                        <Link to={'/show?q='+item.pk} title={item.fields.title}>
                                            <img src={'http://127.0.0.1:8000/media/'+item.fields.img}
                                                alt={item.fields.title} className="wp-post-image" width="120" height="80" />
                                        </Link>
                                    </div>
                                    <div className="text">
                                    <Link to={'/show?q='+item.pk} title={item.fields.title}>{item.fields.title}</Link>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
            <section className="widget post-right-item">
                <h4 className="post-right-title">所有标签</h4>
                <div className="tags">
                    {
                        this.state.tags.map((item,index)=>{
                            return (
                                <Link key={index} to={'/list?q='+item.pk}>{item.fields.name}</Link>
                            )
                        })
                    }
                </div>
            </section>
            {/* <!-- /关注我们 --> */}
            <div className="post-right-item">
                <h4 className="post-right-title">关注我们</h4>
                <div className="wid-about">
                    <p>拓普Python学院，欢迎关注！</p>
                    <img src="static/picture/weixinqr.jpg" alt="微信二维码-互联网的一些事" width="160" height="160"/>
                </div>
                <div className="wid-about">
                    <p><strong>联系方式:</strong></p>
                    <p>QQ:445813</p>
                    <p>Email：445813@qq.com</p>
                </div>
            </div>

        </aside>
            
        );
    }
}

export default Aside;