import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./loginPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./homePage";
import {useState} from "react";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState('')
  const [userEmail, setUserEmail] = useState('')
  let usersMails = []
  const [contactForm, setContactForm] = useState([])
  return (
    <>

          <BrowserRouter>
            <Routes>
              <Route path='/'>
                <Route index element={<LoginPage setUserLoggedIn={setUserLoggedIn}
                                                 setUserEmail={setUserEmail}/>}/>
                <Route path='home' element={<HomePage userLoggedIn={userLoggedIn} userEmail={userEmail}
                                                      usersEmails={usersMails}
                                                      contactForm={contactForm} setContactForm={setContactForm}/>}/>

              </Route>
            </Routes>
          </BrowserRouter>

    </>
  )
}

export default App;
