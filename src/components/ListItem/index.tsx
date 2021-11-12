import React, { useState } from "react";
import { Item } from "../../types/item";
import { Container } from "./styles";

type Props = {
  item: Item;
  onChange: (id: number, done: boolean) => void;
};

export const ListItem = ({ item, onChange }: Props) => {
  return (
    <Container done={item.done}>
      <input
        id={`${item.id}`}
        type="checkbox"
        checked={item.done}
        onChange={(e) => onChange(item.id, e.target.checked)}
      />
      <label htmlFor={`${item.id}`}>{item.name}</label>
    </Container>
  );
};
