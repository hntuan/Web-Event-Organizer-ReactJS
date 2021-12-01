import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="box-container">
                    <div className="box">
                        <h3>Branches</h3>
                        <a href="#">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> Mumbai{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> Jogeshwari{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> Goregaon{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> Navi mumbai{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> Andheri{" "}
                        </a>
                    </div>
                    <div className="box">
                        <h3>Quick links</h3>
                        <a href="#home">
                            {" "}
                            <i className="fas fa-arrow-right" /> Home{" "}
                        </a>
                        <a href="#service">
                            {" "}
                            <i className="fas fa-arrow-right" /> Service{" "}
                        </a>
                        <a href="#about">
                            {" "}
                            <i className="fas fa-arrow-right" /> About{" "}
                        </a>
                        <a href="#gallery">
                            {" "}
                            <i className="fas fa-arrow-right" /> Gallery{" "}
                        </a>
                        <a href="#price">
                            {" "}
                            <i className="fas fa-arrow-right" /> Price{" "}
                        </a>
                        <a href="#review">
                            {" "}
                            <i className="fas fa-arrow-right" /> Review{" "}
                        </a>
                        <a href="#contact">
                            {" "}
                            <i className="fas fa-arrow-right" /> Contact{" "}
                        </a>
                    </div>
                    <div className="box">
                        <h3>Contact info</h3>
                        <a href="#">
                            {" "}
                            <i className="fas fa-phone" /> +123-456-7890{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-phone" /> +111-222-3333{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-envelope" /> hotuantd@gmail.com{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-envelope" /> abcdefgh@gmail.com{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> Hanoi, Vietnam{" "}
                        </a>
                    </div>
                    <div className="box">
                        <h3>Follow us</h3>
                        <a href="#">
                            {" "}
                            <i className="fab fa-facebook-f" /> Facebook{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fab fa-twitter" /> Twitter{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fab fa-instagram" /> Instagram{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fab fa-linkedin" /> LinkedIn{" "}
                        </a>
                    </div>
                </div>
                <div className="credit">
                    {" "}
                    Created by <span>Mr. Web designer</span> | all rights reserved{" "}
                </div>
            </section>

        )
    }
}
