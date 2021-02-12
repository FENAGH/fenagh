import React from 'react'

import { Form } from './styles'

const NewsletterForm = () => (
  <Form>
    <input 
      type="email" 
      placeholder="Correo electronico"
    />
    <button type="submit">suscríbete</button>
  </Form>
)

export default NewsletterForm