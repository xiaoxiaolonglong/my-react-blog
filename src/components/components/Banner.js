import React from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper/swiper-bundle.min.js'
import 'swiper/swiper-bundle.min.css'

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hot:[],tui:[],tags:[]};
    }
    componentDidMount() {
        this.createSwiper()
    }
    createSwiper(){
        var gallerySwiper = new Swiper('#gallery',{
            spaceBetween: 10,
            autoplay:true,
            thumbs: {
              swiper: {
                el: '#thumbs',
                spaceBetween: 10,
                slidesPerView: 4,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper 
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
              },
            },
            observer:true,//修改swiper自己或子元素时，自动初始化swiper 
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              disabledClass: 'my-button-disabled',
            }
          })
      
    }
    componentWillUnmount() {
        //程序卸载时
        
    }
    render() {
        return (
            <div>
                <div className="swiper-container" id="gallery" style={{height:320,backgroundColor:'#444'}}>
                    <div className="swiper-wrapper">
                        {
                            this.props.banners.map((item,index) => {
                                return( 
                                    <div key={index} className="swiper-slide">
                                        <a href={item.fields.link_url} title={item.fields.text_info}>
                                            <img src={'http://127.0.0.1:8000/media/'+item.fields.img} alt={item.fields.text_info} className="wp-post-image" />
                                        </a>
                                        <span className="text-info"><strong>{item.fields.text_info}</strong></span>
                                    </div>
                                )
                            })
                        }
                    </div>
                     {/* <!-- 如果需要导航按钮 -->  */}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
                <div className="swiper-container" id="thumbs" style={{height:105,backgroundColor:'#222'}}>
                    <div className="swiper-wrapper">
                        {
                            this.props.banners.map((item,index) => {
                                return( 
                                    <div key={index} className="swiper-slide" style={{width:100}}>
                                        <img src={'http://127.0.0.1:8000/media/'+item.fields.img} alt={item.fields.text_info} className="wp-post-image"/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                </div>
        );
    }
}

export default Banner;