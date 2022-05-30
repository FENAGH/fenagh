import React from 'react'
import { Constrain, Content, TitleSection, SectionWrapper, StyledLink } from '../globals'

const About = () => (
  <SectionWrapper>
    <Constrain>
      <TitleSection>
        <h4   className="eyebrow" >sobre nosotros</h4>
        <h2 className="section-title">somos la institución cúpula <br/>del sector agropecuario de Honduras</h2>
      </TitleSection>
      <Content>
        <p className="center">Hoy por hoy FENAGH es la institución cúpula del Sector agropecuario de Honduras y actualmente está gestionando importantes leyes a fin de expandir las capacidades del gremio y de potenciar cada vez más a nuestro sector.</p>
      </Content>
      <p  className="center"  >
      
        <StyledLink  to="/acerca-de"  className="primary" >Leer más</StyledLink>
      </p>
    </Constrain>
  </SectionWrapper>
)

export default About