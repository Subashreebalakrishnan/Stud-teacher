
import axios from "axios"
import { useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";



function Teacher() {

   
   
   
   const [user,setUser]= useState([]);
   const [isLoading,setLoading]=useState(false)

   useEffect (() => {

     loadData()
   },[]);

   let loadData= async()=> {
       
       setLoading(true)
      let user= await axios.get("https://6316eb8bcb0d40bc4146cfc2.mockapi.io/stud");

      setUser(user.data)
      setLoading(false)
   }

   let userDelete = async(id) =>{

    try {

       await axios.delete(`https://6316eb8bcb0d40bc4146cfc2.mockapi.io/stud/${id}`)
       loadData();
       
    } catch (error) {
       
    }

   }
   

  return <div className="container-fluid">
         <div className="d-sm-flex align-items-center justify-content-between mb-4">
                       <h1 className="h3 mb-0 text-gray-800">Users</h1>
                       <Link to="/Create-user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                               className="fas fa-download fa-sm text-white-50"></i> Create User</Link>
                   </div>

   {

       isLoading ? <span>Loading...</span> : <div className="card shadow mb-4">
       <div className="card-header py-3">
           <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
           </div>
       <div className="card-body">
           <div className="table-responsive">
               <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                   <thead>
                       <tr>
    
                           <th>S.no</th>
                           <th>Name</th>
                           <th>Position</th>
                           <th>Office</th>
                           <th>Age</th>
                           <th>Start Date</th>
                           <th>Salary</th>
                           <th>Action</th>
    
                       </tr>
                   </thead>
                  
                   <tbody>
                     {
    
                      user.map((user,index) => {
    
                        return <tr>
                            <td>{index+1}</td>
                            <td>{user.TeacherName}</td>
                            <td>{user.Position}</td>
                            <td>{user.Office}</td>
                            <td>{user.Age}</td>
                            <td>{user.startdate}</td>
                            <td>{user.Salary}</td>
                            <td>
                                <Link to={`/teacher/${user.id}`}className="btn btn-sm btn-warning">View</Link>
                                <Link to={`/teacher/edit/${user.id}`} className="btn btn-sm btn-primary">Edit</Link>
                                <button onClick={() => userDelete(user.id)} className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
     
                      }
                      
                      )
     
                     }
    
    
                   </tbody>
               </table>
           </div>
       </div>
    </div>
   }
         
  
  
</div>
}

export default Teacher


