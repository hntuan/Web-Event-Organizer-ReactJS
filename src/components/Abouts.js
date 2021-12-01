import React, { Component } from 'react';

class Abouts extends Component {
    render() {
        return (
            <section className="about" id="about" >
                <h1 className="heading">
                    <span>About</span> us{" "}
                </h1>
                <div className="row">
                    <div className="image">
                        <img src="./img/about-img.jpg"/>
                    </div>
                    <div className="content">
                        <h3>We will give a very special celebration for you</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores debitis
                            voluptates natus accusantium tempora optio in. Mollitia magnam iure modi
                            facilis quo natus laboriosam temporibus animi, sit architecto. Id, ex?
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
                            incidunt maiores? Illo saepe repellendus rem tempore quod dolore minima
                            tempora.
                        </p>
                        <a className="btn">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section >
        );
    }
}

export default Abouts;