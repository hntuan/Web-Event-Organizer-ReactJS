
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Abouts from './components/Abouts';
import Gallery from './components/Gallery';
import Price from './components/Price';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggler from './components/ThemeToggler'
import React, { Component } from 'react';


class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />

                <Services />

                <Abouts />

                <Gallery />

                <Price />

                <Reviews />

                <Contact />

                <Footer />

                <ThemeToggler />

            </div>
        );
    }
}

export default App;
