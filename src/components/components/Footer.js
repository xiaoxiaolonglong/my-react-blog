import React from 'react';

class Footer extends React.Component {
  render() {
    return (
    <footer className="footer">
        <div className="copyright"> © 2010- 2018 · All Rights Reserved
            · <a href="https://www.django.cn">Django中文网</a>
            · <a href="http://www.miibeian.gov.cn" target="_blank">湘ICP备17023990号</a> 版权所有 © Django中文网</div>
    </footer>
    );
  }
}

export default Footer;