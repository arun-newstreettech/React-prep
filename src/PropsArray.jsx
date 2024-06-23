import PropTypes from 'prop-types';

function PropsArray(props){

    const styles={
        backgroundColor:'green'
    }
 
    const list=props.list || PropsArray.defaultProps.list

    const array=list.map(newList=><ul key={newList.id}>{newList.name}</ul>)

    const filterList=list.filter(filter=>filter.OVR>95)

    const filteredArray=filterList.map(filterList=><ul style={styles} key={filterList.id}>{filterList.name}</ul>)

    return(filteredArray)
}

PropsArray.defaultProps={
    list:[]
}

export default PropsArray