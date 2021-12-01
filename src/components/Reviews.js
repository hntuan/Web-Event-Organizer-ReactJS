import React, { Component } from "react";
import { connect } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";

import SwiperCore, { EffectCoverflow, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Autoplay]);

class Reviews extends Component {
    render() {
        
        var showReviews = this.props.reviews.map((review, index) => {
            return (
                <SwiperSlide key={index}>
                    <div className="box">
                        <i className="fas fa-quote-right" />
                        <div className="user">
                            <img src={review.img} />
                            <div className="user-info">
                                <h3>{review.name}</h3>
                                <span>{review.content}</span>
                            </div>
                        </div>
                        <p>
                            {review.dicription}
                            
                        </p>
                    </div>
                </SwiperSlide>
            )
        })
        return (
            <section className="review" id="review">
                <h1 className="heading">
                    {" "}
                    Client's <span>Review</span>{" "}
                </h1>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": true
                    }}
                    className="review-slider"
                >
                    {showReviews}
                </Swiper>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        reviews: state.reviews,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Reviews);
