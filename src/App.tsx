import React, { useState } from "react";

import { AddItem } from "./components/AddItem";
import { ListItem } from "./components/ListItem";

import { Item } from "./types/item";

import { Container, Wrapper, Header } from "./Appstyles";

function App() {
  const initialList = [
    {
      id: 1,
      name: "Comprar massa de bolo",
      done: false,
    },
    { id: 2, name: "Comprar pão francês", done: false },
  ];

  const [list, setList] = useState<Item[]>(initialList);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  };

  return (
    <Container>
      <Wrapper>
        <Header>ToDo List com React</Header>
        <AddItem onEnter={handleAddTask} />
        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={handleTaskChange} />
        ))}
      </Wrapper>
    </Container>
  );
}

export default App;
