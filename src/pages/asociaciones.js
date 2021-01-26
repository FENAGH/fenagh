import React from "react"
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Container } from "../components/globals"

const AssociationsPage = () => (
  <Layout>
    <SEO title="Asociaciones" />
    <Container>
      <h1>Asociaciones</h1>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th fontSize="xl">No.</Th>
            <Th fontSize="xl">Siglas</Th>
            <Th fontSize="xl">Nombre</Th>
            <Th fontSize="xl">Presidente</Th>
            <Th fontSize="xl">Teléfono</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>01</Td>
            <Td>AGAFAM</Td>
            <Td>Asociacion de Ganaderos y Agricultores de Francisco Morazan</Td>
            <Td>Juan Carlos Ramos</Td>
            <Td><a href="tel:2271-3203" target="_blank" rel="noopener noreferrer">2271-3203</a></Td>
          </Tr>
          <Tr>
            <Td>02</Td>
            <Td>AGAA</Td>
            <Td>Asociacion de Ganaderos y Agricultores de Atlantida</Td>
            <Td>Juan Alberto Sauceda</Td>
            <Td><a href="tel:2242-3557" target="_blank" rel="noopener noreferrer">2242-3557</a></Td>
          </Tr>
          <Tr>
            <Td>03</Td>
            <Td>AGAT</Td>
            <Td>Asociacion de Ganaderos y Agricultores de Tela</Td>
            <Td>Ricardo Calix presidente</Td>
            <Td><a href="tel:2448-3061" target="_blank" rel="noopener noreferrer">2448-3061</a></Td>
          </Tr>
          <Tr>
            <Td>04</Td>
            <Td>AGADES</Td>
            <Td>Asociacion de Ganaderos y Agricultores de Saba, Colon</Td>
            <Td>Juan Edgardo Ruiz</Td>
            <Td><a href="tel:2424-8343" target="_blank" rel="noopener noreferrer">2424-8343</a></Td>
          </Tr>
          <Tr>
            <Td>05</Td>
            <Td>AGAE</Td>
            <Td>Asociacion de Ganaderos y Agricultores de Bonito Oriental</Td>
            <Td>Clemente Cardona</Td>
            <Td><a href="tel:2438-9542" target="_blank" rel="noopener noreferrer">2438-9542</a></Td>
          </Tr>
          <Tr>
            <Td>06</Td>
            <Td>AAGI</Td>
            <Td>Asociacion de Ganaderos y Agricultores de De Ilanga</Td>
            <Td>Mario Barralaga </Td>
            <Td><a href="tel:9930-0954" target="_blank" rel="noopener noreferrer">9930-0954</a></Td>
          </Tr>
          <Tr>
            <Td>07</Td>
            <Td>AGAC</Td>
            <Td>Asociacion de Ganaderos y Agricultores de de Copan</Td>
            <Td>Gilberto Moreno</Td>
            <Td><a href="tel:2662-0856" target="_blank" rel="noopener noreferrer">2662-0856</a></Td>
          </Tr>
          <Tr>
            <Td>08</Td>
            <Td>AGAS</Td>
            <Td>Asociacion de Ganaderos y Agricultores de de Sula</Td>
            <Td>Hector Ferreira</Td>
            <Td><a href="tel:2556-7390" target="_blank" rel="noopener noreferrer">2556-7390</a></Td>
          </Tr>
          <Tr>
            <Td>09</Td>
            <Td>ANAPOH</Td>
            <Td>Asociacion Nacional de Porcicultores de Hond</Td>
            <Td>Flavio Tinoco</Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>10</Td>
            <Td>AGAPCO</Td>
            <Td>Asociacion de Ganaderos y Agricultores de Pueto Cortes y Omoa</Td>
            <Td>Eduardo Yalu</Td>
            <Td><a href="tel:2660-2114" target="_blank" rel="noopener noreferrer">2660-2114</a></Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  </Layout>
)

export default AssociationsPage