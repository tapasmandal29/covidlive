import React from 'react';

const Nav = () => {
    const activeHumburger = () => {
        let nav = document.querySelector('.nav');
        nav.classList.toggle('active');
    }
    return (
        <>
            <div className="humburger">
            <div className="logo">Live C<span>o</span>vid</div>
                <span onClick={activeHumburger}><i className="fa fa-bars" aria-hidden="true"></i></span>
            </div>
            <div className="nav">
                <div className="logo">Live C<span>o</span>vid</div>
                <ul>
                    <li>Home</li>
                    <li>World Live</li>
                    <li>India Live</li>
                </ul>
            </div>
        </>);
}

export default Nav;