import React from 'react'
import styled from 'styled-components'
import {a, useTrail} from 'react-spring'

const Wrapper = styled.div `
margin-top:8vh;
margin-left:5vh;
h3{
   background:linear-gradient(101deg, #07BDF6, #0CCCAD);
   -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`
const Grid = styled.div`
.card{
   margin-bottom: '10vh'
}
p{
   margin:-1vh 0;
}
`
const Container = styled.div `
display:grid;
grid-template-columns:repeat(2,1fr) ;

@media (max-width:880px){
   grid-gap:.2vh;
   margin:0;
   grid-template-columns:1fr ;
}
`

const Experience = ({exp}) => {

  const Trail = ({children}) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
      config: {
        mass: 5,
        tension: 2000,
        friction: 300
      },
      opacity: 1,
      x: 0,
      height: 100,
      from: {
        opacity: 0,
        x: 300,
        height: 0
      }
    })

    return (
      <div>
        {trail.map(({x,height,...rest}, index) => (
          <a.div
            key={items[index]}
            style={{
            ...rest,
            transform: x.to(x => `translate3d(0,${x},0)`)}}>
            <a.div style={{height}}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    )
  }

  const halfExp = exp.length / 2

  return (
    <Wrapper>
      <Container >
        {exp.map(item => item.id < halfExp
          ? <Grid key={item.id}>
              <Trail>
                <div className='card'>
                  <h3>{item.compnyName}</h3>
                  <p>{item.rule}</p>
                  <p>{item.period}</p>
                </div>
              </Trail>
            </Grid>
          : <Grid key={item.id}>
            <Trail>
              <div className='card'>
                <h3>{item.compnyName}</h3>
                <p>{item.rule}</p>
                <p >{item.period}</p>
              </div>
            </Trail>
          </Grid>)}
      </Container>
    </Wrapper>
  )
}

export default Experience
