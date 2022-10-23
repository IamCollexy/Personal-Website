import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';


const MainNavigation = () => {
    return ( 
    <header className={classes.header}>
        <div className={classes.logo}>
            Collexydegreatest.<span> CDG</span>
        </div>
        <nav className={classes.nav}>
            <ul>
            <li>
            <NavLink  to='/' 
            className={({isActive}) => isActive ? classes.active : null}>
                Home
                </NavLink>
                </li>
                <li>
            <NavLink to='/me-page' 
            className={({isActive}) => isActive ? classes.active : null}>
                Me
                </NavLink>
            <NavLink to='/about-page' 
            className={({isActive}) => isActive ? classes.active : null}>
              About
                </NavLink>
                </li>
            </ul>
        </nav>
    </header>
    )
};
export default MainNavigation;