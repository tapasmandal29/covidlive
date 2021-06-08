import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import WorldwideCovid from "./WorldWideCovid";
import IndiaCovid from "./IndiaCovid";

function CovidDataContainer() {
  return (
    <>
      <div className="data_container">
      <div className="covidHeadinh_container d-flex justify-content-center align-items-center flex-column text-center">
        <h4>Covid-19 data</h4>
        <p>world wide and India wise</p>
      </div>
        <div className="covid_link">
          <NavLink exact to="/worldcovid" activeClassName="activeCovid_link">World Covid</NavLink>
          <span></span>
          <NavLink exact to="/indiacovid" activeClassName="activeCovid_link">India Covid</NavLink>
        </div>

        <Switch>
          <Route exact path="/worldcovid" render={()=>
            <WorldwideCovid/>
          } />
          <Route exact path="/indiacovid" component={IndiaCovid} />
          <WorldwideCovid/>
        </Switch>
      </div>
    </>
  );
}

export default CovidDataContainer;
