import { useState } from "react";

function Counter(){


const [count, setCount] = useState(0);

const increment=()=>{setCount(count+1)}

const thrice=()=>{setCount(count=>count+1);
                  setCount(count=>count+1);
                  setCount(count=>count+1);}

const twice=()=>{
    setCount(count+1);
    setCount(count+1)    
}                  

const decrement=()=>{
               if (count>0) {setCount(count-1)}
               else{alert("Count cannot be negative")}
              }
    return(
        <div>
            <button onClick={increment}>+</button>
            <b>{count}</b>
            <button onClick={decrement}>-</button>
            <button onClick={thrice}>+3</button>
        </div>
    )
}


export default Counter

//here even though we called setcount twice it only increments once because at the second method it refreshes the oldmethod and the count starts from 0 so we have to use arrow function