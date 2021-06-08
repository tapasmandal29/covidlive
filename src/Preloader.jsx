import React from 'react';
//import $ from "jquery";
import './preloaderStyle.css';
import loader from './images/loader.gif';

function Preloader() {
    
    return (
        <>
            <div class="preloader_container">
                <img src={loader} alt="preloader" />
            </div>
        </>
    );
}

export default Preloader;