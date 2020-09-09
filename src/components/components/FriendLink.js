import React from 'react';
import { Link } from 'react-router-dom';

class FriendLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {links:[]};
    }
    componentDidMount() {
        // 程序加载时
        const _this = this; //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        // 获取所有标签
        this.api
        .get("/blog/get_all_link")
        .then((response) => {
            _this.setState({
                links:response.data.data
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
            <div className="FriendLink hidden-xs clearfix">
                <div className="title">
                    <h3>友情链接：</h3>
                </div>
                <ul className="clears">
                    {
                        this.state.links.map((item,index) => {
                            return (
                            <li key={index}><a href={item.linkurl} target="_blank">{item.name}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default FriendLink;