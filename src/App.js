import React from "react";
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import News from './components/News/News'
import Photo from './components/Photo/Photo'
import Music from './components/Music/Music'
import Video from './components/Video/Video'
import Footer from './components/Footer/Footer'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className='grid'>
        <Header className='header' />
        <Navbar className='navbar' />
          <div className="gridContent">
              <Routes>
                  <Route path="/about"element={<About/>}/>
                  <Route path="/news" element={<News/>}/>
                  <Route path="/photo"element={<Photo/>}/>
                  <Route path="/music"element={<Music/>}/>
                  <Route path="/video"element={<Video/>}/>
              </Routes>
          </div>
          <Footer className='footer' />  
      </div>
    </BrowserRouter>
    )

}

export default App;
