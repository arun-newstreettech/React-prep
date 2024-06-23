import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Students from './Students.jsx'
import Usergreeting from './Usergreeting.jsx'
import List from './List.jsx'
import ArrayOfList from './ArrayofList.jsx'
import PropsArray from './PropsArray.jsx'
import Counter from './Counter.jsx'
import OnChangeEventHandler from './OnChangeEventHandler.jsx'
import Donut from './Donut.jsx';
import ColorPicker from './ColorPicker.jsx'
import ObjectsInState from './ObjectsInState.jsx'
import ArraysInState from './ArraysInState.jsx'



function App() {

 
  const list=[
    {id:1,name:"Kohli",OVR:98},
    {id:2,name:"Rohit",OVR:96},
    {id:3,name:"Surya",OVR:94}
]

  return (<>
  <Header />
  <Footer>
  </Footer>
  <Food />
<Card></Card>
<Button></Button>
<Students name="Lucy" year={2077} isAlive={true}></Students>
<Students></Students>
<Usergreeting isLoggedIn={false}></Usergreeting>
<List></List>
<ArrayOfList></ArrayOfList>
<PropsArray list={list}></PropsArray>
<PropsArray/>
<Counter></Counter>
<OnChangeEventHandler></OnChangeEventHandler>
<Donut></Donut>
<ColorPicker></ColorPicker>
<ObjectsInState/>
<ArraysInState/>

  </>)
}

export default App

// here we are using <> and </> because a jsx file has the capability of returning only one parent element