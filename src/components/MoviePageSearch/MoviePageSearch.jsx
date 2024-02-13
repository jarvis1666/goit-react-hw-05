// import { getMovieSearch} from '../../apiMovies'
import { Link, useLocation } from 'react-router-dom';


export const MoviePageSearch = ({ movieSearch } ) => {
    const location = useLocation();
    return (
        <>
           <ul>
                {movieSearch && movieSearch.results && movieSearch.results.map(movie => (
                    <li key={movie.id}><Link to={`/movies/${movie.id}` } state={ location}>{movie.title}</Link> </li>
                ))}
            </ul>
        </>
    )
    
}


{/*  */}