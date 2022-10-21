import axios from 'axios'

const url = 'https://reqres.in/api/users?page=2'

const Request = () => {
    // fetch(url)
    // .then(data => data.json())
    // .then(res => console.log(res))

    axios.get(url).then(res => console.log(res))

}

export default Request;