import './App.css';
import React,{useState} from 'react';
import {BrowserRouter,Routes,Route,Navigate}from 'react-router-dom';
import Topbar from './Components/Topbar';
import View from './Components/View';
import Create from './Components/Create';
import  CreateTeacher  from './Components/CreateTeacher';
import  CreateStudent  from './Components/CreateStudent';
import Teachertabel from './Components/Teachertabel';
import Studenttabel from './Components/Studenttabel'
 
  
export const StudentContext =React.createContext();

function App() {
let [student,setStudent]=useState([
 {
  TeacherID:"T-ID-4",
  Name:"gopi",
  Email:"gopi65@gmail.com",
  Mobbile: 45678,
  Students:"vicky"

 } ,
  {
  TeacherID:"T-ID-5",
  Name:"chandru",
  Email:"chandru@gmail.com",
  Mobbile: 4567890,
  Students:"sekar"

 } 
])

  return <>
  <div ClassName="main-wrapper">
    <BrowserRouter>
    
  <StudentContext.Provider value={{student,setStudent}}>
    <Routes>
      <Route path='top' element={<Topbar/>}/>
      <Route path='view' element={<View/>}/>
      <Route path='teachertabel'element={<Teachertabel/>}/>
      <Route path='Studenttabel' element={<Studenttabel/>}/>
      <Route path='create' element={<Create/>}/>
      <Route path='createteacher' element={<CreateTeacher/>}/>
      <Route path='createstudent' element={<CreateStudent/>}/>
      <Route path='*' element ={<Navigate to='/top'/>}/>
    </Routes>
  </StudentContext.Provider>
  </BrowserRouter>
  </div>
  
  
  </>
}

export default App;
