'use client'

import { useRouter } from 'next/navigation';
import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";

interface ListPlayersProps{
	hasButtons?: boolean
}

export default function ListPlayers({hasButtons}: ListPlayersProps) {

	const matches = [
    {
      id: 1,
      datetime: new Date(Date.now()),
      gym_id: 1,
      price: 80,
      players: [{
        id: 1
      }]
    },
    {
      id: 2,
      datetime: new Date(Date.now()),
      gym_id: 2,
      price: 100,
      players: [{
        id: 1
      }]
    },
    {
      id: 3,
      datetime: new Date(Date.now()),
      gym_id: 1,
      price: 70,
      players: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
      ]
    }
  ]

	const router = useRouter();
  
  const handleRowClick = () => {
    router.push(`/`);
  };

  const handleEditClick = () => {
    router.push(`/match-detail`);
  };

  return (
    <div>
			<table className="m-auto text-lg border-2">
        <thead>
          <tr border-solid>
            <th className='px-10'>Local</th>
            <th className="w-36 px-10">Horario </th>
            <th className="w-20 px-10">Price</th>
            <th className='px-10'>Jogadores</th>  
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr 
              key={match.id} 
              onClick={() => handleRowClick()}
              style={{ cursor: 'pointer' }}
              className='border-2'
            >
              <td className="text-center py-4">{match.id}</td>
              <td className="text-center">{`${match.datetime.getDate()}/${match.datetime.getMonth()}/${match.datetime.getFullYear()}
								- ${match.datetime.getHours()}:${match.datetime.getMinutes()}
							`}</td>
              <td className="text-center">{match.price}</td>
              <td className="text-center">{match.players.length}</td>
							{hasButtons && (
								<>
									<td className='pr-4 pl-2'><HiOutlinePencilAlt onClick={(event) => {event.stopPropagation(); handleEditClick()}} style={{ cursor: 'cell' }}/></td>
									<td className='pr-4'><HiOutlineTrash/></td>
								</>
							)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
  