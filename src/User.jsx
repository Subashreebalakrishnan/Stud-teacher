import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"



function User () {

    const params = useParams()
    console.log(params)


    const [searchParams,setSearchParams]= useSearchParams()
    console.log(...searchParams)

 
    const [userData,setUserData]= useState({})



    useEffect(() => {

      loadUser()

    },[])
    

    let loadUser = async () => {

      try { 

      let user = await axios.get(`https://6316eb8bcb0d40bc4146cfc2.mockapi.io/teach/${params.id}`)

      console.log(user.data)

      setUserData(user.data)   
      
      } catch (error) {


        
      }
    }
    
    return (

        <div> 
          <h2>{userData.Studentname}</h2>
          <h2>{userData.TotalMarks}</h2>
          <h2>{userData.ClassTeacher}</h2>
          
       </div>
       
    )


}

export default User