import { Routes, Route } from "react-router";
import { Weather } from "./Weather";
import { Home } from "./Home";
import { Todo } from "./ToDo";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/to-do" element={<Todo />}></Route>
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
