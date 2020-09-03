import React from 'react';
import NavBar from '../components/NavBar';

class About extends React.Component {
  render() {
    return (
      <section className="post-left">
        <NavBar></NavBar>
        <div className="post-main clearfix">
          <h1 className="post-title">关于我们</h1>
          <div className="post-con clearfix">
            <div className="article-meta"> <span className="item">2018-10-09</span></div>
            <article className="article-content">
              <p>1、本网站属于个人的非赢利性网站，转载的文章遵循原作者的版权声明，如果原文没有版权声明，按照目前互联网开放的原则，我们将在不通知作者的情况下，转载文章;如果原文明确注明“禁止转载”，我们一定不会转载。如果我们转载的文章不符合作者的版权声明或者作者不想让我们转载您的文章的话，请来信告知.</p>
              <p>2、本网站转载文章仅为传播更多信息之目的，凡在本网站出现的信息，均仅供参考。本网站将尽力确保所提供信息的准确性及可靠性，但不保证信息的正确性和完整性，且不对因信息的不正确或遗漏导致的任何损失或损害承担责任。</p>
              <p>3、任何透过本网站网页而链接及得到的资讯、产品及服务，本网站概不负责，亦不负任何法律责任。</p>
              <p>4、本网站所刊发、转载的文章，其版权均归原作者所有，如其他媒体、网站或个人从本网下载使用，请在转载有关文章时务必尊重该文章的著作权，保留本网注明的“稿件来源”，并自负版权等法律责任。</p>
            </article>
          </div>
        </div>
      </section>
    );
  }
}

export default About;