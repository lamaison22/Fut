import React, { useState } from "react";
import { DateTimePicker } from "@mantine/dates";
export default function DatePicker() {
  const [startDate, setStartDate] = useState("");
  const [dataHora, setDataHora] = useState<Date | null>(null);


  return (
    
      <DateTimePicker
       label="Horario"
        className="block text-xs text-gray-600 uppercase"
        dropdownType="modal"
        value={dataHora}
        onChange={setDataHora}
        placeholder="Selecione a data e hora"
      />
  );
}
