import ".//styles.css"
import Navbar from "@/components/navbar";
const players = [
    {name: 'Pedro'},
    {name: 'João'},
    {name: 'Melo'},
    {name: 'Sabino'},
    {name: 'Feijão'},
    {name: '-'},
    {name: '-'},
    {name: '-'},
    {name: '-'},
    {name: '-'},
    {name: '-'},
    {name: '-'},
    {name: '-'},
    {name: '-'},
]

export default function MatchDetail() {
  return (
    <div className="m-10 w-full justify-center">
        <div>  
            <Navbar />
            <h1 className="text-3xl">
                Confirmação de horário
            </h1>
            <table className="m-auto">
                <thead>
                    <tr>
                    <th>Jogadores</th>  
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => (
                    <tr>
                        <td className="text-center">{player.name}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="tabela">
        </div>
        <div className="">
            <div className="m-4 flex flex-row space-x-4">
                <div>Descrição</div>
                <div>Contato</div>
                <div>Valor</div>
            </div>
            <div className="m-4">
                <button className="botaoconfirma">ENTRAR</button>
            </div>
        </div>
    </div>
  );
}