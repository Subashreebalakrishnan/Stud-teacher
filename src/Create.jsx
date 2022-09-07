import { useFormik } from "formik";
import axios from "axios"

function Create () {

   const formik= useFormik({

      initialValues : {

        Studentname:"",
        TotalMarks:"",
        ClassTeacher:"",
        
 
      },

      validate : (values) =>  {

        let errors = {};
        if (values.Studentname===""){
         errors.Studentname= "Please enter Name "
        }
        
        if (values.TotalMarks===""){
         errors.TotalMarks= "Please enter TotalMarks"
        }

         return errors;

         
      } ,

      onSubmit : async (values) => {

            
          let user= await axios.post("https://6316eb8bcb0d40bc4146cfc2.mockapi.io/teach",values)
          alert ("User Created")
          
      },
   });

   return (
   <>
   <div className="container">
       <form onSubmit={formik.handleSubmit}>
       <div className="row">
      
         <div className="col-lg-6">
            <label>Studentname</label>
              <input className="form-control"
               type={"text"}  
              value={formik.values.Studentname}
              onChange={formik.handleChange}
              name="Studentname"
              
              />
              <span style={{color:'red'}}>{formik.errors.name}</span>
           </div>


           <div className="col-lg-6">
            <label>TotalMarks</label>
              <input className="form-control" 
              type={"text"}
              value={formik.values.TotalMarks}
              onChange={formik.handleChange}
              name="TotalMarks" 
               />
               <span style={{color:'red'}}>{formik.errors.Position}</span>
           </div>
            
           <div className="col-lg-6">
            <label>ClassTeacher</label>
              <input className="form-control" type={"text"}
               value={formik.values.ClassTeacher}
               onChange={formik.handleChange}
               name="ClassTeacher"
              
              
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

export default Create