import React from 'react'

import { Constrain } from '../globals'
import NewsletterForm from './newsletterForm'
import { NewsletterWrapper, NewsletterHeader, NewsletterContent } from './styles'

const Newsletter = () => {
  return (
    <NewsletterWrapper>
      <Constrain>
        <NewsletterHeader>
         
        </NewsletterHeader>
        <NewsletterContent>
          
        </NewsletterContent>
        <NewsletterForm />
      </Constrain>
    </NewsletterWrapper>
  )
}
/*
const Newsletter = () => {
  return (
    <NewsletterWrapper>
      <Constrain>
        <NewsletterHeader>
          <h3>NEWSLETTER</h3>
          <h2>FENAGH INSIDER</h2>
        </NewsletterHeader>
        <NewsletterContent>
          <p>Suscribete a nuestro newsletter para darte cuenta de la actualidad que nos rodea en temas de agricultura y ganaderia.</p>
        </NewsletterContent>
        <NewsletterForm />
      </Constrain>
    </NewsletterWrapper>
  )
}
*/
export default Newsletter