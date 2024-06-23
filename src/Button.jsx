
const styles={
    backgroundColor: "hsl(200,100%,50%)",
    color: "azure",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer"
}
let src ="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp"
const handleDoubleClick =(e)=>{e.target.style.display='none'}
const handleClick= (e)=>{e.target.textContent='hi'}

function Button() {
    return (
        <>
        <button>
            <div className="button">
                <button onClick={(e)=>handleClick(e)} style={styles}>Click me</button>
            </div>
        </button>
        <img onDoubleClick={(e)=>handleDoubleClick(e)} src={src}></img>
        </>
    )
}

export default Button

//Inline styling
//if handleclick method has arguments use arrow function otherwise the button will invoke before clicking