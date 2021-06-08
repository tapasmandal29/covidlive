import React, { useEffect, useState } from 'react';
import axios from 'axios'
import IndiaCovidTable from './IndiaCovidTable';

function IndiaCovid() {
    const [indiaCovid, setindiaCovid] = useState([]);
    const [loading, setloading] = useState(false);
    useEffect(() => {
        const getdata = async () => {
            const res = await axios.get(`https://api.covid19india.org/data.json`);
            setindiaCovid(res.data.statewise);
            setloading(true);
        }
        getdata();
    }, []);

    const serchState = () => {
        let search = document.getElementById("searchInput").value.toUpperCase();
        let mytable = document.getElementById("indiatable");
        let tr = mytable.getElementsByTagName('tr');
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                let searchState = td.innerHTML || td.textContent;
                if (searchState.toUpperCase().indexOf(search) > -1) {
                    tr[i].style.display = "";
                }
                else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    return (
        <>
            <div className="indiaWideCovid">
                <input className="searchBox" type="text" placeholder="search state" id="searchInput" onKeyUp={serchState} />
                <table className="mytable" id="indiatable">
                    <thead>
                        <tr>
                            <th>State Name</th>
                            <th>Confirmed</th>
                            <th>Active</th>
                            <th>Deaths</th>
                            <th>Recovered</th>
                        </tr>
                    </thead>
                    {loading ?
                        <tbody>
                            {indiaCovid.map((val, ind) => {
                                return (<>
                                    <IndiaCovidTable
                                        key={ind}
                                        confirmed={val.confirmed}
                                        state={val.state}
                                        deaths={val.deaths}
                                        recovered={val.recovered}
                                        active={val.active}
                                    />
                                </>);
                            })}
                        </tbody> :
                        <div className="spinner_container">
                            <div className="spinner-grow text-info" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>}

                </table>
            </div>
        </>
    );
}

export default IndiaCovid;