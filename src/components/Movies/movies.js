import React, {useEffect, useRef} from "react";
import Movie from "./Movie";

const Movies = ({movies}) => {

    const scrollTo = useRef(null);

    useEffect(() => {
        scrollTo.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }, [])


    return (
        <div className='movies'>
            {
                movies?.map(({id, ...rest}) =>
                    <Movie key={id} movie={rest} />
                )
            }
            <div ref={scrollTo} className='scroll-to' />
        </div>
    )
}

export default Movies;