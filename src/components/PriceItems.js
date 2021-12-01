import React, { Component } from 'react';

class PriceItems extends Component {
    render() {
        return (
            <div className="box">
                <h3 className="title">{this.props.name}</h3>
                <h3 className="amount">${this.props.price}</h3>
                <ul>
                    <li>
                        <i className="fas fa-check" />
                        Full services
                    </li>
                    <li>
                        <i className="fas fa-check" />
                        Decoration
                    </li>
                    <li>
                        <i className="fas fa-check" />
                        Music and Photos
                    </li>
                    <li>
                        <i className="fas fa-check" />
                        Food and drinks
                    </li>
                    <li>
                        <i className="fas fa-check" />
                        invitation card
                    </li>
                </ul>
                <a className="btn">
                    Check out
                </a>
            </div>
        );
    }
}

export default PriceItems;