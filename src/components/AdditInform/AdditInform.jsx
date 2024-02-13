// import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import css from '../AdditInform/AdditInform.module.css'
// import { Loader } from "../Loader/Loader"

export const AdditInform = () => {
    return (
        <>
            <div className={ css.containetAdditInfo}>
                <p className={ css.AdditInfoText }>Additional information</p>
                <ul className={ css.AdditInfoList}>
                    <li><Link to='cast'>Cast</Link></li>
                    <li> <Link to='reviews'>Reviews</Link></li>
                </ul>               
            </div>
                <Outlet />
        </>
    )
}