import React,{useState} from 'react'
import axios from "axios"
import './style.css';

const Home = () => {
    let [name,setName]=useState("")
    let [age,setAge]=useState("")
    let [phone,setPhone]=useState("")
    let [password,setPassword]=useState("")

    let formHandle=(e)=>{
        e.preventDefault()
        let payload={name,age,phone,password}
        axios.post("http://localhost:8080/user" ,payload)
        .then(()=>{
               console.log("DATA HAS BEEN ADDED")
        })
    }

    return(
        <div class="front">
            <form action="">
                <label>Name:</label>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <br></br>
                <br></br>
                
                <label>Age</label>
                <input type="number" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
                <br></br>
                <br></br>
                
                <label>phone</label>
                <input type="tel" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                <br></br>
                <br></br>
                
                <label>password</label>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <br></br>
                <br></br>
                <center>
                    <input type="submit" value="REGISTER" onClick={formHandle}/>
                </center>
            </form>
        </div>
    )
}
export default Home