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

const changeVote = async (id,content) =>{
    console.log('changeVote',content);
    const response = await axios.put(baseUrl+`/${id}`,content)
    return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll,addNew,changeVote}