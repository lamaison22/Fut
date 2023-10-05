'use client'

import { Match } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";

interface ListPlayersProps{
	hasButtons?: boolean
}

export default function ListPlayers({hasButtons}: ListPlayersProps) {
	const router = useRouter();

  const [matches, setMatches] = useState<Match[]>([]) 

  useEffect(() => {
    async function getMatches() {
      const response = await fetch('/api/matches')
      const matchList = await response.json()
      console.log(matchList)
      setMatches(matchList)
    }

    getMatches()
  }, [])
  
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
              <td className="text-center">{`${new Date(match.datetime).toLocaleString('pt-br')}`}</td>
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
  