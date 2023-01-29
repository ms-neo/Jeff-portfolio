import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useTrail, a} from 'react-spring';
import emailjs from 'emailjs-com'
import {useForm} from 'react-hook-form'

const StyledTextField = styled(TextField)`
width:50%;
label{
    color:#ccc;
    font-size:15px;
}
fieldset{
    border-color: #fff;
}
label.Mui-focused {
    color: #07BDF6;
  }
  .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: #07BDF6;
    }
    &.focused fieldset {
      border-color: #07BDF6;;
    }
  }
  .MuiOutlinedInput-root.Mui-focused fieldset {
    border-color:  #07BDF6;
  }
  .MuiInputBase-input {
    color: white;
}
  @media (max-width:880px){
      width:100%;   
}
`

const Wrapper = styled.div `
margin-top:8vh;
margin-left:5vh;
form{
    display:grid;
    grid-gap:2vh;  
}
h2{
    margin-bottom:.5vh;
}
`
const StyledButton = styled(Button)`
    background:linear-gradient(101deg, #07BDF6, #0CCCAD);
    color:#fff;
  width:50%;
  @media (max-width:880px){
    width:100%;    
}
`
const ContactMe = () => {

    
  const sendEmail =(e)=>{
  
    e.preventDefault();
    emailjs.sendForm('webdeveloper.neo', 'template_qo3m9mm', '#form','user_PvnWRnrARwfm4iV0O0Mw4')
    .then((response)=> {
       console.log('SUCCESS!', response.status, response.text);
    }, (error) =>{
       console.log('FAILED...', error);
    });
    e.target.reset()
}

  const Trail = ({children}) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
      config: {
        mass: 5,
        tension: 2000,
        friction: 250
      },
      opacity: 1,
      x: 0,
      margin: 10,
      //  height:20,
      from: {
        opacity: 0,
        x: -100
      }
    })
    return (
      <div>
        {trail.map(({x,height, ...rest}, index) => 
        <a.div
          key={index}
          style={{
          ...rest,
          transform: x.to(x => `translate3d(0,${x},0)`)}}>
          <a.div style={{x}}>{items[index]}</a.div>
        </a.div>)}
      </div>
    )
  }

  return (
    <Wrapper>
      <form autoComplete="off" id="form" onSubmit={sendEmail}>
        <Trail>
          <h2>For more details contact me :</h2>
          <StyledTextField
            id="outlined-basic"
            label="Your Name"
            className={"test"}
            variant="outlined"
            size="small"
            name="name"
            // type="text"
            required />
             <StyledTextField
            id="outlined-basic"
            label="Your ِِEmail"
            className={"test"}
            variant="outlined"
            size="small"
            name="email"
            email
            required />
          <StyledTextField
            id="outlined-basic"
            label="Subject"
            variant="outlined"
            size="small"
            name="subject"
            required
            />
          <StyledTextField
            id="outlined-basic"
            label="Write your messsage here"
            variant="outlined"
            multiline
              name="message"
              required
            />
          <StyledButton variant="contained" color="secondary" fullWidth='false' type='submit'>
            Send
          </StyledButton>
        </Trail>
      </form>
    </Wrapper>
  )
}

export default ContactMe
