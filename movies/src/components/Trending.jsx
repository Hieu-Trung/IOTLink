
import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import noImage from '../image/NoImage.jpg'
import { AiFillPlayCircle } from 'react-icons/ai'
import { NavLink } from "react-router-dom"

const Trending = ({ toggle, searchValue }) => {
    const [dataTrending, setDataTrending] = useState()
    const Image = "https://image.tmdb.org/t/p/w500"
    const Api = 'https://api.themoviedb.org/3/'
    const Trends = '/trending/all/week'
    const TrendingCallApi = async () => {
        const data = await axios.get(`${Api}${Trends}`, {
            params: {
                api_key: 'ae862fbd4efafa1c9d669c74e0470d37',
            }
        })
        const results = data.data.results
        setDataTrending(results)
    }
    useEffect(() => {
        TrendingCallApi()
    }, [])
    console.log(dataTrending);
    return (
        <Fragment>
            <div className={toggle ? 'movies-container-dark' : 'movies-container-light'}>
                {dataTrending && dataTrending.length > 0 && dataTrending.map(trend => {
                    return (
                        <Fragment key={trend.id}>
                            <div className='container'>
                                <AiFillPlayCircle color='#ffffff' fontSize={40} className='play-icon' />
                                <img src={trend.poster_path ? `${Image}${trend.poster_path}` : noImage} alt="" />
                                <NavLink to="/DetailMovies">
                                    <h3 className='ellipsis-text'>{trend.title}{trend.name}</h3>
                                </NavLink>
                            </div>
                        </Fragment>
                    )
                })}
            </div>

        </Fragment>)
}

export default Trending