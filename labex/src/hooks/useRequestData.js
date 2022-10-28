import { useState, useEffect } from "react"
import { BASE_URL } from '../constants/urls'
import axios from "axios"

const useRequestData = (endpoint, initialState) => {
    const [data, setData] = useState(initialState)

    const getData = () => {
        axios.get(`${BASE_URL}${endpoint}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((res) => setData(res.data))
        .catch((err) => alert(err.response.data.message))
    }

    useEffect(() => {
        getData()
    }, [endpoint])

    return [data, getData]
}

export default useRequestData