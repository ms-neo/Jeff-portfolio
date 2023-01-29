import React from 'react'
import styled from 'styled-components'
import {  Link } from 'react-router-dom'

const Wrapper =styled.div`
display:flex;
justify-content:space-around;

ul{
    margin:7vh 0;
    padding:0;
    display:flex;
    flex-direction:column;
    
}
li{
    list-style:none;
    margin:3vh 0;

    &:focus{
        color:red;
        border-bottom:4px solid #fff;
    }
}
a{
    text-decoration:none;
    color:#fff;
    height:3vh;
    width:100%;
    padding:5vh 9vh 2vh 0;
    font-size:18px;
    &:hover{
        color:#0CCCAD;
    }
    &:focus{
        color:#0CCCAD;
        border-bottom:1px solid rgba(255,255,255,.3);
    }

}
@media (max-width:880px){
    ul{
 flex-direction:row;
 justify-content:space-around;
 align-items:center;
 margin:5vh 0;
    }
    li{
    margin:0 ;
}
a{
    padding:0vh 1.5vh;
    font-size:15px;
}  
}
`
const Vline =styled.div`
border-left:1px solid rgba(255,255,255,.2);
height:350px;
margin-top:6vh;
@media (max-width:880px){
    display:none;
}
`

const SideBar = () => {

    return (
        <Wrapper>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to='/experience'  >Experiences</Link></li>
                <li><Link to='/aboutme'>Who I am</Link></li>
                <li><Link to='/contactme'>Contact Me</Link></li>
            </ul>
            <Vline></Vline>
        </Wrapper>
    )
}

export default SideBar
