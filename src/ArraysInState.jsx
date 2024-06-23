import { useState } from "react"


function ArraysInState(){

const[food,setFood]=useState(["Apple","Banana","Coconut"])

const handleAddFood=()=>{
    const newfood=document.getElementById('food').value
    if(newfood!==''){
    document.getElementById('food').value=''
    
    setFood(food=>[...food,newfood])}
    else
    alert("Please Enter Food Item")
}

const handleRemove=(index)=>{
    setFood(food=>food.filter((_,idx)=>idx!==index))

}

    return(<>
    <div>
        <ul>
            {food.map((food,index)=>{
                return <li key={index} onDoubleClick={()=>handleRemove(index)}>{food}</li>
                })}

        </ul>
        <input id="food" type="text" placeholder="Enter any food"></input>
        <button onClick={handleAddFood}>Add food</button>
        </div>
        </>)
}

export default ArraysInState