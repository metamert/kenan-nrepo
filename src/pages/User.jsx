import React , {useEffect} from 'react'
import db from "../firebase"
export default  function User() {

    useEffect(async () => {
        const myProjects=await db.collection("projects").get()
        console.log(`my project`,myProjects)
        if (false) {
          console.log('No such document!');
        } else {
          
        }
    }, [])
    return (
        <div>
         user
        </div>
    )
}
