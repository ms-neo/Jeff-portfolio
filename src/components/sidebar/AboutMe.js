import React from 'react'
import {a, useTrail} from 'react-spring'
import styled from 'styled-components'

const Wrapper = styled.div `
margin-top: 12vh;
margin-left:5vh;
h2{
    margin-bottom:2vh;
}
`

const AboutMe = () => {

  const Trail = ({children}) => {
    const items = React.Children.toArray(children);
    console.log(items, 'ii')
    const trail = useTrail(items.length, {
      config: {
        mass: 6,
        tension: 2000,
        friction: 250
      },
      opacity: 1,
      x: 0,
      from: {
        opacity: 0,
        x: 200
      }
    })
    return (
      <div>
        {trail.map(({x,...rest}, index) => (
          <a.div
            key={items[index]}
            style={{
            ...rest,
            transform: x.to(x => `translate3d(0,${x},0)`)
          }}>
            <a.div style={{x}}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    )
  }

  return (
    <Wrapper>
      <Trail>
        <h2>About Me</h2>
        <p>Jeffrey is een zeer vriendelijke en enthousiaste medewerker. De afgelopen
          jaren heeft hij veel ervaring opgedaan op diverse grootte en middelgrote IT/ICT
          Projecten onder andere bij SAP Nederland, Ziekenhuis Bernhoven, IAK
          Verzekeringen (onderdeel van AEGON) en Hitachi Data Systems. In zijn
          werkzaamheden heeft hij bewezen zeer zelfstandig en probleemoplossend te kunnen
          functioneren en weet hij in korte tijd zijn stempel te drukken op de
          werkzaamheden en hét gezicht te zijn voor de IT afdeling. Kernwoorden van
          Jeffrey zijn: service verlenend, direct, vakkundig, flexibel en geen problemen,
          maar uitdagingen.
        </p>
      </Trail>
    </Wrapper>
  )
}

export default AboutMe
