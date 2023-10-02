"use client"

import SignOut from "@/components/sign-out";
import Navbar from "@/components/navbar";
import { useRouter } from 'next/navigation';

export default function Home() { 

  const matches = [
    {
      id: 1,
      datetime: '28-09-2023',
      gym_id: 1,
      price: 80,
      players: [{
        id: 1
      }]
    },
    {
      id: 2,
      datetime: '28-09-2023',
      gym_id: 2,
      price: 100,
      players: [{
        id: 1
      }]
    },
    {
      id: 3,
      datetime: '28-09-2023',
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

  return (

    <div>  
      <Navbar />

      <table className="m-auto">
          <thead>
            <tr>
              <th>Local</th>
              <th className="w-36">Horario </th>
              <th className="w-20">Price</th>
              <th>Jogadores</th>  
            </tr>
          </thead>
          <tbody>
            {matches.map((match) => (
              <tr 
                key={match.id} 
                onClick={() => handleRowClick()}
                style={{ cursor: 'pointer' }}
              >
                <td className="text-center">{match.id}</td>
                <td className="text-center">{match.datetime}</td>
                <td className="text-center">{match.price}</td>
                <td className="text-center">{match.players.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}
