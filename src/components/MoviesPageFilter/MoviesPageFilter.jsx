import { FcSearch } from "react-icons/fc";
import css from '../MoviesPageFilter/MoviesPageFilter.module.css'
export const MoviesPageFilter = ({ onSubmit, value, onChange }) => {
    
    return (
        <form onSubmit={onSubmit}>
            <input
                className={ css.filterInput}
                value={value}
                onChange={evt => onChange(evt.target.value)}
                type="text"
                name="query"
                placeholder="Search movies"
                autoComplete="off"
                autoFocus
                />
            <button type="submit" className={ css.btnFilter} >
          <FcSearch />
        </button>
            </form>
    )
}
