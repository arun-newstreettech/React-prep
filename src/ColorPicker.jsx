import { color } from "chart.js/helpers"
import { useState } from "react"
import "./ColorPicker.css"; 


function ColorPicker(){

   const[colorCode,setColorCode]=useState("ffffff")

   const handleColorChange=(e)=>{
    setColorCode(e.target.value)
   }

   const style={
    color:colorCode
   }



    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <h3 >Selected color code: <h3 style={style}>{colorCode}</h3></h3>
            <h2 className="color-display" style={{backgroundColor:colorCode,color:colorCode}}> hello </h2>
            <input type="color" value={colorCode} id="color-picker" onChange={handleColorChange} />
        </div>
    )
}


export default ColorPicker