import PropTypes from 'prop-types';

function Students(props) {
    return(
        <students>
            <h1>Student name:{props.name + props.year}</h1>
            <p>Status: {props.isAlive?"Alive":"Dead"}</p>
        </students>
    )
    
}

Students.propTypes={
    name:PropTypes.string,
    year:PropTypes.number,
    isAlive:PropTypes.i 
}

Students.defaultProps={
    name:"David",
    year:0,
    isAlive:false
}

export default Students