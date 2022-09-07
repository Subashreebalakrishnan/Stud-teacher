import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";



function Edit () {


   const params = useParams ()
   const navigate = useNavigate()

    const formik= useFormik({

           initialValues : {
  
            Studentname:"",
            TotalMarks:"",
            ClassTeacher:"",
           
   
        },
  
        validate : (values) =>  {
  
          let errors = {};
          if (values.Studentname===""){
           errors.Studentname= "Please enter name "
          }
          
          if (values.TotalMarks===""){
           errors.TotalMarks= "Please enter TotalMarks"
          }
  
           return errors;
  
           
        } ,
  
        onSubmit : async(values) => {
  
         await axios.put (`https://6316eb8bcb0d40bc4146cfc2.mockapi.io/teach/${params.id}`,values)
         navigate("/stud")
        },
     });

     useEffect (() => {

       loadUser()

     },[])

     let loadUser= async () => {

      try {

        let user = await axios.get (`https://6316eb8bcb0d40bc4146cfc2.mockapi.io/teach/${params.id}`)
        console.log(user.data)
        formik.setValues( {

            Studentname: user.data.Studentname,
            TotalMarks: user.data.TotalMarks,
            ClassTeacher: user.data.ClassTeacher,
          


        } )
         
      } catch (error) {
         
      }


     }
  
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
                <span style={{color:'red'}}>{formik.errors.Studentname}</span>
             </div>
  
  
             <div className="col-lg-6">
              <label>TotalMarks</label>
                <input className="form-control" 
                type={"text"}
                value={formik.values.TotalMarks}
                onChange={formik.handleChange}
                name="TotalMarks" 
                 />
                 <span style={{color:'red'}}>{formik.errors.TotalMarks}</span>
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





export default Edit