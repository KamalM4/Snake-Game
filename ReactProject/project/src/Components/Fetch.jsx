import React, { useEffect, useState } from "react";
import axios from 'axios'
   //npm install axios
const Fetch=()=> {
    let [data,setData] =useState("")
    let [id,setId] =useState("")
    let[btn,setBtn]=useState("")

    useEffect(()=>{
  axios.get('http://localhost:8080/user/${btn}')
       .then((resp)=>{
    setData(resp.data.body);
       })
    },[btn])
    let formHandle=()=>{
      setBtn(id)

}

return (
   <div>
      <input type="text" value={id} onChange={(e)=>{setId(e.target.value)}}/>
      <button onclick={formHandle}>Submit</button>
      {data.name}
   </div>
)
}
export default  Fetch