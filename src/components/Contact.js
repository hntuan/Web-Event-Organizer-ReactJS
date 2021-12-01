import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section className="contact" id="contact">
                <h1 className="heading">
                    {" "}
                    Client's <span>Contact</span>{" "}
                </h1>
                <form action="true">
                    <div className="inputBox">
                        <input type="text" placeholder="name" />
                        <input type="email" placeholder="email" />
                    </div>
                    <div className="inputBox">
                        <input type="number" placeholder="number" />
                        <input type="text" placeholder="subject" />
                    </div>
                    <textarea
                        
                        placeholder="Your message"
                        
                        cols={30}
                        rows={10}
                        defaultValue={""}
                    />
                    <input type="submit" value="Send message" className="btn" />
                </form>
            </section>

        );
    }
}

export default Contact;