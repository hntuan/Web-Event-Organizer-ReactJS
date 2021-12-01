import React, { Component } from 'react';

class GalleryItems extends Component {
    render() {
        return (
            <div className="box">
                <img src={this.props.img} />
                <h3 className="title">Photos and events</h3>
                <div className="icons">
                    <a className="fas fa-heart" />
                    <a className="fas fa-share" />
                    <a className="fas fa-eye" />
                </div>
            </div>
        );
    }
}

export default GalleryItems;