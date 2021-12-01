import React, { Component } from 'react';

class Header extends Component {

    onMobileMenu = () =>{
        let menu = document.querySelector('#menu-bars');
        let navbar = document.querySelector('.navbar');
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }

    onScrollMenu = () =>{
        let menu = document.querySelector('#menu-bars');
        let navbar = document.querySelector('.navbar');
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
        
    }

    render() {
        return (
            <header className="header">
                <a className="logo">
                    <span>e</span>vento
                </a>
                <nav className="navbar" onClick={this.onScrollMenu}>
                    <a href="#home">Home</a>
                    <a href="#service">Service</a>
                    <a href="#about">About</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#price">Price</a>
                    <a href="#review">Review</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div id="menu-bars" onClick={this.onMobileMenu} className="fas fa-bars" />
            </header>
        );
    }
}

export default Header;