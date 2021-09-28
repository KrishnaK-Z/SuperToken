import React from "react";
import LazyLoad from 'react-lazy-load';

const LazyImage = ({src, alt}) => {
    return (
        <LazyLoad>
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${src}`} alt={alt}/>
        </LazyLoad>
    )
}

export default LazyImage;