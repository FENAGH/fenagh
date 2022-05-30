import { Icon } from '@chakra-ui/react'
import React from 'react'
import { Constrain, Content, SectionWrapper, TitleSection } from '../globals'
import { FiArchive, FiGlobe, FiAward } from 'react-icons/fi'


const Objectives = () => {
  return (
    <SectionWrapper>
      <TitleSection>
        <h4 className="eyebrow">sobre nosotros</h4>
        <h2 className="section-title" >Nuestros Objetivos</h2>
      </TitleSection>
      <Constrain>
        <Content>
          <div className="content-grid">
            <div className="content-grid-item">
              <h3 className="content-grid-title">
                <div className="icon">
                  <Icon as={FiArchive} w={12} h={12} opacity=".25"/>
                </div>
                <span >Gestionar</span>
              </h3>
              <div className="content-grid-content">
                <p>Gestionar a nivel político las condiciones que permitan el desarrollo del sector agroalimentario nacional.</p>
              </div>
            </div>
            <div className="content-grid-item">
              <h3 className="content-grid-title">
                <div className="icon">
                  <Icon as={FiGlobe} w={12} h={12} opacity=".25"/>
                </div>
                <span>Representar</span>
              </h3>
              <div className="content-grid-content">
                <p>Representar a los sectores agroalimentarios a nivel político nacional e internacional.</p>
              </div>
            </div>
            <div className="content-grid-item">
              <h3 className="content-grid-title">
                <div className="icon">
                  <Icon as={FiAward} w={12} h={12} opacity=".25"/>
                </div>
                <span>Consolidar</span>
              </h3>
              <div className="content-grid-content">
                <p>Consolidar la institucionalidad con un enfoque integrador, de los sectores de distintas cadenas agroalimentarias del país, desde el sector primario, el sector transformador, el sector distribuidor de alimentos, y por integrar, el sector servicios con proveedores tecnológicos y servicios financieros.</p>
              </div>
            </div>
          </div>
        </Content>
      </Constrain>
    </SectionWrapper>
  )
}

export default Objectives