
import axios from "axios"
import { useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";



function Student() {

   
   
   
   const [user,setUser]= useState([]);
   const [isLoading,setLoading]=useState(false)

   useEffect (() => {

     loadData()
   },[]);

   let loadData= async()=> {
       
       setLoading(true)
      let user= await axios.get("https://6316eb8bcb0d40bc4146cfc2.mockapi.io/teach");

      setUser(user.data)
      setLoading(false)
   }

   let userDelete = async(id) =>{

    try {

       await axios.delete(`https://6316eb8bcb0d40bc4146cfc2.mockapi.io/teach/${id}`)
       loadData();
       
    } catch (error) {
       
    }

   }
   

  return <div className="container-fluid">
         <div className="d-sm-flex align-items-center justify-content-between mb-4">
                       <h1 className="h3 mb-0 text-gray-800">Users</h1>
                       <Link to="/Createuser" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
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
                           <th>Studentname</th>
                           <th>TotalMarks</th>
                           <th>ClassTeacher</th>
                           
    
                       </tr>
                   </thead>
                  
                   <tbody>
                     {
    
                      user.map((user,index) => {
    
                        return <tr>
                            <td>{index+1}</td>
                            <td>{user.Studentname}</td>
                            <td>{user.TotalMarks}</td>
                            <td>{user.ClassTeacher}</td>
                           
                            <td>
                                <Link to={`/teach/${user.id}`}className="btn btn-sm btn-warning">View</Link>
                                <Link to={`/teach/edit/${user.id}`} className="btn btn-sm btn-primary">Edit</Link>
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

export default Student


