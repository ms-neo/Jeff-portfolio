import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {AiFillLinkedin} from 'react-icons/ai'
import {RiMailSendLine} from 'react-icons/ri'
import {animated, useSpring} from 'react-spring'

const Heading = styled.div `
color:#fff;
display:flex;
justify-content:space-between;
align-items:center;
@media (max-width:880px){
    flex-direction:column;
    align-items:start;
}
`
const LogoIcon = styled.div `

.logo{
position:relative;
font-size:2rem;
font-weight:bold;
cursor:pointer;
color:#fff;
text-decoration:none;
}
.dot{
width:35px;
height:35px;
background:#fff;
border-radius:50%;
display:inline-block;
position:absolute;
background:linear-gradient(101deg, #07BDF6, #0CCCAD);
top:16px;
right:-5px;
z-index:-1
}

`
const SocialIcons = styled.div `
display:flex;
justify-content:space-between;
`
const Icons = styled.div `
display:flex;
justify-content:space-between;
align-items:center;
font-size:16px;
margin-left:10vh;
margin-top:2vh;

p{
    padding-left:1vh;  
}
    @media (max-width:880px){
        margin-left:0vh;  
        margin-right:10vh;
}
`

const StyledLink = styled(Link)`
text-decoration:none;
color:#fff;
&:hover{
    color:#0CCCAD;
}
`

const Logo = () => {

  const transiton = useSpring({
    from: {
      x: '200px'
    },
    to: {
      x: '0px',
      color: 'red'
    },
    delay: 100
  })

  return (
    <Heading>
      <LogoIcon>
        <Link to='/' className="logo">Jeffrey<span className="dot"></span>
        </Link>
      </LogoIcon>
      <SocialIcons>
        <animated.div style={transiton}>
          <Icons>
            <RiMailSendLine color="#0CCCAD"/>
            <StyledLink to="/contactme">
              <animated.p>Email</animated.p>
            </StyledLink>
          </Icons>
        </animated.div>
        <animated.div style={transiton}>
          <Icons style={transiton}>
            <AiFillLinkedin color="#0CCCAD"/>
            <StyledLink
              to={{
              pathname: "/"
            }}
              // target="_blank"
            >
              <p>Linkden</p>
            </StyledLink>
          </Icons>
        </animated.div>
      </SocialIcons>
    </Heading>
  )
}

export default Logo
