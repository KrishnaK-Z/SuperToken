import React from "react";
import Movie from "./Movie";

const Movies = ({movies}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='movies'>
            {
                movies?.map(({id, ...rest}) =>
                    <Movie key={id} movie={rest} />
                )
            }
        </div>
    )
}

export default Movies;