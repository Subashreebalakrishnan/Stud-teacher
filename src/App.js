import logo from './logo.svg';
import './App.css';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import Nav from './Nav';
import Side from './Side';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Teacher from './Teacher';

import Edituser from './Edituser';
import Createuser from './Createuser';
import Userview from './Userview';
import Student from './Student';
import Create from './Create';
import User from './User';
import Edit from './Edit';




function App() {
  return (
    
    <BrowserRouter>
        <div id="wrapper">
          <Side></Side>
           <div id="content-wrapper" class="d-flex flex-column">
              <div id="content">
                <Nav></Nav>
                <Routes>
                  <Route path="/teacher" element={<Teacher />}> </Route>
                  <Route path="/teacher/:id" element={<Userview/>}> </Route>
                  <Route path="/teacher/edit/:id" element={<Edituser/>}> </Route>
                  <Route path="/Create-user" element={<Createuser/>}> </Route>
                  <Route path="/stud" element={<Student />}> </Route>
                  <Route path="/Createuser" element={<Create/>}> </Route>
                  <Route path="/teach/:id" element={<User/>}> </Route>
                  <Route path="/teach/edit/:id" element={<Edit/>}> </Route>
                  {/* 
                  
                  
                  
                
                  <Route path="Table/Demo" element={<Demo/>}> </Route> */}
                 </Routes>
           </div>
     </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
