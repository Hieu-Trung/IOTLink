import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
const GetApiYoutube = () => {
    const [data, setData] = useState();

    useEffect(() => {
        async function getApiSearchYoutube() {
            const resSearch = await axios({
                "method": "GET",
                "url": 'https://www.googleapis.com/youtube/v3/search',
                "params": {
                    'part': 'snippet',
                    'maxResults': '20',
                    'key': 'AIzaSyCvrL2T8CsydREXq1Q3fs3Dd0j4fvbxfHE',
                    'type': 'video',
                    'q': 'query'

                }
            })
            if (resSearch && resSearch.data.items) {
                const item = resSearch.data.items
                const result = []
                if (item && item.length > 0) {
                    item.map(item => {
                        const object = {}
                        object.id = item.id.videoId
                        object.title = item.snippet.title;
                        object.createdAt = item.snippet.publishedAt;
                        object.author = item.snippet.channelTitle;
                        object.description = item.snippet.description;
                        result.push(object)
                    })
                    console.log('dd', result);
                }
            }
        }
        getApiSearchYoutube()
    })
    useEffect(() => {
        async function getApiVideoYoutube() {
            const resVideo = await axios({
                "method": "GET",
                "url": 'https://www.googleapis.com/youtube/v3/videos',
                "params": {
                    'part': 'snippet',
                    'maxResults': '5',
                    'key': 'AIzaSyCvrL2T8CsydREXq1Q3fs3Dd0j4fvbxfHE',
                    'chart': 'mostPopular',
                    'regionCode': 'IN'

                }
            })

            console.log('video:', resVideo.data.items);

        }
        getApiVideoYoutube()
    })

    return (
        <div>
            <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/MCxI4GAWgKw?list=RDMCxI4GAWgKw"
                title="Anh Mới Chính Là Người Em Yêu Remake | Phạm Trưởng [ Audio Lyric ]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>

        </div>

    )
}

export default GetApiYoutube