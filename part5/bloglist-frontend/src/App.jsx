import React,{ useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import { Login } from './components/Login'
import loginService from './services/login'
import { Newblog } from './components/Newblog'
import { Notice } from './components/Notice'


const App = () => {
  const [blogs, setBlogs] = useState([])
  const [newBlog,setNewBlog] = useState('')
  const [showAll,setShowAll] = useState(true)
  const [errorMessage,setErrorMessage] = useState(null)

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const [user,setUser] = useState(null)

  const [station,setStation] = useState('')



  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => { 
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if(loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
   },[])

  const handleLogin = async (event) => { 
    event.preventDefault()
    
    try{
      const user = await loginService.login({
        username,password
      })
      
      blogService.setToken(user.token)
      window.localStorage.setItem(
        'loggedBlogAppUser',JSON.stringify(user)
      )

      
      setUser(user)
      console.log(user);
      setUsername('')
      setPassword('')
    }catch{
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000);
    }

   }


   const getstationHandle = (station) => { 
      setStation(station)
      console.log(station);
    }


   const logoutHandle = (event) => { 
    event.preventDefault()
    window.localStorage.removeItem('loggedBlogAppUser')
    console.log(localStorage);
    setUser(null)
    }

   const loginForm = ()=>(
    <div>
      <h2>log in to application</h2>
      <form onSubmit={handleLogin}>
      <div>
        username
          <input type="text"  
          value={username} 
          name='Username' 
          onChange={({target}) => setUsername(target.value)}/>
      </div>
      <div>
        password
        <input type="text"
        value={password}
        name='Password'
        onChange={({target}) => {setPassword(target.value)}}
        />
      </div>
      <button type='submit'>login</button>
    </form>
    </div>
    )


  return (
    <div>
      

      {user === null && loginForm()}


      {user !==null && <div>
        <h2>blogs</h2>
        <Notice station={station}/>
        <p>{`${user.username} logged in`}</p>
        </div>
      }


      {user !==null && 
      <div>
          {blogs.map(blog =><Blog key={blog.id} blog={blog} />)}
          <button onClick={logoutHandle}>logout</button>
          <Newblog getstation={getstationHandle}/>
      </div>}

    </div>
    
  )
}

export default App