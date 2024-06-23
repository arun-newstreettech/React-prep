import { useState } from "react"



function ObjectsInState(){

const [details,setDetails]=useState(
    {
        name:"John Doe",
        age:1
    }
)

const changeAge=(event)=>{
    setDetails(details=>({...details,age:event.target.value}))
   
}

const changeName=(event)=>{
    setDetails(details=>({...details,name:event.target.value}))
    }


    return(
        <div>
            <p>I am {details.name} and my age is {details.age}</p>
            <input  value={details.name} onChange={(e)=>changeName(e)}></input>
            <input type="number" value={details.age} onChange={(e)=>changeAge(e)}></input>
        </div>
    )
}

export default ObjectsInState