import axios from 'axios'
import { asObject } from '../redux/store'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => { 
    const response = await axios.get(baseUrl)
    return response.data
 }

const addNew = async (content) => {
    console.log(content);
    const obj =  asObject(content)
    console.log(obj);
    const response = await axios.post(baseUrl,obj)
    return response.data
}


export default {getAll,addNew}