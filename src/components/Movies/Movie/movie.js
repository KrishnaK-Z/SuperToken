import React from "react";
import LazyImage from "../../LazyImage";



const Movie = ({movie}) => {
    // Movie item details.
    const {adult, title, poster_path: moviePoster, popularity, release_date} = movie;

    // Calculate the percentage value based on the popularity,
    // Assuming the max popularity is 5000/-.
    const calculatePercentage = (portion) => {
        return ((portion/5000) * 100).toFixed(2);
    }

    return (
        <div className='movie'>
            {
                movie && (
                    <>
                        <div className={`img-wrapper ${adult ? 'overlay' : ''}`}>
                            <LazyImage alt={title} src={moviePoster} />
                        </div>
                        <progress max="100" value={calculatePercentage(popularity)} className="html5">
                            <div className="progress-bar">
                                <span style={{width: `${calculatePercentage(popularity)}%`}}>{popularity}</span>
                            </div>
                        </progress>
                        <h2>{title}</h2>
                        <p>{release_date}</p>
                    </>
                )
            }
        </div>
    )
}

export default Movie;