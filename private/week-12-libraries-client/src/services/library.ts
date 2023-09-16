import axios from 'axios'
import ILibrary from '../models/ILibrary'

const getLibrary = () => {
    return axios.get<ILibrary[]>(`${process.env.REACT_APP_API_BASE_URL}/libraries`)
    .then(response => response.data)
}

const getLibraryById = (id : number) => {
    return axios.get<ILibrary>(`${process.env.REACT_APP_API_BASE_URL}/libraries/${id}`)
    .then(response => response.data)
}

export {
    getLibrary,
    getLibraryById
}