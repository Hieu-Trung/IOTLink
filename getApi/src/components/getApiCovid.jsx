import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import Moment from 'react-moment';
const GetApiCovid = () => {

    const [dataCovid, setDataCovid] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-30T00:00:00Z');
            const data = res && res.data ? res.data : [];
            setDataCovid(data)
            console.log(res);
        }
        fetchData();
    }, [])

    return (
        <div>
            <h2>List COVID-19 in VIET NAM</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Active</th>
                        <th>Confirmed</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {dataCovid && dataCovid.length > 0 && dataCovid.map(item => {
                        return (
                            <tr key={item.ID}>
                                <td><Moment format='DD/MM/YYYY'>{item.Date}</Moment></td>
                                <td>{item.Active}</td>
                                <td>{item.Confirmed}</td>
                                <td>{item.Deaths}</td>
                                <td>{item.Recovered}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>
        </div>
    )
}

export default GetApiCovid