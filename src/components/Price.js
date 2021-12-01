import React, { Component } from 'react';
import PriceItems from './PriceItems';
import { connect } from "react-redux";

class Price extends Component {
    render() {
        console.log(this.props.price);

        var ShowPrice = this.props.price.map((price, index) => {
            return(
                <PriceItems key={index} name={price.name} price={price.price}/>
            )
        })
        return (
            <section className="price" id="price">
                <h1 className="heading">
                    {" "}
                    our <span>price</span>{" "}
                </h1>
                <div className="box-container">
                    {ShowPrice}
                </div>
            </section>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        price: state.price,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Price);