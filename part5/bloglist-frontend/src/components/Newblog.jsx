import React, { useState } from 'react'
import blogService from '../services/blogs'

export const Newblog = () => {

    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [url,setUrl] = useState('')

    const newBlogHandle = (event) => { 
        event.preventDefault()
        console.log(title,author,url);
        blogService.create({
            title,
            author,
            url
        })

     }

  return (
    <div>
        <h2>create new</h2>
        <form onSubmit={newBlogHandle}>
            <div>
            title:<input type="text" name='title' value={title} onChange={({target}) => setTitle(target.value)}/>
            </div>
            <div>
            author:<input type='text' name='author'value={author} onChange={({target}) => setAuthor(target.value)}/>
            </div>
            <div>
            url:<input type='text' name='url'value={url} onChange={({target}) => setUrl(target.value)}/>
            </div>
            <button type="submit" >submit</button>
            
        </form>
    </div>
  )
}
