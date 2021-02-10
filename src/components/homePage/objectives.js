import { Icon } from '@chakra-ui/react'
import React from 'react'
import { Constrain, Content, SectionWrapper, TitleSection, StyledLink } from '../globals'
import { FiPieChart, FiAlertTriangle } from 'react-icons/fi'


const Objectives = () => {
  return (
    <SectionWrapper>
      <TitleSection>
        <h4 className="eyebrow">sobre nosotros</h4>
        <h2 className="section-title">Nuestros Objetivos</h2>
      </TitleSection>
      <Constrain>
        <Content>
          <div className="content-grid">
            <div className="content-grid-item">
              <h3 className="content-grid-title">
                <div className="icon">
                  <Icon as={FiAlertTriangle} w={12} h={12} opacity=".25"/>
                </div>
                <span>Phrasebook</span>
              </h3>
              <div className="content-grid-content">
                <p>Malagasy: The people and language of Madagascar</p>
                <p>Tana: Local shorthand for Antananarivo, Madagascar’s capital</p>
              </div>
            </div>
            <div className="content-grid-item">
              <h3 className="content-grid-title">
                <div className="icon">
                  <Icon as={FiPieChart} w={12} h={12} opacity=".25"/>
                </div>
                <span>Know Before You Go</span>
              </h3>
              <div className="content-grid-content">
                <p>Madagascar has a vegetarian-friendly food culture. Most Malagasy often don’t eat meat, because it’s expensive.</p>
              </div>
            </div>
            <div className="content-grid-item">
              <h3 className="content-grid-title">
                <div className="icon">
                  <Icon as={FiPieChart} w={12} h={12} opacity=".25"/>
                </div>
                <span>Know Before You Go</span>
              </h3>
              <div className="content-grid-content">
                <p>Madagascar has a vegetarian-friendly food culture. Most Malagasy often don’t eat meat, because it’s expensive.</p>
              </div>
            </div>
          </div>
        </Content>
        <p className="center">
          <StyledLink to="/" className="primary">Leer más</StyledLink>
        </p>
      </Constrain>
    </SectionWrapper>
  )
}

export default Objectives