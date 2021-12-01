import React, { Component } from 'react';

class ServicesItem extends Component {
    render() {
        return (
            <div className="box">
                <i className={this.props.icon} />
                <h3>{this.props.name}</h3>
                <p>
                    {this.props.content}
                </p>
            </div>
        );
    }
}

export default ServicesItem;