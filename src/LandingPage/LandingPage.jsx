import React, { useState, useEffect } from "react"
import axios from 'axios'
import './LandingPage.css';

const LandingPage = () => {
    const [storiesList, getStoriesList] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/task')
            .then((res) => {
                getStoriesList(res?.data?.data?.results)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <div className="mainDiv">
            {storiesList?.length ? storiesList?.map(ele => {
                return <div className="card">
                    <h4>{ele?.title}</h4>
                    <p>{ele?.byline}</p>
                    <p>{ele?.item_type}</p>
                    <p>{ele?.section}</p>
                    <p>{ele?.abstract}</p>
                </div>
            }) : <div className="card"><h1>Data Not Found</h1></div>}
        </div>
    )
}

export default LandingPage