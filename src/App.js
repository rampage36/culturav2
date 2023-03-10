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

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='grid'>
        <Header className='header' />
        <Navbar className='navbar' />
          <div className="gridContent">
              <Routes>
                  <Route path="/about"element={<About/>}/>
                  <Route path="/news" element={<News posts={props.state.newsPage.posts}/>}/>
                  <Route path="/photo"element={<Photo/>}/>
                  <Route path="/music"element={<Music music1={props.state.musicPage.music1}/>}/>
                  <Route path="/video"element={<Video video1={props.state.videoPage.video1}/>}/>
              </Routes>
          </div>
          <Footer className='footer' 
                  addNews={props.addNews}
                  updateNewPostText={props.updateNewPostText}
                  newPostText={props.state.newsPage.newPostText}/>  
      </div>
    </BrowserRouter>
    )

}

export default App;
