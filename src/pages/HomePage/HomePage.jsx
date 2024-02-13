import css from '../HomePage/HomePage.module.css'
import { useEffect, useState } from 'react'
//npm install axios
import { ErrorMessage } from '../../components/ ErrorMessage/ ErrorMessage';
import { Loader } from '../../components/Loader/Loader';
import { getMovies } from '../../apiMovies';
import { HomePageList } from '../../components/HomePageList/HomePageList';
// import { Link } from 'react-router-dom';

export default function HomePage() {
    const [movies, setMovies] = useState([]);
     const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        async function fetchData() {
            
            try {
                const fetchedMovies = await getMovies({
                    abortController: controller,
                });
                setLoading(true)
                setError(false)
                // console.log(fetchedMovies);
                setMovies(fetchedMovies)
            } catch (error) {
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
        };
    }, [])
    return <div>
        {error && <ErrorMessage />}
        {loading && <Loader />}
        <h2>Trending today</h2>
        {movies.length > 0 && <ul>
            {movies.map(movie => <HomePageList key={movie.id} movie={ movie} />)}
        </ul>}
    </div>;
    
}