import React from 'react';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    AOS.init()
    return (
        <>
            <div className="home_container">
                <div className="home_content" data-aos="fade-right">
                    <h4>Live C<span>o</span>vid</h4>
                    <p className="paragraph">Staying home save lives</p>
                    <p className="paragraph">Be <span>READY</span> to fight <span style={{ fontWeight: 600, }}>COVID19</span></p>
                    <p className="animated"><span>#</span><span className="hashtag"><Typewriter
                        options={{
                            strings: ['IndiaFightsCorona', 'StaySafe', 'SocialDistancing', 'StayHomeSaveLives', 'IndiaAgainstCOVID19', 'StayTogether'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></span>
                    </p>
                    <a href="https://www.pmcares.gov.in/en/" target="_blank">
                        <button className="donate"><span>Donate</span></button>
                    </a>

                </div>
            </div>
        </>
    );
}

export default Home;