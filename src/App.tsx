import { useState } from "react";
import { Item } from "./types/Item";
import * as C from "./App.styles";
import { Container } from "./App.styles";
import { Area } from "./App.styles";
import { Header } from "./App.styles";
import { ListItem } from "./Components/ListItem/index. listItem";
import { AddArea } from "./Components/AddArea/index.add";


const App = () => {
  const [list, setList] = useState<Item[]>([
    // { id: 1, name: "Comprar o pão na padaria", done: false },
    // { id: 2, name: "Comprar um bolo na padaria", done: false },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
          
        ))}
       
      </C.Area>
    </C.Container>
  );
};

export default App;
