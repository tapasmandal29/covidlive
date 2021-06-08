import React from 'react';

function CovidData(props) {
    return (
        <>
            <tr>
                <td data-label="Country Name" className="td_bold">{props.countryname}</td>
                <td data-label="TotalConfirmed">{props.TotalConfirmed}</td>
                <td data-label="TotalDeaths">{props.TotalDeaths}</td>
                <td data-label="NewConfirmed">{props.NewConfirmed}</td>
                <td data-label="NewDeaths">{props.NewDeaths}</td>
                <td data-label="TotalRecovered">{props.TotalRecovered}</td>
            </tr>
        </>
    );
}

export default CovidData;