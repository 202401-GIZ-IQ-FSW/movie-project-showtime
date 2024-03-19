import React from "react";

function Card({title, date, voteAverage, overview, posterPath}){
    return (
        <div className="flex flex-row w-52">
            <div className="flex flex-col w-52 mr-4">
                <h1>{title}</h1>
                <div className="flex flex-col ml-4">
                    <h3>{date}</h3>
                    <p>{overview}</p>
                    <small>Vote Average: {voteAverage}</small>
                </div>
                {posterPath && <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={title} />}
            </div>
        </div>
    );
}

export default Card;
