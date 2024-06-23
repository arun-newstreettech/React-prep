
function ArrayOfList(){
    const list=[
        {id:1,name:"Messi",OVR:98},
        {id:2,name:"Ronaldo",OVR:96},
        {id:3,name:"Neymar",OVR:94}
    ]

    const array=list.map(newList=><ul key={newList.id}>{newList.name}</ul>)

    const filterList=list.filter(filter=>filter.OVR>95)

    const filteredArray=filterList.map(filterList=><ul key={filterList.id}>{filterList.name}</ul>)

    return(filteredArray)
}

export default ArrayOfList