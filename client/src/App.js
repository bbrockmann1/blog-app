import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Login from './components/auth/Login'
import Signup from './components/auth/Signup';
import UserBlogs from './components/UserBlogs';
import SelectedBlog from './components/SelectedBlog';
import BlogForm from './components/BlogForm';
import Done from './components/auth/Done';
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';

function App() {
  const [ blogs, setBlogs ] = useState([])

  useEffect(() => {
    fetch('/blogs')
    .then(resp => resp.json())
    .then(blogsArray => {
      setBlogs(blogsArray)
    })
  }, [])

  return (
    <>
      <Header />

        <Routes>
          <Route path='/' element={ <Homepage blogs={blogs}/> }/>

          <Route path='/login' element={ <Login /> }/>

          <Route path='/signup' element={ <Signup /> } />

          <Route path='/blogs' element={ <UserBlogs /> }/>

          <Route path={'/:slug'} element={ <SelectedBlog /> }/>

          <Route path='/create' element={ <BlogForm /> }/>

          <Route path='/done' element={ <Done /> } />
        </Routes>

      <Footer/>
    </>
  );
}

export default App;
