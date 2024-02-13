import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ErrorMessage } from "../ ErrorMessage/ ErrorMessage";
import { Loader } from "../Loader/Loader";
import { getMovieReviews } from '../../apiMovies'

export const MovieReviews = () => {
    const { movieId}  = useParams();
    const [reviews, setReviews] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const controller = new AbortController();
        async function fetchData() {
            try {
                const fetchedMovieReviews = await getMovieReviews({
                    movieId: movieId,
                    abortController: controller,
                });
                setLoading(true)
                setError(false)
                setReviews(fetchedMovieReviews);
            } catch(error) {
            if (error.code !== 'ERR_CANCELED') {
                    setError(true)
                    
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
    return <>
       
        {error && <ErrorMessage />}
        {loading && <Loader />}
        {reviews && reviews.results && reviews.results.length > 0 ? (
            <ul>
                {reviews.results.map(review => ( 
                    <li key={review.id}>
                        <h3>{review.author}</h3>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>
        ) : (
            <p>No information about reviews 😭</p>
        )}
    </> 
}