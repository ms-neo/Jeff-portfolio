import React from 'react';
import Home from './components/hero/Home'
import Logo from './components/heading/Logo'
import Exp from './components/sidebar/Experience'
import AboutMe from './components/sidebar/AboutMe'
import ContactMe from './components/sidebar/ContactMe'
import SideBar from './components/sidebar/SideBar'
import styled from 'styled-components'
import {exp} from './components/ExpData'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {StylesProvider} from "@material-ui/core/styles";

const Wrapper = styled.div `
padding:10vh 25vh  0vh 25vh ;
height:90vh;
color:#fff;
@media (max-width:880px){
  padding:5vh 2vh  0vh 2vh ;
}
`
const GridWrapper = styled.div `
display:grid;
grid-template-columns:22% 70%;
margin-top:6vh;
margin-left:-2vh;
@media (max-width:880px){
  grid-template-columns:1fr;

}
`

function App() {
  return (
    <div className="App">
      <Router>
        <Wrapper>
          <StylesProvider injectFirst>
            <Logo/>
            <Switch>
              <GridWrapper>
                <SideBar/>
                <div>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/experience"><Exp exp={exp}/></Route>
                  <Route exact path="/aboutme" component={AboutMe}/>
                  <Route exact path="/contactme" component={ContactMe}/>
                </div>
              </GridWrapper>
            </Switch>
          </StylesProvider>
        </Wrapper>
      </Router>
    </div>

  );
}

export default App;
