import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <div className="breadcrumb">
        您的位置： <a itemProp="breadcrumb" href="/">首页</a> » <span
                    className="current">Python</span>
      </div>
    );
  }
}

export default NavBar;