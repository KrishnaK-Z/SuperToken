import React from "react";
import Movie from "../Movies/Movie";

const Loader = () => {
    return (
        <div className='movies'>
            {[...Array(7)].map((e, i) => (
                <div className='movie movie-loader shine' />
            ))}
        </div>
    )
}

export default Loader;