import React from 'react'
import {useNavigate} from "react-router-dom"

const Header = () => {
  const navigate = useNavigate();
  return (
    <div style={{textAlign:"center"}}>
      <h1 style={{backgroundColor:"black",color:"white"}}>
        E-Commerce Webpage
      </h1>
      <nav>
        <button onClick={()=>navigate("/")}>Home</button>
        <button onClick={()=>navigate("/about")}>About</button>
        <button onClick={()=>navigate("/contact")}>Contact</button>
      </nav>
    </div>
    
    
  )
}

export default Header