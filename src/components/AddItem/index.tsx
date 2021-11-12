import React, { useState, KeyboardEvent } from "react";

import { Container, ButtonAdd } from "./styles";

type Props = {
  onEnter: (taskName: string) => void;
};
export const AddItem = ({ onEnter }: Props) => {
  const [values, setValues] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    console.log(e.code);
    if (e.code === "NumpadEnter" && values !== "") {
      onEnter(values);
      setValues("");
    }
  };
  return (
    <Container>
      <ButtonAdd>➕</ButtonAdd>
      <input
        type="text"
        placeholder="Adicionar Tarefa"
        value={values}
        onChange={(e) => setValues(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </Container>
  );
};
