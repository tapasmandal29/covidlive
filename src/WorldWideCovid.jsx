import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CovidData from './CovidData';

function WorldWideCovid() {
    const [WorldCovid, setWorldCovid] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        const getdata = async () => {
            const res = await axios.get(`https://api.covid19api.com/summary`);
            //console.log(res.data.Countries);
            setWorldCovid(res.data.Countries);
            setloading(true);
        }
        getdata();
    }, [])

    const searchCountry = () => {
        let search = document.getElementById("search").value.toUpperCase();
        let mytable = document.getElementById('worldTable');
        let tr = mytable.getElementsByTagName("tr");

        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName("td")[0];

            if (td) {
                let searchData = td.textContent || td.innerHTML;
                if (searchData.toUpperCase().indexOf(search) > -1) {
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
            <div className="WorldWideCovid">
                <input className="searchBox" type="text" placeholder="search country" id="search" onKeyUp={searchCountry} />
                <table className="mytable" id="worldTable">
                    <thead>
                        <tr>
                            <th>Country Name</th>
                            <th>TotalConfirmed</th>
                            <th>TotalDeaths</th>
                            <th>NewConfirmed</th>
                            <th>NewDeaths</th>
                            <th>TotalRecovered</th>
                        </tr>
                    </thead>
                    {loading ? <tbody>

                        {WorldCovid.map((val, ind) => {
                            return (<>
                                <CovidData
                                    key={ind}
                                    countryname={val.Country}
                                    NewConfirmed={val.NewConfirmed}
                                    TotalConfirmed={val.TotalConfirmed}
                                    NewDeaths={val.NewDeaths}
                                    TotalDeaths={val.TotalDeaths}
                                    NewRecovered={val.NewRecovered}
                                    TotalRecovered={val.TotalRecovered}
                                />
                            </>)
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

export default WorldWideCovid;