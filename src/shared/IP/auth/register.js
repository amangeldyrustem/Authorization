import axios from 'axios'

export const register = async () => {
    const url = 'https://reqres.in/api/register'
    let result = await axios.get(url)
    return result
}