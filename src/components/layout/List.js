import React from 'react';
import NavBar from '../components/NavBar';

class List extends React.Component {
  render() {
    return (
      <section className="post-left">
        <NavBar></NavBar>
        <div className="index-main clearfix">
          <div className="main-title">
              <h4 className="post-left-title">分类：Python</h4>
          </div>
          <div className="row">
              <div className="article-box clearfix excerpt-1">
                  <div className="col-md-4">
                      <div className="thumbnail">
                          <a href="/show-2.html" title="博客列入12家估值飙升互联网创业企业 Quora第一">
                              <img src="static/picture/quora.png" srcSet="media/article_img/2018/10/07/quora.png"
                                  alt="博客列入12家估值飙升互联网创业企业 Quora第一" className="wp-post-image" width="240"
                                  height="160" /></a>
                      </div>
                  </div>
                  <div className="col-md-8">
                      <h2><a href="/show-2.html" target="_blank"
                              title="博客列入12家估值飙升互联网创业企业 Quora第一">博客列入12家估值飙升互联网创业企业 Quora第一</a></h2>
                      <p className="txtcont hidden-xs"><a href="/show-2.html" target="_blank"
                              title="博客列入12家估值飙升互联网创业企业 Quora第一">美国科技博客Business
                              Insider今天刊文称，Facebook、Zynga和Groupon等创业企业的估值已经大幅上升，而风险投资公司开始将目光瞄准其他一些公司，这导致许多公司的估值近期大幅上升。</a>
                      </p>
                      <div className="meta"><span className="label label-info"><a href="/list-2.html">Python</a></span>
                          <time className="item"><i className="fa fa-clock-o"></i>2018年10月07日
                          </time>
                      </div>
                  </div>
              </div>

              <div className="article-box clearfix excerpt-1">
                  <div className="col-md-4">
                      <div className="thumbnail">
                          <a href="/show-7.html" title="网站设计-不只是门面漂亮这么简单">
                              <img src="static/picture/web1.jpg" srcSet="media/article_img/2018/10/07/web1.jpg"
                                  alt="网站设计-不只是门面漂亮这么简单" className="wp-post-image" width="240" height="160" /></a>
                      </div>
                  </div>
                  <div className="col-md-8">
                      <h2><a href="/show-7.html" target="_blank" title="网站设计-不只是门面漂亮这么简单">网站设计-不只是门面漂亮这么简单</a>
                      </h2>
                      <p className="txtcont hidden-xs"><a href="/show-7.html" target="_blank"
                              title="网站设计-不只是门面漂亮这么简单">有人将电子商务网站的视觉设计视为纯粹的美学行为，事实上它还有另外一个很重要的作用，浏览体验。如果运用的好的话，色彩、字体等设计元素能够成功地将访客引导到某一个页面，凸显产品的特征。而较差的浏览体验会分散访客的注意力，进而减少了销售。</a>
                      </p>
                      <div className="meta"><span className="label label-info"><a href="/list-2.html">Python</a></span>
                          <time className="item"><i className="fa fa-clock-o"></i>2018年10月07日
                          </time>
                      </div>
                  </div>
              </div>

              <div className="article-box clearfix excerpt-1">
                  <div className="col-md-4">
                      <div className="thumbnail">
                          <a href="/show-8.html" title="谷歌用户体验设计准则">
                              <img src="static/picture/tx_3zybskx.jpg"
                                  srcSet="media/article_img/2018/10/07/tx_3zybSKX.jpg" alt="谷歌用户体验设计准则"
                                  className="wp-post-image" width="240" height="160" /></a>
                      </div>
                  </div>
                  <div className="col-md-8">
                      <h2><a href="/show-8.html" target="_blank" title="谷歌用户体验设计准则">谷歌用户体验设计准则</a></h2>
                      <p className="txtcont hidden-xs"><a href="/show-8.html" target="_blank"
                              title="谷歌用户体验设计准则">Google用户体验团队致力于创建有用的（useful）、快速的（fast）、简单的（simple）、有吸引力的（engaging）、创新的（
                              innovative）、适合大众的（universal）、有用的（profitable）、漂亮的（beautiful）、值得信赖的（trustworthy）、个性化的（personable）的应用。</a>
                      </p>
                      <div className="meta"><span className="label label-info"><a href="/list-2.html">Python</a></span>
                          <time className="item"><i className="fa fa-clock-o"></i>2018年10月07日
                          </time>
                      </div>
                  </div>
              </div>
          </div>
          <div className="pagination">
              <ul>
                  <li className="prev-page"></li>
                  <li className="active"><span>1</span></li>
                  <li><a href="?page=2">2</a></li>
                  <li className="next-page"><a href="?page=2">下一页</a></li>
              </ul>
          </div>
      </div>
    </section>
    );
  }
}

export default List;