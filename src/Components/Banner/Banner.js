import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from "../../Axios"
import {API_KEY} from "../../Constants/Constants"

function Banner() {
    const [state, setstate] = useState([])
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data);
        })
      
    }, [])
    return (
        <div className="banner">
            <div className="content">
                <h1 className="title">Movie Name</h1>
                <div className="banner-buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description"> Ramzi : Note that the development build is not optimized.To create a production build, use npm run build.</h1>

            </div>
                   <div className="fade"></div>
            
        </div>
    )
}

export default Banner
