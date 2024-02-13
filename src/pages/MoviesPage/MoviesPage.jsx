import css from '../MoviesPage/MoviesPage.module.css'

//npm install react-hot-toast
import toast from "react-hot-toast";
import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { ErrorMessage } from '../../components/ ErrorMessage/ ErrorMessage';
import { getMovieSearch } from '../../apiMovies'
import { MoviePageSearch} from '../../components/MoviePageSearch/MoviePageSearch.jsx'
import { useSearchParams } from 'react-router-dom';
import { MoviesPageFilter} from '../../components/MoviesPageFilter/MoviesPageFilter.jsx'

export default function MoviesPage() {
    const [movieSearch, setMovieSearch] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
  
    const [params, setParams] = useSearchParams();
    const filter = params.get('filter') ?? '';

    const changeFilter = newFiltetr => {
        // console.log(newFiltetr);
        params.set('filter', newFiltetr)
        setParams(params);
    }
       
// const onSearch = async (newQuery) => {
//     setQuery(`/${newQuery}`);
//     setMovieSearch([]);
// };
    useEffect(() => {
        const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
          const response = await getMovieSearch({
            query: filter,
            abortController: controller,
          })
        // console.log(response);
       setMovieSearch(response);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    }, [filter]);
  

    
 const handleSumbit = (even) => {
     even.preventDefault();
      // console.log(even.target);
    if (even.target.elements.query.value.trim() === "") {
      toast("Empty string!", {
        icon: "🧐",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
        
      return;
    }
   
    // onSearch(even.target.elements.query.value);
   even.target.reset();
  };
  // console.log(movieSearch.results.map(res => res));
    
    return(
        <>
        {error && <ErrorMessage />}
        {<MoviesPageFilter onSubmit={handleSumbit} value={filter} onChange={ changeFilter} />}
        {movieSearch && <MoviePageSearch movieSearch={ movieSearch} />}
        {/* <MoviePageSearch /> */}
         {loading && <Loader />}
        </>)
}

