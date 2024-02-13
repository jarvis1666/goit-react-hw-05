import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ErrorMessage } from "../ ErrorMessage/ ErrorMessage";
import { Loader } from "../Loader/Loader";
import { getMovieCasts } from '../../apiMovies'
import css from '../MovieCast/MovieCast.module.css'

export const MovieCast = () => {
    const { movieId}  = useParams();
    const [casts, setCasts] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const controller = new AbortController();
        async function fetchData() {
            try {
                const fetchedMovieCasts = await getMovieCasts({
                    movieId: movieId,
                    abortController: controller,
                });
                setLoading(true)
                setError(false)
                setCasts(fetchedMovieCasts);
            } catch(error) {
            if (error.code !== 'ERR_CANCELED') {
                    setError(true)
                    console.log(error);
                }
            } finally {
                setLoading(false)
            }
    
        }
        fetchData();
        return () => {
            controller.abort();
        }
    }, [movieId])
    return (
        <>
        
        {error && <ErrorMessage />}
        {loading && <Loader />}
        {casts &&
            <ul className={ css.castList}>{casts.map(cast =>
                <li key={cast.id} className={ css.castListItem} >
                    <img className={ css.castImg} src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt={cast.character} />
                    <p>{ cast.name}</p>
                    <p>Character: {cast.character}</p>
                </li>)}
            </ul>
        }   
        </>
    )
}