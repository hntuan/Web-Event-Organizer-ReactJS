import React, { Component } from "react";
import { connect } from "react-redux";

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper-bundle.min.css';

import SwiperCore, {
    EffectCoverflow, Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Autoplay]);

class Home extends Component {
    render() {
        var ShowSlide = this.props.home.map((slide, index) => {
            return (
                <SwiperSlide key={index}>
                    <img src={slide.img} />
                </SwiperSlide>
            )
        })
        return (
            <section className="home" id="home">
                <div className="content">
                    <h3>
                        It time to celebrate! th best <span> event organizers </span>
                    </h3>
                    <a href="#" className="btn">
                        Contact Us
                    </a>
                </div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        "rotate": 0,
                        "stretch": 0,
                        "depth": 100,
                        "modifier": 2,
                        "slideShadows": true
                    }}
                    loop={true}
                    autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }}
                    className="home-slider"
                >
                    {ShowSlide}

                </Swiper>
            </section>



        );
    }
}
const mapStateToProps = (state) => {
    return {
        home: state.home,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
