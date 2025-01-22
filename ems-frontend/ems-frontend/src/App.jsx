import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListEmployeeCompnent from './Components/ListEmployeeCompnent'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import EmployeeComponent from './Components/EmployeeComponent'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <HeaderComponent />
      <Routes>
//http://localhost:3000
<Route path='/' element = { < ListEmployeeCompnent /> }></Route>

//http://localhost:3000/employees
<Route path='/employees' element = {<ListEmployeeCompnent />}></Route>
     

//http://localhost:3000/add-employee
<Route path='/add-employee' element = {<EmployeeComponent />}></Route> 
     


//http://localhost:3000/edit-employee/1
<Route path='/edit-employee/:id' element = {<EmployeeComponent />}></Route> 
     



     </Routes> 
      
      <FooterComponent />
      </BrowserRouter>

    </>
  )
}

export default App