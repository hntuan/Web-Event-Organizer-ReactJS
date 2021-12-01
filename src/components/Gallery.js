import React, { Component } from 'react';
import GalleryItems from './GalleryItems';
import { connect } from "react-redux";

class Gallery extends Component {
    render() {
        console.log(this.props.gallery)
        var ShowGallery = this.props.gallery.map((item, index) => {
            return(
                <GalleryItems key={index} img={item.img} />
            )
        })
        return (
            <section className="gallery" id="gallery">
                <h1 className="heading">
                    our <span>gallery</span>
                </h1>
                <div className="box-container">
                    {ShowGallery}
                </div>
            </section>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        gallery: state.gallery,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Gallery);