import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./Personal.css"

const formatPhone = phone =>
  phone ? `(504) ${phone.slice(0,4)}-${phone.slice(4)}` : ""

const PersonalCard = ({ nombre, cargo, email, telefono, imageData }) => {
  return (
    <div className="personal-card">
      <div className="personal-image">
        {imageData && <GatsbyImage image={imageData} alt={nombre} />}
      </div>

      <h3>{nombre}</h3>
      <p className="cargo">{cargo}</p>

      {email && (
        <>
          <span>Correo electrónico:</span>
          <a href={`mailto:${email}`}>{email}</a>
        </>
      )}

      {telefono && (
        <p className="telefono">
          Móvil: {formatPhone(telefono)}
        </p>
      )}
    </div>
  )
}

export default PersonalCard