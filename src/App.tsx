import { useState } from "react";
import { Item } from "./types/Item";

import { Container } from "./App.styles";
import { Area } from "./App.styles";
import { Header } from "./App.styles";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar o pão na padaria", done: false },
    { id: 2, name: "Comprar um bolo na padaria", done: false },
  ]);

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>

        {list.map((item, index)=>(
          <div>{item.name}</div>
        ))}
      </Area>
    </Container>
  );
};

export default App;
