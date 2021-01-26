import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react"

const TableComponent = () => (
  <div>
    <h1>Junta Directiva</h1>
    <Table variant="striped" colorScheme="teal">
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th fontSize="xl">Nombre</Th>
          <Th fontSize="xl">Cargo</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Anabel Gallardo Ponce</Td>
          <Td>Presidente</Td>
        </Tr>
        <Tr>
          <Td>Héctor Ferreira Sabillon</Td>
          <Td>Vicepresidente</Td>
        </Tr>
        <Tr>
          <Td>Gilberto Moreno Alvarado</Td>
          <Td>Secretario</Td>
        </Tr>
        <Tr>
          <Td>Juan Jose Cruz</Td>
          <Td>Tesorero</Td>
        </Tr>
        <Tr>
          <Td>Asterio Reyes</Td>
          <Td>Vocal I</Td>
        </Tr>
        <Tr>
          <Td>Roger Padilla</Td>
          <Td>Vocal II</Td>
        </Tr>
        <Tr>
          <Td>Ismael Espinal</Td>
          <Td>Vocal III</Td>
        </Tr>
        <Tr>
          <Td>Francisco Sandoval</Td>
          <Td>Vocal IV</Td>
        </Tr>
        <Tr>
          <Td>Flavio Tinoco</Td>
          <Td>Junta Fiscalizadora</Td>
        </Tr>
        <Tr>
          <Td>Mario Lovo</Td>
          <Td>Junta Fiscalizadora</Td>
        </Tr>
        <Tr>
          <Td>Gerardo Guillen</Td>
          <Td>Junta Fiscalizadora</Td>
        </Tr>
        <Tr>
          <Td>Víctor Wilson</Td>
          <Td>Asesor</Td>
        </Tr>
        <Tr>
          <Td>Pablo Sierra</Td>
          <Td>Asesor</Td>
        </Tr>
        <Tr>
          <Td>Leopoldo Duran</Td>
          <Td>Asesor</Td>
        </Tr>
        <Tr>
          <Td>Juan Carlos Ramos</Td>
          <Td>Asesor</Td>
        </Tr>
        <Tr>
          <Td>José Manuel España</Td>
          <Td>Asesor</Td>
        </Tr>
        <Tr>
          <Td>Mario Sánchez</Td>
          <Td>Asesor</Td>
        </Tr>
        <Tr>
          <Td>Denis Avendaño</Td>
          <Td>Asesor</Td>
        </Tr>
      </Tbody>
    </Table>
  </div>
)

export default TableComponent
