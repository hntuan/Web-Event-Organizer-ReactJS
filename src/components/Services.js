import React, { Component } from 'react';
import ServicesItem from './ServicesItem';
import { connect } from "react-redux";

class Services extends Component {
    render() {
  
        var ServicesItems = this.props.services.map((item,index) => {
            return (
                <ServicesItem key={index} icon={item.icon} name={item.name} content={item.content}/>
            )
        })
        return (
            <section className="service" id="service">
                <h1 className="heading">
                    {" "}
                    our <span>services</span>
                </h1>
                <div className="box-container">
                   {ServicesItems}
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        services: state.services,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Services);