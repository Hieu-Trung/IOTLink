import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import noImage from '../image/NoImage.jpg'
import { AiFillPlayCircle } from 'react-icons/ai'
import { NavLink } from "react-router-dom"

const Movies = ({ toggle, searchValue }) => {
    const input = searchValue
    const ResultSearch = input ? 'search' : 'discover'
    const [dataMovies, setDataMovies] = useState()
    const Image = "https://image.tmdb.org/t/p/w500"
    const Api = `https://api.themoviedb.org/3/${ResultSearch}/movie`
    const MoviesCallApi = async () => {
        const data = await axios.get(Api, {
            params: {
                api_key: 'ae862fbd4efafa1c9d669c74e0470d37',
                query: input
            }
        })
        const results = data.data.results
        setDataMovies(results)
    }
    useEffect(() => {
        MoviesCallApi()
    }, [input])
    console.log(dataMovies);
    return (
        <Fragment>
            <div className={toggle ? 'movies-container-dark' : 'movies-container-light'}>
                {dataMovies && dataMovies.length > 0 && dataMovies.map(movie => {
                    return (
                        <Fragment key={movie.id}>
                            <div className='container'>
                                <AiFillPlayCircle color='#ffffff' fontSize={40} className='play-icon' />
                                <img src={movie.poster_path ? `${Image}${movie.poster_path}` : noImage} alt="" />
                                <NavLink to="/DetailMovies">
                                    <h3 className={movie.title.length > 28 ? 'ellipsis-text' : ''}>{movie.title}</h3>
                                </NavLink>
                            </div>
                        </Fragment>
                    )
                })}
            </div>

        </Fragment>)
}

export default Movies