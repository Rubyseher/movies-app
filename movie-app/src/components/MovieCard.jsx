import React from "react";

function MovieCard ({url,title}) {
    function clickedFav(){
        alert("okay")
    }

    return (
        <div className='movie-card'>
            <img src={url} alt={title}/>
            <button onClick={()=> clickedFav()}>💜</button>
        </div>
    )
}

export default MovieCard