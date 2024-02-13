import css from '../NotFoundPage/NotFoundPage.module.css'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
    return (
        <div>
            <h1>Ойойой нема сторінки</h1>
            <Link to='/'>Back to home page</Link>
        </div>
    )
}