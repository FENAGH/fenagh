import React from "react"
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Condensed } from "../components/globals"

const PersonalPage = () => (
  <Layout>
    <SEO title="Personal Administrativo" />
    <Condensed>
      <h1>Personal Administrativo</h1>
      <Table variant="striped" size="sm">
        <Thead>
          <Tr>
            <Th fontSize="xl">Nombre</Th>
            <Th fontSize="xl">Cargo</Th>
            <Th fontSize="xl">Correo</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Msc. Javier Barahona</Td>
            <Td>Asistente Técnico Administrativo</Td>
            <Td><a href="mailto:jbarahona@fenagh.net" target="_blank" rel="noopener noreferrer">jbarahona@fenagh.net</a></Td>
          </Tr>
          <Tr>
            <Td>Msc. Maria Jose Romero</Td>
            <Td>Asistente Técnico Administrativo</Td>
            <Td><a href="mailto:fenagh.oficial@gmail.com" target="_blank" rel="noopener noreferrer">fenagh.oficial@gmail.com</a></Td>
          </Tr>
          <Tr>
            <Td>Ing. José A. Chacón</Td>
            <Td>Jefe de Registro Genealógico</Td>
            <Td><a href="mailto:jchacon@fenagh.net" target="_blank" rel="noopener noreferrer">jchacon@fenagh.net</a></Td>
          </Tr>
          <Tr>
            <Td>Kenia Castellanos</Td>
            <Td>Administradora</Td>
            <Td><a href="mailto:kcastellanos@fenagh.net" target="_blank" rel="noopener noreferrer">kcastellanos@fenagh.net</a></Td>
          </Tr>
          <Tr>
            <Td>Ing. José A. Chacón</Td>
            <Td>Jefe de Registro Genealógico</Td>
            <Td><a href="mailto:jchacon@fenagh.net" target="_blank" rel="noopener noreferrer">jchacon@fenagh.net</a></Td>
          </Tr>
          <Tr>
            <Td>Lic. Marlen Torres</Td>
            <Td>Supervisora de Recaudo</Td>
            <Td><a href="mailto:mtorres@fenagh.net" target="_blank" rel="noopener noreferrer">mtorres@fenagh.net</a></Td>
          </Tr>
          <Tr>
            <Td>Lic. Daniel Santos</Td>
            <Td>Oficial de Recaudo PROMDECA</Td>
            <Td/>
          </Tr>
          <Tr>
            <Td>Angie Tillet</Td>
            <Td>Oficial de Recaudo SENASA SPS</Td>
            <Td/>
          </Tr>
        </Tbody>
      </Table>
    </Condensed>
  </Layout>
)

export default PersonalPage