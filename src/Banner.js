import React from 'react'
import "./Banner.css"

function Banner() {
    
    function truncate(string,n) {
        return string?.length > n ? string.substr(0,n-1) + '...' : string;
    }
  return (
    <header className="banner" style={{
        backgroundSize:"cover",
        backgroundImage: `url("https://blog.resellerclub.com/wp-content/uploads/2017/02/netflix.png")`,
        backgroundPosition: "center center"
    }}>
        <div className="banner_contents">
            <h1 className="banner_title">Movie Name</h1>
            <div className="banner-buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">
                {truncate(`This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description
                This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description`,150)}
                </h1>
        </div>
        <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner