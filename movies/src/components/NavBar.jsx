import React, { Fragment, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Routes, Route, NavLink } from "react-router-dom";
import Movies from './Movies'
import Show from './Show'
import Trending from './Trending'
import DetailMovies from './DetailMovies'

const NavBar = () => {
    const [toggle, setToggle] = useState(true)
    const [searchValue, setSearchValue] = useState()
    return (
        <Fragment>
            <nav className={toggle ? '' : 'navBarColor'}>
                <div className='nav-options'>
                    <h1 className={toggle ? '' : 'heading'}>ReactMovies</h1>
                    <NavLink to="">
                        <span className={toggle ? '' : 'light-options'}>Movies</span>
                    </NavLink>
                    <NavLink to="/Show">
                        <span className={toggle ? '' : 'light-options'}>Show</span>
                    </NavLink>
                    <NavLink to="/Trending">
                        <span className={toggle ? '' : 'light-options'}>Trending</span>
                    </NavLink>

                </div>
                <div className='input-group'>
                    <input type='text' placeholder='Enter name film' onChange={(e) => setSearchValue(e.target.value)} />
                    <BiSearch fontSize={21} className='search' />
                    <div className={toggle ? 'dark-switcher' : 'light-switcher'} onClick={() => setToggle(!toggle)}>
                        <div className={toggle ? 'color-switcher-dark' : 'color-switcher-light'}></div>
                    </div>
                </div>

            </nav>

            <Routes>
                <Route path='' element={<Movies toggle={toggle} searchValue={searchValue} />} />
                <Route path='Show' element={<Show toggle={toggle} searchValue={searchValue} />} />
                <Route path='Trending' element={<Trending toggle={toggle} searchValue={searchValue} />} />
                <Route path='DetailMovies' element={<DetailMovies />} />

            </Routes>
        </Fragment>
    )
}

export default NavBar