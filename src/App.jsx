import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './Component/Header'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
// import ShowBlogs from './Pages/ShowBlogs';
import Blog from './Pages/Blog'
import Pricing from './Pages/Pricing'
import Tryitnow from './Pages/Tryitnow'
import Home from './Pages/Home'
import UpgradePlan from './Pages/UpgradePlan';
import Payment from "./Pages/Payment";
import AddBlogForm from './Pages/AddBlogForm';




function App() {
  
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
              <Route path='/' element={<Home/>}/>
             <Route path='/blog' element={<Blog/>}/>
           <Route path='/pricing' element={<Pricing/>}/>
           <Route path='/signup' element={<Signup/>}/>
           <Route path='/signin' element={<Signin/>}/>
           <Route path='/try' element={<Tryitnow/>}></Route>
           <Route path='/upgradeplans' element={<UpgradePlan/>}></Route>
           <Route path='/pay' element={<Payment/>} ></Route>
          <Route path='/addblog' element={<AddBlogForm/>}></Route>
          {/* <Route path='/showblog' element={<ShowBlogs/>} ></Route> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App






