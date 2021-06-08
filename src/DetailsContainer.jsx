import React from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import Symptoms from './Symtoms';
import OverView from './OverView';
import Prevention from './Prevention';
import AdviceImg from './images/advice.png';

function DetailsContainer() {
    return (
        <>
            <div className="details_container container-fluid">
                <div className="details_links">
                    <NavLink exact activeClassName="active_Details_Links" to="/" >OverView</NavLink>
                    <NavLink exact activeClassName="active_Details_Links" to="/symptoms">Symptoms</NavLink>
                    <NavLink exact activeClassName="active_Details_Links" to="/prevent">Prevention</NavLink>
                </div>
                <Switch>
                    <Route exact path='/' component={OverView} />
                    <Route exact path='/symptoms' component={Symptoms} />
                    <Route exact path='/prevent' component={Prevention} />
                    <OverView />
                </Switch>
            </div>

            <div className="advice_container">
                <div className="advice_heading">What should you do to protect your friend and famillly?</div>
                <div className="advice_content">
                    <div className="container">
                        <div className="row flex-column-reverse flex-lg-row ">
                            <div className="col col-lg-6 col-md-12 col-12 mainImage_container">
                               <img className="advice_main_img" src={AdviceImg} alt="advice by who"/>
                            </div>
                            <div className="col col-lg-6 col-md-12 col-12">
                                <div className="advice">
                                    <div className="advice_img d-flex justify-content-center align-items-center"><i className="fa fa-home" aria-hidden="true"></i></div>
                                    <p>Place yourself in quarantine for 14 days. Or the time indicated by your national or local regulation.</p>
                                </div>
                                <div className="advice">
                                    <div className="advice_img d-flex justify-content-center align-items-center"><i className="fa fa-volume-control-phone" aria-hidden="true"></i></div>
                                    <p>Contact your local health authorizes and let them know that you are contact of aconfirm case of COVID-19.</p>
                                </div>
                                <div className="advice">
                                    <div className="advice_img d-flex justify-content-center align-items-center"><i className="fa fa-medkit" aria-hidden="true"></i></div>
                                    <p>If you are begain of feel symptoms of Covid-19 reach out to a health care provider for advice and recomdation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default DetailsContainer;