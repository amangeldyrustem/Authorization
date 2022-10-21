import axios from 'axios'

export const authorization = async () => {
    const url = 'https://reqres.in/api/login'
    const result = await axios.get(url)
    return result.json()
}