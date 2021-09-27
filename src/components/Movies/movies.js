import React from "react";
import Movie from "./Movie";

const Movies = ({movies}) => {

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