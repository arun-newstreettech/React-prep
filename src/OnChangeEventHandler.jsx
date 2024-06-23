import { useState } from "react"                    

function OnChangeEventHandler(){

const [name,setName]=useState("Guest")
const [payment,setPayment]=useState("cash")
const [shipping,setShipping]=useState('')

const handlechangeName=(event)=>{setName(event.target.value)}
const handlePaymentName=(event)=>{setPayment(event.target.value)}
const handleShippingName=(event)=>{setShipping(event.target.value)}

    return(<>
    <div>
        <input value={name} onChange={handlechangeName}></input>
        <p>Name: {name}</p>
        <textarea value={name} onChange={handlechangeName} placeholder="Type something"></textarea>
        <select value={payment} onChange={handlePaymentName}>
            <option value="cash">Cash</option>
            <option value="card">Card</option>
            <option value="UPI">UPI</option>
        </select>
        <p>Payment done via {payment}</p>
        <label>
            <input type="radio" value="Pickup" checked={shipping === "Pickup"} onChange={handleShippingName}/>
            Pickup
        </label>
        <label>
          <input type="radio" value="Home Delivery" checked={shipping === "Home Delivery"} onChange={handleShippingName}/>
          Home Delivery
        </label>
      </div>
    </>
  );
}

export default OnChangeEventHandler