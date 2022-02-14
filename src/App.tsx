import { useState } from "react";
import "./App.css";
import InputField from "./Components/InputField";
import { Todo } from "./Components/model";
import UseContextComponent from "./TypeScript Cheats/UseContextComponent";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);
  return (
    <div className="App">
      <h1 className="heading">Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
