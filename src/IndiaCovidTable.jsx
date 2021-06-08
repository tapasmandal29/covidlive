import React from 'react';
function IndiaCovidTable(props) {
    return (
       <>
           <tr>
               <td data-label="State Name" className="td_bold">{props.state}</td>
               <td data-label="Confirmed">{props.confirmed}</td>
               <td data-label="Active">{props.active}</td>
               <td data-label="Deaths">{props.deaths}</td>
               <td data-label="Recovered">{props.recovered}</td>
           </tr>
       </>
    );
}

export default IndiaCovidTable;