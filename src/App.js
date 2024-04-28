import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home.js';
import About from './components/Pages/About.js';
import Contact from './components/Pages/Contact.js';
import PageNotFound from './components/Pages/PageNotFound.js';
import Posts from './components/Pages/Posts.js';
import PostDetails from './components/Pages/PostDetails.js';
import AllPosts from './components/Pages/AllPosts.js';
import AddPosts from './components/Pages/AddPosts.js';
import Menu from './components/Pages/Menu.js';
import Login from './components/Pages/Login.js';
import Register from './components/Pages/Register.js';


function App() {
  return (
    <div className="App container">
       <BrowserRouter>
          <Menu/>
          <Routes>
              <Route path='/' element={<Navigate to="/home"/> }/>
              <Route path="/home" element={<Home/>}   />
              <Route path="/login" element={<Login/>}   />
              <Route path="/about" element={<About/>}   />
              <Route path="/contact" element={<Contact/>}   />
              <Route path='*' element={<PageNotFound/>} />
              <Route path='/allposts' element={ <AllPosts/> }/>
              {/* Dynamic Routes */}
              <Route path='/allposts/:id' element={ <PostDetails/> }/>
              {/* Nested Routes */}
              <Route path='/posts/*' element={ <Posts/> }/>
              <Route path='/addpost' element={ <AddPosts/> }/>
              <Route path='/register' element={ <Register/> }/>

          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
