import React from 'react';
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <div className="breadcrumb">
        您的位置：
        <Link to="/">首页</Link><span> » </span>
        {
          this.props.param.map((item,index) => {
            if(index === this.props.param.length-1){
              return <span key={index} className="current">{item.name}</span>
            }else{
              return (<span key={index}><Link to={"/list?category="+item.id}>{item.name}</Link> » </span>)
            }
          })
        }
      </div>
    );
  }
}

export default NavBar;