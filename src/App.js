import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// 组件引入
import Header from './components/components/Header';
import Aside from './components/components/Aside';
import Footer from './components/components/Footer';
import About from './components/layout/About';
import Index from './components/layout/Index';
import List from './components/layout/List';
import Show from './components/layout/Show';
import FriendLink from './components/components/FriendLink';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <div id="main-container" className="container clearfix">
          <Aside></Aside>
          {/* exact解决输入其他路由都会访问末页路由 */}
          <Route path='/' exact={true} component={Index}></Route>
          <Route path='/list' component={List}></Route>
          <Route path='/show' component={Show}></Route>
          <Route path='/about' component={About}></Route>
          <FriendLink></FriendLink>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
