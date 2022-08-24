import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NewUser from './pages/NewUser'
import User from './pages/User'
import Users from './pages/Users'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'

const App = () => {
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:slug" element={<User/>}/>
        <Route path="/new-user" element={<NewUser/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App