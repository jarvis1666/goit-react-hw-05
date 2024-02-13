import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from '../Navbar/Navbar.module.css'

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export const Navbar = () => {
  return (
    <div className={ css.containerNav}>
        <nav className={ css.nav}>
          <NavLink to='/' className={buildLinkClass}> Home</NavLink>
          <NavLink to='/movies' className={buildLinkClass}>Movies</NavLink>
        </nav>
      </div>
    )
}