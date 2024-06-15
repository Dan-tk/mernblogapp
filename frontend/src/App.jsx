import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import PostDetails from './pages/PostDetails';
import UserProfile from './pages/UserProfile';

function App() {
  
  return (
     <div>
       {/* <Navbar/> */}

       <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="/create" element={<CreatePost/>}/>
        <Route exact path="/posts/post/:id" element={<PostDetails/>}/>
        <Route exact path="/edit/:id" element={<EditPost/>}/>
        <Route exact path="/profile/:id" element={<UserProfile/>}/>
       </Routes>
       <Footer/>

     </div>
  )
}

export default App
