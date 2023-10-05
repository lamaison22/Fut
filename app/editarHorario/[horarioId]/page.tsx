"use client"
import DatePicker from "@/components/datepicker";
import LoadingDots from "@/components/loading-dots";
import { DateTimePicker } from "@mantine/dates";
import { useState } from "react";
// import horarios from "../mostraHorarios/page";
import { useParams } from "next/navigation";

export default function editarHorario() {
  const [loading, setLoading] = useState(false);
  const [dataHora, setDataHora] = useState<Date | null>(null);
  const params = useParams()

  console.log(params)

// aq tem q pegar do banco para poder atualizar

  return (
    <div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          
          var formData = new FormData(e.target as HTMLFormElement); //sla pq ta reclamando mas ta funcionando
          const form_values = Object.fromEntries(formData);
          console.log('form values', form_values); 
        }}
        className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
      >
        <div className="place-self-center"> Cadastro de Horario</div>
        <div>
          <label
            htmlFor="horario"
            className="block text-xs text-gray-600 uppercase"
          >
            Horario 
          </label>

          <label>
          <DateTimePicker
              label="horario"
              id="horario"
              name="horario"
                className="block text-xs text-gray-600 uppercase"
                dropdownType="modal"
                value={dataHora}
                onChange={setDataHora}
                placeholder="Selecione a data e hora"
              />
          </label>
          <input
          
            id="ginasio"
            name="ginasio"
            type="ginasio"
            placeholder="aq vai puxar sozinho do banco e n deixar mudar"
            autoComplete="ginasio"
            required
            className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
        </div>
        
        
        <button
          disabled={loading}
          type="submit"
          className={`${
            loading
              ? "cursor-not-allowed border-gray-200 bg-gray-100"
              : "border-black bg-black text-white hover:bg-white hover:text-black"
          } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
        >
          {loading ? (
            <LoadingDots color="#808080" />
          ) : <div>Enviar</div>}
        </button>

      </form>
    </div>
  );
}
