import React from "react";
import {
  Navbar,
  Music,
  News,
  Footer,
  Header,
  Video,
  Photo,
  About,
} from './components'
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
