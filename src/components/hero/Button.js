import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Btn = styled.button `
padding: 1rem;
color:#fff;
padding:15px 50px;
box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  border: solid 2px transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #07BDF6, #0CCCAD);
  background-origin: border-box;
  box-shadow: 1px 1000px 1px #000 inset;
  cursor:pointer;
`

const Button = () => {

  return (
    <Link to="/contactme">
      <Btn>Work With Me</Btn>
    </Link>
  )
  
}

export default Button
