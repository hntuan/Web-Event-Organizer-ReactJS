import React, { Component } from 'react';

class ThemeToggler extends Component {

    // ------theme Toggler------
    toggleBtn = () => {
        let themeToggler = document.querySelector('.theme-toggler');
        themeToggler.classList.toggle('active');
    }

    CLickColor = () => {
        let themeToggler = document.querySelector('.theme-toggler');
        themeToggler.classList.remove('active');

        document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
            btn.onclick = () =>{
                let color = btn.style.backgroundColor;
                document.querySelector(':root').style.setProperty('--main-color',color);
            }
        });
    }

render() {
    return (
        <div className="theme-toggler">
            <div className="toggle-btn" onClick={this.toggleBtn}>
                <i className="fas fa-cog" />
            </div>
            <h3>Choose Color</h3>
            <div className="buttons" onClick={this.CLickColor}>
                <div className="theme-btn" style={{ backgroundColor: "#3867d6" }} />
                <div className="theme-btn" style={{ backgroundColor: "#f7b731" }} />
                <div className="theme-btn" style={{ backgroundColor: "#ff0033" }} />
                <div className="theme-btn" style={{ backgroundColor: "#20bf6b" }} />
                <div className="theme-btn" style={{ backgroundColor: "#fa8231" }} />
                <div className="theme-btn" style={{ backgroundColor: "#fc427b" }} />
            </div>
        </div>
    );
}
}

export default ThemeToggler;