import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import LoginSignup from './components/LoginSignup';
import UserBlogs from './components/UserBlogs';
import SelectedBlog from './components/SelectedBlog';
import BlogForm from './components/BlogForm';
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />

        <Routes>
          <Route path='/' element={ <Homepage/> }/>

          <Route path='/login' element={ <LoginSignup /> }/>

          <Route path='/userblog' element={ <UserBlogs /> }/>

          <Route path='/selectedblog' element={ <SelectedBlog /> }/>

          <Route path='/create' element={ <BlogForm /> }/>
        </Routes>

      <Footer/>
    </>
  );
}

export default App;
