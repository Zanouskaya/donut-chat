import './app.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from "./main/main";
import Profile from "./profile/profile";
import Step1 from "./main/step1"


function App() {
    return (
        <div  >
            <Routes>
                <Route path='/main' element={<Main />} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/step1' element={<Step1/>} />
            </Routes>
        </div>
    );
}
export default App;