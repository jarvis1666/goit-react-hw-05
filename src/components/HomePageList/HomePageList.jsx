import { Link } from 'react-router-dom';

export const HomePageList = ({ movie} ) => {
    return (
        <li key={movie.id}>
                <Link to={ `/movies/${movie.id}`}>{movie.title}</Link> 
    </li>
    )
}