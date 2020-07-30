import axios from 'axios'

export const axiosWithAuth = () => {
    return axios.create({
        // baseURL: 'https://preferencesbackend.herokuapp.com/',
        baseURL: 'http://localhost:8000/',
        headers: {
            Authorization: localStorage.getItem('okta-token-storage')
        }
    })
}