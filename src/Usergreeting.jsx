const histyles={
    backgroundColor:'green'
}
const byestyles={
    backgroundColor:'red'
}

const hi=<h1 style={histyles}>Hi</h1>
const bye=<h1 style={byestyles}>Bye</h1>



function Usergreeting(props){
    
        return (props.isLoggedIn?hi:bye)
    
}

export default Usergreeting