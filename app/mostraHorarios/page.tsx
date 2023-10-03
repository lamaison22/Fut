"use client"
import Navbar from "@/components/navbar";
import { Table } from "@mantine/core";
const elements = [
    { id: 6, horario: 12.011, name: 'Ivo Silveira' },
    { id: 7, horario: 14.007, name: 'Ivo Silveira' },
    { id: 39, horario: 88.906, name: 'Ivo Silveira' },
    { id: 56, horario: 137.33, name:'Ivo Silveira' },
    { id: 58, horario: 140.12,name:'Ivo Silveira' },
  ];
export default function horarios(){
    
    const rows = elements.map((element) => (
        <Table.Tr key={element.name}>
          <Table.Td>{element.id}</Table.Td>
          <Table.Td>{element.name}</Table.Td>
          <Table.Td>{element.horario}</Table.Td>
        </Table.Tr>
      ));
    return(
      <>      
      <Navbar/>

        <div>
         
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Id</Table.Th>
                  <Table.Th>Ginásio</Table.Th>
                  <Table.Th>Horário</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </div>
        </>

    )
}