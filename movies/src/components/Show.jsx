import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import noImage from '../image/NoImage.jpg'
import { AiFillPlayCircle } from 'react-icons/ai'
import { NavLink } from "react-router-dom"

const Show = ({ toggle, searchValue }) => {
    const input = searchValue
    const ResultSearch = input ? 'search' : 'discover'
    const [dataShow, setDataShow] = useState()
    const Image = "https://image.tmdb.org/t/p/w500"
    const Api = `https://api.themoviedb.org/3/${ResultSearch}/tv`

    const ShowCallApi = async () => {
        const data = await axios.get(Api, {
            params: {
                api_key: 'ae862fbd4efafa1c9d669c74e0470d37',
                query: input
            }
        })
        const results = data.data.results
        setDataShow(results)
    }
    useEffect(() => {
        ShowCallApi()
    }, [input])
    console.log(dataShow);
    return (
        <Fragment>
            <div className={toggle ? 'movies-container-dark' : 'movies-container-light'}>
                {dataShow && dataShow.length > 0 && dataShow.map(show => {
                    return (
                        <Fragment key={show.id}>
                            <div className='container'>
                                <AiFillPlayCircle color='#ffffff' fontSize={40} className='play-icon' />
                                <img src={show.poster_path ? `${Image}${show.poster_path}` : noImage} alt="" />
                                <NavLink to="/DetailMovies">
                                    <h3 className={show.name.length > 28 ? 'ellipsis-text' : ''}>{show.name}</h3>
                                </NavLink>
                            </div>
                        </Fragment>
                    )
                })}
            </div>

        </Fragment>)

}

export default Show