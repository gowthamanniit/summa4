import {useState} from 'react'
import axios from 'axios'
function App()
{
  /*
  const [rno,setRno]=useState()
  const [sname,setSname]=useState("")
  const [mark,setMark]=useState()
  */
  const [inputs,setInputs]=useState({})
  const [list ,setList]=useState(null)

  const dis=(e)=>{
    
    const name=e.target.name
    const value=e.target.value
    setInputs(values=>({...values,[name]:value}))
    /*
    if (e.target.name==="rno")
      setRno(e.target.value)
    if (e.target.name==="sname")
      setSname(e.target.value)
    if (e.target.name==="mark")
      setMark(e.target.value)        
    */
  }
  const insertfun=()=>{
    /*var inputdata={
      rno:rno,
      sname:sname,
      mark:mark
    }
    console.log(inputdata)
    */
   console.log(inputs)
   
    axios.get("http://127.0.0.1:9339",{params:inputs}).then((res)=>{
      console.log("response only",res)
      console.log("res.data only:",res.data)
      setList(res.data)
    }).catch((err)=>{
      console.log(err.response.data)
      setList(err.response.data)
    })
   // cleartextbox()
  }
  /*
const cleartextbox=()=>{
  setRno("")
  setSname("")
  setMark("")
}*/
  return(
    <>
        <input type="text" onChange={(e)=>dis(e)}  name="rno" placeholder="Enter Rno:"></input><br></br>
        <input type="text" onChange={(e)=>dis(e)} name="sname" placeholder="Enter Sname:"></input><br></br>
        <input type="text" onChange={(e)=>dis(e)} name="mark" placeholder="Enter Mark:"></input><br></br>
        <input type="button" onClick={insertfun} value="Insert/Save"></input>
        <h1>{list !==null && "Successfully Inserted using Mongoose :"+ list._id}</h1>
        <h1>{list !==null && list.acknowledged===true && "Successfully Inserted"}</h1>
        <h1>{list !==null && list.acknowledged===true && "ID:"+list.insertedId}</h1>
        
    </>
  )
}
export default App
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/