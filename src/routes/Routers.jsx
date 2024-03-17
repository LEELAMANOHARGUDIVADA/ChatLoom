import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Register from '../pages/Register'
import CreateMeeting from '../pages/CreateMeeting'
import JoinMeeting from '../pages/JoinMeeting'
import Meeting from '../pages/Meeting'


const Routers = () => {
  return (
    <Routes>
        <Route  path='/' element={<Home />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='/create-meeting' element={<CreateMeeting />} />
        <Route path='/join-meeting' element={<JoinMeeting />} />
        <Route path='/meetings/:id' element={<Meeting />} />
    </Routes>
  )
}

export default Routers