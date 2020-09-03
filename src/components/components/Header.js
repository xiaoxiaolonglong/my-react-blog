import React from 'react';
import {Link} from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {category: [],searchParam:''};
    }
    componentDidMount() {
        // 程序加载时
        const _this = this; //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        this.axios
          .get("http://127.0.0.1:8000/blog/get_all_category")
          .then((response) => {
              console.log(response.data);
              _this.setState({
                category:response.data.data
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
            <header className="fix-wrap" id="fix-wrap">
                <div className="fix-main clearfix pr" id="fix-main" _hover-ignore="1"> 
                    <a href="/" className="index-logo">
                        <img src="static/picture/black-logo.png" alt="拓普Python学院,Python!"/>  
                    </a>
                    <nav className="nav fl">
                        <ul id="fix-list" className="fix-list clearfix">

                            <li id="menu-item-24086" className="menu-item"><a href="/">首页</a></li>
                            {
                                this.state.category.map((item, index) => {
                                    return (
                                        <li key={index} id="menu-item-117720" className="menu-item">
                                            <Link to={'/list?q='+item.pk}>{item.fields.name}</Link>
                                        </li>
                                    )
                                })
                            }
                            <li id="menu-item-24086" className="menu-item"><a href="/about">关于博主</a></li>


                        </ul>
                    </nav>
                    <form method="get" className="index-search  hidden-xs" action="/s/">
                        <input className="text" name="search" type="text" placeholder="输入关键字" value={this.searchParam}/>
                        <button className="submit" type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </header>
        );
    }
}

export default Header;