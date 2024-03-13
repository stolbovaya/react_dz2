import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './components/SignInUP/SignUp'
import SignIn from './components/SignInUP/SignIn'
import AppBarPosts from './components/AppBarPosts/AppBarPosts'
import FollowPosts from './components/FollowPosts/FollowPosts'
import BestPosts from './components/BestPosts/BestPosts'
import NewPosts from './components/NewPosts/NewPosts'

function App() {
    return (
        <>
            <div>
                <AppBarPosts/>
                <BrowserRouter>
                <Routes>
                        <Route path='/' element={<NewPosts />} />
                        <Route path="/best" element={<BestPosts />} />
                        <Route path="/follow" element={<FollowPosts />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="*" element={<span>404</span>} />
                </Routes>

            </BrowserRouter>
               
            </div>
        </>
    )
}

export default App
