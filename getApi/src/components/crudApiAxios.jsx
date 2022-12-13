import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const baseURL = "https://jsonplaceholder.typicode.com/posts/1"

const CrudApi = () => {

    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        async function getApi() {
            const response = await axios.get(baseURL)
            console.log(response.data);
            setData(response.data)
        }
        getApi()
    }, [])


    const pushData = async () => {
        await axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: "hello",
            userId: "2",
            body: "push api success"
        }).then((response) => {
            setData(response.data)
        }).catch(error => {
            setError(error)
        })

    }


    const deleteData = async () => {
        await axios.delete(baseURL)
        setData(null)
    }


    if (error) return `Error: ${error.message}`;
    if (!data) return null
    return (
        <div>
            <h1>{data.title}</h1>
            <h4>{data.userId}</h4>
            <p>{data.body}</p>
            <button onClick={pushData}>add</button>
            <button onClick={deleteData}>delete</button>
        </div>
    )
}

export default CrudApi