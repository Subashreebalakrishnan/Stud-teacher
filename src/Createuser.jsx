import { useFormik } from "formik";
import axios from "axios"

function Createuser () {

   const formik= useFormik({

      initialValues : {

         TeacherName:"",
         Position:"",
         Office:"",
         Age:"",
         startDate:"",
         Salary:"",
 
      },

      validate : (values) =>  {

        let errors = {};
        if (values.name===""){
         errors.name= "Please enter name "
        }
        
        if (values.Position===""){
         errors.Position= "Please enter Position"
        }

         return errors;

         
      } ,

      onSubmit : async (values) => {

            
          let user= await axios.post("https://6316eb8bcb0d40bc4146cfc2.mockapi.io/stud",values)
          alert ("User Created")
          
      },
   });

   return (
   <>
   <div className="container">
       <form onSubmit={formik.handleSubmit}>
       <div className="row">
      
         <div className="col-lg-6">
            <label>TeacherName</label>
              <input className="form-control"
               type={"text"}  
              value={formik.values.TeacherName}
              onChange={formik.handleChange}
              name="TeacherName"
              
              />
              <span style={{color:'red'}}>{formik.errors.name}</span>
           </div>


           <div className="col-lg-6">
            <label>Position</label>
              <input className="form-control" 
              type={"text"}
              value={formik.values.Position}
              onChange={formik.handleChange}
              name="Position" 
               />
               <span style={{color:'red'}}>{formik.errors.Position}</span>
           </div>
            
           <div className="col-lg-6">
            <label>Office</label>
              <input className="form-control" type={"text"}
               value={formik.values.Office}
               onChange={formik.handleChange}
               name="Office"
              
              
              />
           </div>

           <div className="col-lg-6">
            <label>Age</label>
              <input className="form-control" type={"text"}
               value={formik.values.Age}
               onChange={formik.handleChange}
               name="Age"   />
           </div>
            
           <div className="col-lg-6">
            <label>StarDate</label>
              <input className="form-control" type={"text"}
              value={formik.values.startDate}
              onChange={formik.handleChange}
              name="startDate" 
              
              />
           </div>

           <div className="col-lg-6">
            <label>Salary</label>
              <input className="form-control" type={"text"}
              value={formik.values.Salary}
              onChange={formik.handleChange}
              name="Salary" 
              
              />
           </div>

           <div className="col-lg-6 mt-2">
            
              <input className="btn-primary" type={"submit"} value="Submit" disabled={!formik.isValid}/>
           </div>

      
      </div>
      </form>
   </div>
   </>
   )

}

export default Createuser