import React from 'react'
import "./Banner.css"

function Banner() {
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

            
        </div>
    )
}

export default Banner
